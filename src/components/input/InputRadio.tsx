import styles from "./InputRadio.module.css";

interface InputRadioProps {
    className?: string;
    label: string;
    value: string;
    checked?: boolean;
    onChange: (value: string) => void;
    name?: string;
}

const InputRadio = ({
    className,
    label,
    value,
    checked = false,
    onChange,
    name = "radio-group",
}: InputRadioProps) => {
    return (
        <label className={className}>
            <input
                className={styles.input}
                type="radio"
                value={value}
                defaultChecked={checked}
                onChange={() => onChange(value)}
                name={name}
            />
            <span className={styles.label}>{label}</span>
        </label>
    );
};

export default InputRadio;
