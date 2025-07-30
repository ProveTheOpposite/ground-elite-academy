const ContactItem = ({ icon, children, link, className, download = false }) => (
  <span className={`flex items-center gap-4 ${className ? className : ""}`}>
    {icon}
    {link ? (
      <a
        href={link}
        className="hover:underline"
        target="_blank"
        download={download}
      >
        {children}
      </a>
    ) : (
      <>{children}</>
    )}
  </span>
);

export default ContactItem;
