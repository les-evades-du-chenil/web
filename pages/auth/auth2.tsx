import styles from "./auth.module.scss";
import FromGroup from "../../src/package/auth/form-group";
import LoginOption from "../../src/package/auth/login-option";

const LoginPage2 = () => (
  <main className={styles.main}>
    <form className={styles.loginCard}>
      <div className="card-header">
        <img src="/images/logo.svg" alt="logo" className={styles.logo} />
        <h1 className={`${styles.title} mb-6`}>Sign in to your account</h1>
      </div>
      <div>
        <FromGroup id="email" type="email">
          Email address
        </FromGroup>
        <FromGroup id="password" type="password">
          Password
        </FromGroup>
        <LoginOption />
      </div>
      <div className="mb-5">
        <button className={styles.button}>Sign in</button>
      </div>
    </form>
  </main>
);

export default LoginPage2;
