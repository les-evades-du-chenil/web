import React, { Fragment } from "react";
import Header from "./header/index";
import styles from "./layout.module.scss";
export interface ILayoutUser {
  children: any;
}

const LayoutUser = (props: ILayoutUser) => (
  <Fragment>
    <div className={styles.layout}>
      <Header />
      {props.children}
    </div>
  </Fragment>
);

export default LayoutUser;
