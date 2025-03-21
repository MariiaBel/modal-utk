import { useState } from "react";
import Modal from "./components/modal/Modal";
import CreditCalculator from "./components/creditCalculator/CreditCalculator";
import Button from "./components/button/Button";
import styles from "./App.module.css";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={styles.page}>
            <Button style="outline" onClick={openModal}>
                Расчет платежей
            </Button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <CreditCalculator />
            </Modal>
        </div>
    );
};

export default App;
