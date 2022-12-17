import { FC } from 'react';
import { MouseEventHandler } from "react";
export interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: FC<ButtonProps>;
export default Button;
