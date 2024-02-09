import { Icon } from "../Icon";
import { Img } from "../Img";

import s from "./servicesCard.module.scss";

export const ServicesCard = ({
  title,
  price,
  iconId,
  m2 = null,
  isPng = false,
}) => {
  return (
    <li className={s.listItem}>
      <h2 className={s.title}>{title}</h2>
      {isPng ? (
        <Img className={s.img} src={iconId} alt={title} />
      ) : (
        <Icon className={s.icon} iconId={iconId} />
      )}
      <p className={s.price}>
        od {price} zł{m2 && "/m²"}
      </p>
      <button className={s.button}>Co obejmuje?</button>
    </li>
  );
};
