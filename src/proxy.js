const proxy = () => {
  // Si le user n'est pas connecté, il ne peut pas accéder à la page /profil
  // Si le user est connecté, alors
  // - Si le user a son email vérifié, il peut accéder à la page /profil mais pas /login ni /registration
  // - Si le user n'a pas son email vérifié, il ne peut pas accéder à la page /profil mais peut accéder à /login et /registration
};

export default proxy;

export const config = {
  matcher: ["/profile", "/login", "/registration"],
};
