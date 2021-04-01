import styles from "../../package/auth/auth.module.scss";
import FormGroup from "../../package/auth/form-group";
import LoginOption from "../../package/auth/login-option";
import { useLoginMutation } from "../../generated/graphql";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const alertClass = "rounded-md bg-waring p-3 mb-2";
  const [login] = useLoginMutation();
  const [serverError, setServerError] = useState<Error | null>(null);
  const onSubmit = async (values: FormValues, {}) => {
    try {
      const { data } = await login({
        variables: values,
      });
      router.push("/about");
    } catch (error) {
      setServerError(error);
      console.error(error);
    }
  };
  const loginSchema = Yup.object().shape({
    password: Yup.string().min(2, "Too Short!").required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <main className={styles.main}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.loginCard}>
            <div className="card-header">
              <img src="/images/logo.svg" alt="logo" className={styles.logo} />
              <h1 className={`${styles.title} mb-6`}>
                Sign in to your account
              </h1>
            </div>
            <div>
              {serverError !== null && (
                <div className={alertClass}>{serverError?.message}</div>
              )}
              <FormGroup
                id="email"
                type="email"
                name="email"
                error={Boolean(errors.email && touched.email)}
                errortext={errors.email}
              >
                Email address
              </FormGroup>
              <FormGroup
                id="password"
                type="password"
                name="password"
                error={Boolean(errors.password && touched.password)}
                errortext={errors.password}
              >
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
        )}
      </Formik>
    </main>
  );
};

export default Login;
