import { useRouter } from 'next/router';
import styles from '../../styles/Results.module.css'
import Head from "next/head";
import Link from 'next/link';

export default function Resultado() {
  const router = useRouter();
  const { corrects, total } = router.query;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="A simple quiz about kpop" />
        <title>Kpop Quiz | Resultado</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className={styles.results} style={{height: '100vh'}}>
        <h1>Resultado</h1>

        <div className={styles.textDiv}>

          <p>Acertou <span>{corrects}</span> de <span>{total}</span> perguntas.</p>

          <Link href='/'><button className={styles.newQuiz}>Iniciar novo quiz</button></Link>
        </div>
      </section>
    </>
  );
}
