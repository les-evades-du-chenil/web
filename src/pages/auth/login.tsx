import styles from "./auth.module.scss";
import FormGroup from "../../package/auth/form-group";
import LoginOption from "../../package/auth/login-option";
import { useLoginMutation } from "../../generated/graphql";
import React from "react";
import { Formik, FormikErrors, Form } from "formik";
interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [login] = useLoginMutation();
  const onSubmit = async (values: FormValues, {}) => {
    console.log(values);
    await login({
      variables: values,
    });
  };

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (values.password.length < 3) {
      errors.password = "incorrect length";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  return (
    <main className={styles.main}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form className={styles.loginCard}>
          <div className="card-header">
            <img src="/images/logo.svg" alt="logo" className={styles.logo} />
            <h1 className={`${styles.title} mb-6`}>Sign in to your account</h1>
          </div>
          <div>
            <FormGroup id="email" type="email" name="email">
              Email address
            </FormGroup>
            <FormGroup id="password" type="password" name="password">
              Password
            </FormGroup>
            <LoginOption />
          </div>
          <div className="mb-5">
            <button type="submit" className={styles.button}>
              Sign in
            </button>
          </div>
        </Form>
      </Formik>
    </main>
  );
};

export default Login;
