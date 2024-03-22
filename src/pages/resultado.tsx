import { useRouter } from 'next/router';
import styles from '../../styles/Results.module.css';
import Head from "next/head";
import Link from 'next/link';
import Footer from '../../components/Footer';

interface RouterQuery {
  corrects: string | string[] | undefined;
  total: string | string[] | undefined;
}

export default function Resultado() {
  const router = useRouter();
  const { corrects, total }: RouterQuery = router.query;

  const correctsNumber: number = parseInt(corrects as string);

  function getCorrectsDiv(correctsNumber: number): JSX.Element {
    if (correctsNumber <= 10) {
      return (
        <div className="low">
          <p>Há muito o que aprender!</p>
          <p>Seu conhecimento é <strong>baixo</strong>!</p>
        </div>
      );
    } else if (correctsNumber <= 20) {
      return (
        <div className="medium">
          <p>Você já conhece alguma coisa sobre kpop.</p>
          <p>Seu conhecimento é <strong>médio</strong>!</p>
        </div>
      );
    } else if (correctsNumber <= 30) {
      return (
        <div className="high">
          <p>Muito bom! Com certeza conhece bastante sobre kpop.</p>
          <p>Seu conhecimento é <strong>alto</strong>!</p>
        </div>
      );
    } else if (correctsNumber <= 40) {
      return (
        <div className="expert">
          <p>WOW! Você já deve curtir kpop há muito tempo!</p>
          <p>Seu conhecimento é <strong>expert</strong>!</p>
        </div>
      );
    } else {
      return <></>;
    }
  }

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
      <section className={styles.results} style={{ height: '100vh' }}>
        <h1>Resultado</h1>

        <div className={styles.textDiv}>
          <h4>Acertou <span>{corrects}</span> de <span>{total}</span> perguntas.</h4>
          
          {getCorrectsDiv(correctsNumber)}

          <Link href='/'><button className={styles.newQuiz}>Iniciar novo quiz</button></Link>
        </div>
      </section>
      <div className="absolute">
          <Footer />
        </div>
    </>
  );
}
