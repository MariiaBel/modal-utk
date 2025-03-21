import { useState } from "react";
import Button from "../button/Button";
import InputScreen from "../inputScreen/InputScreen";
import ResultScreen from "../resultScreen/ResultScreen";
import styles from "./CreditCalculator.module.css";

const CreditCalculator = () => {
    const [loanAmount, setLoanAmount] = useState<number>();
    const [selectedTerm, setSelectedTerm] = useState<number>(12);
    const [isCalculated, setIsCalculated] = useState<boolean>(false);

    const handleLoanAmountChange = (value: number) => {
        setIsCalculated(false);
        setLoanAmount(value);
    };

    const handleCalculate = () => {
        setIsCalculated(true);
    };

    const handleTermSelect = (term: number) => {
        setSelectedTerm(term);
    };

    const handleSubmit = (FormData: FormData) => {
        console.log("Submit");
        console.log(FormData);
    };

    return (
        <div>
            <h3 className="h3">Платежи по кредиту</h3>
            <p>
                Введите сумму кредита и выберите срок, на который вы хотите его
                оформить.
                <br /> Мы автоматически рассчитаем для вас ежемесячный платеж,
                чтобы вы могли лучше спланировать свои финансы.
            </p>

            <form className={styles.form} action={handleSubmit}>
                <InputScreen
                    className={styles.screen}
                    loanAmount={loanAmount}
                    onLoanAmountChange={handleLoanAmountChange}
                    onCalculate={handleCalculate}
                    onTermSelect={handleTermSelect}
                />
                {isCalculated && (
                    <ResultScreen
                        className={styles.screen}
                        loanAmount={loanAmount}
                        selectedTerm={selectedTerm}
                    />
                )}

                <Button className={styles.btnSubmit} submit>
                    Добавить
                </Button>
            </form>
        </div>
    );
};

export default CreditCalculator;
