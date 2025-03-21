import styles from "./Icon.module.css";
// import sprite from "../../assets/sprite.svg";

interface IconProps {
    id: string;
    width?: number;
    height?: number;
    label?: string;
    className: string;
}
export default function Icon({
    id,
    width = 12,
    height = 12,
    label = "",
    className,
}: IconProps) {
    return (
        <svg
            className={`${className} ${styles.icon}`}
            width={width}
            height={height}
            aria-label={label}
        >
            <use xlinkHref={`./sprite.svg#${id}`} />
        </svg>
    );
}
