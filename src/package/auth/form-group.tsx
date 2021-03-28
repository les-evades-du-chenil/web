import styles from "./form-group.module.scss";

export interface IFormGroupProps {
  children: any;
  id: string;
  type: string;
}

const FromGroup = (props: IFormGroupProps) => (
  <div className={styles.formGroup}>
    <label htmlFor={props.id} className={styles.label}>
      {props.children}
    </label>
    <input id={props.id} type={props.type} className={styles.input} />
  </div>
);

export default FromGroup;
