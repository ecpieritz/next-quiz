import Link from "next/link";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="A simple quiz about kpop" />
        <title>Kpop Quiz</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className={`flex flex-col items-center`} style={{height: '100vh'}}
      >
      <Header />
        <div className="bg-white home">
          <h3>
            Afim de testar seu conhecimento em kpop?
          </h3>

          <Link href='/quiz'><button className="start-btn">Então comece o quiz!</button></Link>
        </div>

        <div className="absolute">
          <Footer />
        </div>
      </main>
    </>
  );
}
