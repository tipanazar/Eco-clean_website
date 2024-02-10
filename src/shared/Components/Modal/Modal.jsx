import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Icon } from "../Icon";
import s from "./modal.module.scss";

const modalRoot = document.querySelector("div#modalRoot");
const body = document.querySelector("body");

export const Modal = ({ children, closeModal, title }) => {
  const [isButton, setIsButton] = useState(true);
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
      <button
        className={s.orderButton}
        onClick={() => isButton && setIsButton(false)}
      >
        {isButton ? (
          "Zamów usługę"
        ) : (
          <a className={s.contactLink} href="tel:+48538944673">
            +48538944673
          </a>
        )}
      </button>
      <address className={s.address}>
        <a
          className={isButton ? s.contactLinkDisabled : s.contactLink}
          href="https://www.instagram.com/pranie.kanap_bydgoszcz?igsh=NDYwcGppdjV3aXVy"
        >
          <Icon className={s.icon} iconId="instagram" />
        </a>
        <a
          className={isButton ? s.contactLinkDisabled : s.contactLink}
          href="https://t.me/+380967935369"
        >
          <Icon className={s.icon} iconId="telegram" />
        </a>
        <a
          className={isButton ? s.contactLinkDisabled : s.contactLink}
          href="https://www.facebook.com/profile.php?id=100083723741440"
        >
          <Icon className={s.icon} iconId="facebook" />
        </a>
      </address>
    </div>,
    modalRoot
  );
};
