import s from "./siteSection.module.scss";

export const SiteSection = ({ title, children, id, style }) => {
  return (
    <section className={s.wrapper} id={id} style={style}>
      <p className={s.text}>{title}</p>
      {children}
    </section>
  );
};
