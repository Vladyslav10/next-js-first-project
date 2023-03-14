import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from '../styles/error-page.module.css'

const Error:FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
        <Head>
            <title>Error</title>
        </Head>
        <div className={styles.error}>
            Ooops this path is wrong
        </div>
    </>
  )
};

export default Error;