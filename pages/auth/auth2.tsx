import styles from "./auth.module.scss";
import FromGroup from "../../src/package/auth/form-group";

const LoginPage2 = () => (
  <main className={styles.main}>
    <div className={styles.loginCard}>
      <img src="/images/logo.svg" alt="logo" className={styles.logo}/>
      <h1 className={styles.title}>Sign in to your account</h1>
      
      <FromGroup id="email" type="email">Email address</FromGroup>
      <FromGroup id="password" type="password">Password</FromGroup>
      
      <div className="flex justify-between">
        <p><input type="checkbox" name="" id=""/> Remember me</p>
        <p><a href="#">Forgot your password</a></p>
      </div>
      <button className={styles.button}>Sign in</button>
    </div>
  </main>
);

export default LoginPage2;