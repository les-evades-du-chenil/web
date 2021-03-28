import styles from "./auth.module.scss";
import FromGroup from "../../src/package/auth/form-group";
import Link from "next/link";

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

        <div className="md:flex md:justify-between mb-4">
          <p>
            <input type="checkbox" name="" id="" /> Remember me
          </p>
          <p className={styles.link}>
            <Link href="/auth/forgot-password">Forgot your password</Link>
          </p>
        </div>
      </div>
      <div className="mb-5">
        <button className={styles.button}>Sign in</button>
      </div>
    </form>
  </main>
);

export default LoginPage2;
