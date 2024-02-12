import { SiteSectionTitle } from "./SiteSectionTitle/SiteSectionTitle";

import s from "./siteSection.module.scss";

export const SiteSection = ({ title, children, id, style, className = "" }) => {
  return (
    <section className={`${s.wrapper} ${className}`} id={id} style={style}>
      <SiteSectionTitle title={title} />
      {children}
    </section>
  );
};
