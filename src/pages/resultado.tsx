import { useRouter } from 'next/router';

export default function Resultado() {
  const router = useRouter();
  const { corrects, total } = router.query;

  return (
    <section style={{height: '100vh'}}>
      <h2>Resultado</h2>
      <p>Acertou {corrects} de {total} perguntas</p>
    </section>
  );
}
