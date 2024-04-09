import { Icon } from "../../shared/Components/Icon";
import { Img } from "../../shared/Components/Img";

import { headerLogo } from "../../images";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header} id="header">
      <a className={s.headerLogoLink} href="/">
        <Img className={s.headerLogo} src={headerLogo} alt="logo" />
      </a>
      <address className={s.address}>
        <a className={s.addressLink} href="tel:+48538944673">
          <Icon className={s.icon} iconId="phone" />
          +48538944673
        </a>
        <a
          className={s.addressLink}
          href="https://www.instagram.com/pranie.kanap_bydgoszcz?igsh=NDYwcGppdjV3aXVy"
        >
          <Icon className={s.icon} iconId="instagram" />
          pranie.kanap_bydgoszcz
        </a>
      </address>
    </header>
  );
};
