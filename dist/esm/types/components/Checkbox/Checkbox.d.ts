/// <reference types="react" />
interface Props<T extends string | number | readonly string[]> {
    label: string;
    data?: T;
    checked?: boolean;
    onChange: (e: unknown) => void;
}
declare const Checkbox: <T extends string | number | readonly string[]>({ label, data, checked, onChange }: Props<T>) => JSX.Element;
export default Checkbox;
