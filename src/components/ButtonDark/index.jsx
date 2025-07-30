const ButtonDark = ({ children, className, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-[#b0181c] px-6 py-3 text-sm font-bold tracking-wider text-white outline-hidden transition-all duration-150 hover:bg-[#7d2a2d] active:scale-95 md:text-base ${className ? className : ""}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonDark;
