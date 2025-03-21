import { useEffect, useState } from "react";
import InputRadio from "./../input/InputRadio";
import styles from "./ResultScreen.module.css";

type TDisplayMode = "monthly" | "yearly";

interface ResultScreenProps {
    className?: string;
    loanAmount?: number;
    selectedTerm: number;
}

const ResultScreen = ({
    className,
    loanAmount,
    selectedTerm,
}: ResultScreenProps) => {
    const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");
    const [payment, setPayment] = useState(0);

    const calculateMonthlyPayment = () => {
        return (loanAmount || 0) / selectedTerm;
    };

    const calculateYearlyPayment = () => {
        return calculateMonthlyPayment() * 12;
    };

    const handleDisplayModeChange = (value: TDisplayMode) => {
        setPeriod(value);
    };

    useEffect(() => {
        const paymentWithPeriod =
            period === "monthly"
                ? calculateMonthlyPayment().toFixed(2)
                : calculateYearlyPayment().toFixed(2);
        setPayment(+paymentWithPeriod);
    }, [selectedTerm, period]);

    return (
        <div className={className}>
            <h4 className="h4">Итого ваш платеж по кредиту:</h4>
            <div className={styles.modeItems}>
                <InputRadio
                    label="в год"
                    value="yearly"
                    name="period"
                    onChange={(value) =>
                        handleDisplayModeChange(value as TDisplayMode)
                    }
                />
                <InputRadio
                    label="в месяц"
                    value="monthly"
                    name="period"
                    checked
                    onChange={(value) =>
                        handleDisplayModeChange(value as TDisplayMode)
                    }
                />
            </div>
            <div className={styles.payment}>{payment} рублей</div>
        </div>
    );
};

export default ResultScreen;
