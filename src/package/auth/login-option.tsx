import Link from "next/link";
import React from "react";

const LoginOption = () => (
  <div className="md:flex md:justify-between mb-4">
    <label className="flex items-center">
      <input type="checkbox" id="remember-me" className="mr-2" /> Remember me
    </label>
    <p className="text-primaryLight hover:text-primary">
      <Link href="/auth/forgot-password">Forgot your password</Link>
    </p>
  </div>
);

export default LoginOption;
