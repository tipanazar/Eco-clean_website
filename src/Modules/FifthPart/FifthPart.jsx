import { Icon } from "../../shared/Components/Icon";

import { SiteSectionTitle } from "../../shared/Components/SiteSection/SiteSectionTitle/SiteSectionTitle";

import { Img } from "../../shared/Components/Img";
import bottomImg from "../../images/others/bottomImg.png";

import s from "./fifthPart.module.scss";

export const FifthPart = () => {
  return (
    <>
      <section className={s.wrapper}>
        <SiteSectionTitle title="Kontakt" />
        <div className={s.contentWrapper}>
          <address className={s.address}>
            <a className={s.link} href="tel:+48538944673">
              Pl: +48538944673
            </a>
            <a className={s.link} href="mailto:eco.clean.bydgoszcz@gmail.com">
              eco.clean.bydgoszcz@gmail.com
            </a>
            <p className={s.linksWrapper}>
              Napisz do nas:
              <a
                className={s.link}
                href="https://www.instagram.com/pranie.kanap_bydgoszcz?igsh=NDYwcGppdjV3aXVy"
              >
                <Icon className={s.icon} iconId="instagram" />
              </a>
              <a className={s.link} href="https://t.me/+380967935369">
                <Icon className={s.icon} iconId="telegram" />
              </a>
              <a
                className={s.link}
                href="https://www.facebook.com/profile.php?id=100083723741440"
              >
                <Icon className={s.icon} iconId="facebook" />
              </a>
            </p>
          </address>
          <Img className={s.bottomImg} src={bottomImg} />
        </div>
      </section>
    </>
  );
};
