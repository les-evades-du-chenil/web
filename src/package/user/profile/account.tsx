import { Formik, Form } from "formik";
import React from "react";
import FormGroup from "../../auth/form-group";
import styles from "../../../package/user/user.module.scss";

const Account = () => (
  <Formik
    onSubmit={(data) => {
      console.log(data);
    }}
    initialValues={{
      email: "",
      firstName: "",
      lastName: "",
      pansuns: 0,
      inGamePseudo: "",
      idDiscord: "",
    }}
  >
    <Form>
      <FormGroup id="email" name="email" type="email">
        Email
      </FormGroup>
      <FormGroup id="firstName" name="firstName" type="text">
        firstName
      </FormGroup>
      <FormGroup id="lastName" name="lastName" type="text">
        lastName
      </FormGroup>
      <FormGroup id="inGamePseudo" name="inGamePseudo" type="text">
        In Game Pseudo
      </FormGroup>
      <FormGroup id="idDiscord" name="idDiscord" type="text">
        Id Discord
      </FormGroup>
      <FormGroup id="pansuns" name="pansuns" type="number">
        Pansuns
      </FormGroup>
      <p className="text-right">
        <button type="submit" className={styles.button}>
          Save
        </button>
      </p>
    </Form>
  </Formik>
);

export default Account;
