import { useEffect } from "react";
import { createPortal } from "react-dom";

import s from "./modal.module.scss";
import { Icon } from "../Icon";

const modalRoot = document.querySelector("div#modalRoot");
const body = document.querySelector("body");

export const Modal = ({ children, closeModal, title }) => {
  useEffect(() => {
    modalRoot.addEventListener("click", close);
  });

  modalRoot.style.zIndex = 2;
  body.style.overflow = "hidden";

  const close = (ev) => {
    if (ev.target === ev.currentTarget || ev === "closeButton") {
      modalRoot.removeEventListener("click", close);
      modalRoot.style.zIndex = -1;
      body.style.overflow = "auto";
      closeModal();
    }
  };

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modalHeader}>
        <p className={s.title}>{title}</p>
        <button className={s.closeButton} onClick={() => close("closeButton")}>
          <Icon className={s.closeButtonIcon} iconId="cross" />
        </button>
      </div>
      {children}
      
    </div>,
    modalRoot
  );
};
