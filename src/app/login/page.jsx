import LoginPageClient from "@/components/LoginPageClient";

export const metadata = {
  title: "Connectez-vous pour rejoindre la communauté Ground Elite Academy",
  description: "Connexion",
};

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <LoginPageClient />
    </div>
  );
};

export default LoginPage;
