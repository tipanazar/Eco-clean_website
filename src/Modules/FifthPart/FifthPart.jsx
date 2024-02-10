import { Icon } from "../../shared/Components/Icon";

import { SiteSection } from "../../shared/Components/SiteSection/SiteSection";

import s from "./fifthPart.module.scss";

export const FifthPart = () => {
  return (
    <>
      <SiteSection style={{ paddingBottom: 0 }} title="Kontakt" id="contacts">
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
      </SiteSection>
      <Icon className={s.bigIcon} iconId="footerBigIcon" />
    </>
  );
};
