import { NextResponse } from "next/server";

import { db, storage } from "@/server/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";

import { sanitizeUserData } from "@/utils/sanitizeUserData";

export const POST = async (req, { params }) => {
  try {
    const { uid } = await params;
    const data = await req.json();
    const { registrationType } = data;

    // for the image profile
    // let profileImageUrl = null;

    // if (data.profileImage?.[0]) {
    //   const file = data.profileImage[0];
    //   const storageRef = ref(
    //     storage,
    //     `profileImages/${uid}/profile.${file.type.split("/")[1]}`,
    //   );
    //   await uploadBytes(storageRef, file);
    //   profileImageUrl = await getDownloadURL(storageRef);
    // }

    // for the user data
    const adulteData = {
      role: "adulte/ado",
      registerWithSite: true,
      createdAt: new Date(),
      // step 1
      email: data.email,
      // step 2
      paymentMethod: data.paymentMethod,
      subscriptionType: data.subscriptionType,
      alreadyPaid: data.alreadyPaid,
      // step 3
      // sub step 1
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      placeOfBirth: data.placeOfBirth,
      nationality: data.nationality,
      // sub step 2
      address: data.address,
      postalCode: data.postalCode,
      city: data.city,
      phoneNumber: data.phoneNumber,
      contactEmergency: data.contactEmergency,
      phoneNumberEmergency: data.phoneNumberEmergency,
      // sub step 3
      sexe: data.sexe,
      category: data.category,
      licences: data.licences,
      noteMedical: data.noteMedical,
      // step 4
      nonRespectRules: data.nonRespectRules,
      medical: data.medical,
      diffusePhotosHimself: data.diffusePhotosHimself,
      rulesRegulations: data.rulesRegulations,
      // profileImage: profileImageUrl,
    };
    const parentData = {
      role: "parent",
      registerWithSite: true,
      createdAt: new Date(),
      // step 1
      email: data.email,
      // step 2
      paymentMethod: data.paymentMethod,
      subscriptionType: data.subscriptionType,
      alreadyPaid: data.alreadyPaid,
      // step 3
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      address: data.address,
      postalCode: data.postalCode,
      city: data.city,
      contactEmergency: `${data.firstName} ${data.lastName}`,
      phoneNumberEmergency: data.phoneNumber,
      children: data.children,
      // step 4
      nonRespectRules: data.nonRespectRules,
      medical: data.medical,
      diffusePhotosHimself: data.diffusePhotosHimself,
      rulesRegulations: data.rulesRegulations,
    };

    const userRef = doc(db, "users", uid);
    const payload = registrationType === "adult" ? adulteData : parentData;

    await setDoc(userRef, payload);

    return NextResponse.json({
      id: userRef.id,
      ...payload,
    });
  } catch (e) {
    console.error("Erreur lors de la création de l'utilisateur:", e);
    return NextResponse.json(
      {
        error: "Une erreur s'est produite lors de la création de l'utilisateur",
      },
      { status: 500 },
    );
  }
};

export const GET = async (_req, { params }) => {
  const { uid } = await params;

  try {
    const folderRef = ref(storage, `profileImages/${uid}`);
    const result = await listAll(folderRef);

    const url = await Promise.all(
      result.items.map((itemRef) => getDownloadURL(itemRef)),
    );

    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return NextResponse.json(
        { error: `Utilisateur ${uid} non trouvé` },
        { status: 404 },
      );
    }

    return NextResponse.json({
      id: userSnap.id,
      profileImage: url,
      ...userSnap.data(),
    });
  } catch (error) {
    console.error("Firestore error:", error);
    return NextResponse.json(
      { error: `Erreur lors du chargement de l'utilisateur ${uid}` },
      { status: 500 },
    );
  }
};

export const PUT = async (req, { params }) => {
  try {
    const { uid } = await params;
    const editedData = await req.json();

    const safeData = sanitizeUserData(editedData, ["id", "createdAt"]);

    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    // let profileImageUrl = userSnap.data().profileImage;

    // Si le profileImage est modifié
    // const newImage = safeData.profileImage;

    // if (newImage !== profileImageUrl) {
    //   const prevProfileImage = userSnap.data().profileImage;
    //   if (prevProfileImage) {
    //     // Extraire le chemin depuis l’URL
    //     const path = prevProfileImage.split("/o/")[1].split("?")[0]; // "profileImages%2Fuid%2Fprofile.jpg"

    //     const filePath = decodeURIComponent(path); // "profileImages/uid/profile.jpg"

    //     const oldRef = ref(storage, filePath);
    //     await deleteObject(oldRef);
    //   }
    //   const { type, data } = newImage;

    //   const buffer = Buffer.from(data, "base64");

    //   const storageRef = ref(
    //     storage,
    //     `profileImages/${uid}/profile.${type.split("/")[1]}`,
    //   );
    //   await uploadBytes(storageRef, buffer, { contentType: type });
    //   profileImageUrl = await getDownloadURL(storageRef);
    // }

    if (!userSnap.exists()) {
      return NextResponse.json(
        { error: `Utilisateur ${uid} non trouvé` },
        { status: 404 },
      );
    }

    await setDoc(
      userRef,
      { ...safeData }, // rajouter profileImage: profileImageUrl le moment venu
      { merge: true },
    );

    const updatedSnap = await getDoc(userRef);
    const updatedUser = { id: updatedSnap.id, ...updatedSnap.data() };

    return NextResponse.json(updatedUser);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: `Erreur lors de la mise à jour de l'utilisateur ${uid}` },
      { status: 500 },
    );
  }
};
