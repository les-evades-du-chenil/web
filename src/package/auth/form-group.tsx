import { Field, FieldHookConfig, useField } from "formik";
import React from "react";
import styles from "./form-group.module.scss";

export interface IFormGroupProps {
  id: string;
  type: string;
  children: any;
  name: string;
}

const buildFieldProps = (props: IFormGroupProps): FieldHookConfig<any> => {
  const res: { name: string; [key: string]: any } = { name: props.name! };
  for (const [key, value] of Object.entries(props)) {
    if (["children", "name"].includes(key) === false) {
      res[key] = value;
    }
  }
  return res;
};

const FormGroup = (props: IFormGroupProps) => {
  const fieldProps = buildFieldProps(props);

  const [field, meta] = useField(fieldProps);

  return (
    <div className={styles.formGroup}>
      <label htmlFor={props.id} className={styles.label}>
        {props.children}
      </label>
      <Field {...field} {...fieldProps} className={styles.input} />
    </div>
  );
};

export default FormGroup;
