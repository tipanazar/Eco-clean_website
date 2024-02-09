import s from "./sectionTitle.module.scss";

export const SectionTitle = ({ text }) => {
  return (
    <p className={s.text} id={text}>
      {text}
    </p>
  );
};
