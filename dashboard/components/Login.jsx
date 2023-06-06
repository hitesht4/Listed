"use client";
import React from "react";
import styles from "./styles/login.module.css";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleClick = async () => {
    await signIn("google");
  };
  // if (session) {
  //   router.push("/dashboard");
  // }
  return (
    <div className={styles.container}>
      <div className={styles.Banner}>Board.</div>
      <div className={styles.content}>
        <div className={styles.Login}>
          <div className={styles.heading}>
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </div>

          <div className={styles.flex}>
            <button onClick={handleClick}>
              <FcGoogle />
              Sign in with Google
            </button>
            <button onClick={() => signOut()}>
              <SiApple />
              Signin with Google
            </button>
          </div>
          <form action="" className={styles.form}>
            <div>
              <label htmlFor="">Email Address</label>
              <input type="text" placeholder="Email Address" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="text" placeholder="Password" />
            </div>

            <p>Forgot Password ?</p>
            <button type="submit">Sign In</button>
          </form>
          <p className={styles.link}>
            Don’t have an account? <span>Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
