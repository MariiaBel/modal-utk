import { useState } from "react";
import styles from "./InputNumber.module.css";

interface InputProps {
    placeholder?: string;
    name: string;
    value?: number;
    disable?: boolean;
    onChange?: (value: number) => void;
    error: boolean;
}

const InputNumber = ({
    placeholder = "",
    value,
    name,
    disable = false,
    onChange,
    error,
}: InputProps) => {
    const [isError, setIsError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (!/^-?\d*\.?\d*$/.test(newValue)) {
            e.target.value = "";
        } else {
            if (+newValue === 0) {
                setIsError(true);
            } else {
                setIsError(false);
            }

            if (onChange) {
                onChange(+newValue);
            }
        }
    };

    const inputClasses = `${styles.input} ${
        (error || isError) && styles.error
    } ${disable && styles.disable}`;

    return (
        <div className={styles.container}>
            <input
                type="text"
                name={name}
                className={inputClasses}
                placeholder={placeholder}
                defaultValue={value}
                onChange={handleChange}
                disabled={disable}
            />
            {(error || isError) && (
                <span className={styles.textError}>
                    Поле обязательно для заполнения
                </span>
            )}
        </div>
    );
};

export default InputNumber;
