import React from "react";
import styles from "./Checkbox.css";
import { nanoid }from "nanoid/non-secure";

interface Props<T extends string | number | readonly string[]> {
  label: string;
  data?: T;
  checked?: boolean;
  onChange: (e: unknown) => void
}

const Checkbox = <T extends string | number | readonly string[]>({ label, data, checked, onChange }: Props<T>) => {
  const id = React.useRef(nanoid(10));

  return (
    <div className={styles.wrapper}>
      <input
        data-flume-component="checkbox"
        className={styles.checkbox}
        type="checkbox"
        id={id.current}
        value={data}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
      <label data-flume-component="checkbox-label" className={styles.label} htmlFor={id.current}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
