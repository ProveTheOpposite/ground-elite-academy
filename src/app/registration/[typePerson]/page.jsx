import RegistrationPageClient from "@/components/RegistrationPageClient";

const RegistrationPage = async ({ params }) => {
  const { typePerson } = await params;

  return <RegistrationPageClient typePerson={typePerson} />;
};

export default RegistrationPage;
