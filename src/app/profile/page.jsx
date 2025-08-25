import ProfilePageClient from "@/components/ProfilePageClient";

export const metadata = {
  title: "Profil utilisateur",
  description: "Profil utilisateur",
};

const ProfilePage = async () => {
  return (
    <div className="mt-[68px] py-8 xl:mt-[78px]">
      <ProfilePageClient />
    </div>
  );
};

export default ProfilePage;
