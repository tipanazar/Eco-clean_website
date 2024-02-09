import s from "./examplesCard.module.scss";

export const ExamplesCard = ({ isBefore, imgSrc }) => {
  return (
    <li className={s.listItem}>
      <img className={s.img} src={imgSrc} alt={isBefore ? "PRZED" : "PO"} />
      <p className={s.when}>{isBefore ? "PRZED" : "PO"}</p>
    </li>
  );
};
