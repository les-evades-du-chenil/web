import { Field, FieldHookConfig, useField } from "formik";
import React from "react";
import styles from "./form-group.module.scss";

export interface IFormGroupProps {
  id: string;
  type: string;
  children: any;
  name: string;
  error?: boolean;
  errortext?: string;
}

const buildFieldProps = (props: IFormGroupProps): FieldHookConfig<any> => {
  const res: { name: string; [key: string]: any } = { name: props.name! };
  for (const [key, value] of Object.entries(props)) {
    if (["children", "name", "error"].includes(key) === false) {
      res[key] = value;
    }
  }
  return res;
};

const FormGroup = (props: IFormGroupProps) => {
  const fieldProps = buildFieldProps(props);

  const [field] = useField(fieldProps);

  return (
    <div className={styles.formGroup}>
      <label htmlFor={props.id}>{props.children}</label>
      <Field {...field} {...fieldProps} />
      {props.error && <div className="text-primary">{props.errortext}</div>}
    </div>
  );
};

export default FormGroup;
