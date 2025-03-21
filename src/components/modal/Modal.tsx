import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Icon from "../icon/Icon";
import styles from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.modal}>
            <div className={styles.modalWindow} ref={modalRef}>
                <button className={styles.modalCloseBtn} onClick={onClose}>
                    <Icon
                        id="cross"
                        label="закрытие модального окна"
                        className={styles.iconCross}
                    />
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default Modal;
