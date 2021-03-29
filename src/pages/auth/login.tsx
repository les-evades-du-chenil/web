import { useForm } from "react-hook-form";
import styles from "./auth.module.scss";
import FormGroup from "../../package/auth/form-group";
import LoginOption from "../../package/auth/login-option";
import { useLoginMutation } from "../../generated/graphql";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [login] = useLoginMutation();
  const onSubmit = async (data: any) => {
    console.log(data);
    const response = await login({
      variables: { email: data.email, password: data.password },
    });
    console.log(response);
    if (response.data?.login.errors) {
      console.error(response.data.login.errors);
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.loginCard} onSubmit={handleSubmit(onSubmit)}>
        <div className="card-header">
          <img src="/images/logo.svg" alt="logo" className={styles.logo} />
          <h1 className={`${styles.title} mb-6`}>Sign in to your account</h1>
        </div>
        <div>
          <FormGroup
            id="email"
            type="email"
            inputRef={{ name: "email", required: true }}
            register={register}
          >
            Email address
          </FormGroup>
          <FormGroup
            id="password"
            type="password"
            inputRef={{ name: "password", required: true }}
            register={register}
          >
            Password
          </FormGroup>
          <LoginOption />
        </div>
        <div className="mb-5">
          <button className={styles.button}>Sign in</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
