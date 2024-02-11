import { Icon } from "../../shared/Components/Icon";
import { Img } from "../../shared/Components/Img";

import { headerLogo } from "../../images";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header} id="header">
      <a className={s.headerLogoLink} href="#header">
        <Img className={s.headerLogo} src={headerLogo} alt="logo" />
      </a>
      <address className={s.address}>
        <a className={s.addressLink} href="https://t.me/+380967935369">
          <Icon className={s.icon} iconId="telegram" />
          Napisz do nas teraz
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
