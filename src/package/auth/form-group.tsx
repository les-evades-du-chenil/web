import styles from "./form-group.module.scss";

export interface IFormGroupProps {
  children: any;
  id: string;
  type: string;
  inputRef: object;
  register: Function;
}

const FormGroup = (props: IFormGroupProps) => (
  <div className={styles.formGroup}>
    <label htmlFor={props.id} className={styles.label}>
      {props.children}
    </label>
    <input
      ref={props.register(props.inputRef)}
      id={props.id}
      type={props.type}
      className={styles.input}
    />
  </div>
);

export default FormGroup;
