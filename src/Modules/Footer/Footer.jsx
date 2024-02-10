import { Img } from "../../shared/Components/Img";
import { headerLogo } from "../../images";

import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <Img className={s.img} src={headerLogo} />
      <nav className={s.navWrapper}>
        <a className={s.navlink} href="#services">
          Usługi
        </a>
        <a className={s.navlink} href="#contacts">
          Kontakt
        </a>
      </nav>
      <address className={s.contactsWrapper}>
        <a className={s.contactsLink} href="tel:+48538944673">
          +48 538 944 673
        </a>
        <a
          className={s.contactsLink}
          href="mailto:eco.clean.bydgoszcz@gmail.com"
        >
          eco.clean.bydgoszcz@gmail.com
        </a>
      </address>
      <p className={s.copyrightText}>Eco Clean. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
};
