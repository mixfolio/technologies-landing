import { footerLinks } from "../contstants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          <span className="">Технологии</span> – бренд компании ООО «НПО
          «Промтрейд»
        </p>
        <img src="./main-logo-24.svg" alt="Логотип Технологии" />
      </div>

      <hr />

      <div className="links">
        <p>© 2025 Технологии.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
