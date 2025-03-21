import styles from "./Buttom.module.css";

interface ButtonProps {
    style?: "primary" | "outline" | "disable" | "link";
    onClick?: () => void;
    className?: string;
    submit?: boolean;
    children: React.ReactNode;
}

const Button = ({
    style = "primary",
    onClick,
    children,
    submit = false,
    className = "",
}: ButtonProps) => {
    const styleClasses = {
        primary: styles.primary,
        outline: styles.outline,
        disable: styles.disable,
        link: styles.link,
    };

    const buttonClasses = `${styles.btn} ${className} ${styleClasses[style]}`;

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={style === "disable"}
            type={submit ? "submit" : "button"}
        >
            {children}
        </button>
    );
};

export default Button;
