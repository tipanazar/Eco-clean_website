import s from "./siteSectionTitle.module.scss";

export const SiteSectionTitle = ({ title }) => {
  return <p className={s.text}>{title}</p>;
};
