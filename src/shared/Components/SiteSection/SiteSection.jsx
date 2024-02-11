import { SiteSectionTitle } from "./SiteSectionTitle/SiteSectionTitle";

import s from "./siteSection.module.scss";

export const SiteSection = ({ title, children, id, style, className = "" }) => {
  return (
    <section className={`${s.wrapper} ${className}`} id={id} style={style}>
      {/* <p className={s.text}>{title}</p> */}
      <SiteSectionTitle title={title} />
      {children}
    </section>
  );
};
