export interface Props {
    value: string;
    onChange: (newValue: string) => void;
    placeholder: string;
    options: string[];
    className?: string;
    variant?: "flat" | "bordered" | "underlined" | "faded";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    size?: "xs" | "md" | "xl";
    radius?: "xs" | "sm";
    textSize?: "base";
    removeLabel?: boolean;
}