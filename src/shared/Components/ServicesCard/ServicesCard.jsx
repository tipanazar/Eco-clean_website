import { useState } from "react";
import { Icon } from "../Icon";
import { Img } from "../Img";
import { Modal } from "../Modal/Modal";

import s from "./servicesCard.module.scss";

const modalRoot = document.querySelector("div#modalRoot");

export const ServicesCard = ({
  title,
  price,
  iconId,
  m2 = null,
  isPng = false,
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // // <Modal>{children}</Modal>;
  // if (isModalOpen) {
  //   // modalRoot.style.zIndex = 2;
  // }
  // //  else {
  // //   modalRoot.style.zIndex = -1;
  // // }
  return (
    <>
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
        <button
          className={s.button}
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Co obejmuje?
        </button>
      </li>
      {isModalOpen && <Modal title={title} closeModal={() => setIsModalOpen(false)}>{children}</Modal>}
    </>
  );
};
