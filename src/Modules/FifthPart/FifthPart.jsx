import { Icon } from "../../shared/Components/Icon";

import { SiteSection } from "../../shared/Components/SiteSection/SiteSection";

import s from "./fifthPart.module.scss";

export const FifthPart = () => {
  return (
    <>
      <SiteSection title="Kontakt" id="contacts">
        <address className={s.address}>
          <a className={s.link} href="tel:+48538944673">
            Pl: +48538944673
          </a>
          <a className={s.link} href="mailto:eco.clean.bydgoszcz@gmail.com">
            eco.clean.bydgoszcz@gmail.com
          </a>
          <p className={s.linksWrapper}>
            Napisz do nas:
            <a className={s.link} href="">
              <Icon className={s.icon} iconId="instagram" />
            </a>
            <a className={s.link} href="">
              <Icon className={s.icon} iconId="facebook" />
            </a>
          </p>
        </address>
      </SiteSection>
      <Icon className={s.bigIcon} iconId="footerBigIcon" />
    </>
  );
};
