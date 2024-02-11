import { useState } from "react";
import { Icon } from "../../../shared/Components/Icon";
import { Img } from "../../../shared/Components/Img";
import { Modal } from "../../../shared/Components/Modal/Modal";

import s from "./servicesCard.module.scss";

export const ServicesCard = ({
  title,
  price,
  iconId,
  modalTitle,
  m2 = null,
  isPng = false,
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <li className={s.listItem}>
        <h2 className={s.title}>{title}</h2>
        {isPng ? (
          <Img className={s.img} src={iconId} alt={title} />
        ) : (
          <Icon className={s.icon} iconId={iconId} />
        )}
        <p className={s.price}>{price}</p>
        <button
          className={s.button}
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Co obejmuje?
        </button>
      </li>
      {isModalOpen && (
        <Modal title={modalTitle} closeModal={() => setIsModalOpen(false)}>
          {children}
        </Modal>
      )}
    </>
  );
};
