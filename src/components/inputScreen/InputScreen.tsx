import Button from "../button/Button";
import InputNumber from "./../input/InputNumber";
import styles from "./InputScreen.module.css";
import InputRadio from "./../input/InputRadio";
import { useState } from "react";

interface InputScreenProps {
    className?: string;
    loanAmount?: number;
    onLoanAmountChange: (value: number) => void;
    onCalculate: () => void;
    onTermSelect: (term: number) => void;
}

const InputScreen = ({
    className,
    loanAmount,
    onLoanAmountChange,
    onCalculate,
    onTermSelect,
}: InputScreenProps) => {
    const [isError, setIsError] = useState(false);

    const handleClickCalculate = () => {
        if (loanAmount && loanAmount > 0) {
            onCalculate();
            setIsError(false);
        } else {
            setIsError(true);
        }
    };
    return (
        <div className={className}>
            <h4 className="h4">Ваша сумма кредита</h4>
            <InputNumber
                value={loanAmount}
                name="loan"
                onChange={onLoanAmountChange}
                placeholder="Введите данные"
                error={isError}
            />
            <Button onClick={handleClickCalculate} style="link">
                Рассчитать
            </Button>

            <div className={styles.term}>
                <h4 className={`h4 ${styles.termTitle}`}>
                    Количество месяцев?
                </h4>
                <div className={styles.termItems}>
                    <InputRadio
                        label="12"
                        value="12"
                        name="term"
                        checked
                        onChange={() => onTermSelect(12)}
                    />
                    <InputRadio
                        label="24"
                        value="24"
                        name="term"
                        onChange={() => onTermSelect(24)}
                    />
                    <InputRadio
                        label="36"
                        value="36"
                        name="term"
                        onChange={() => onTermSelect(36)}
                    />
                    <InputRadio
                        label="48"
                        value="48"
                        name="term"
                        onChange={() => onTermSelect(48)}
                    />
                </div>
            </div>
        </div>
    );
};

export default InputScreen;
