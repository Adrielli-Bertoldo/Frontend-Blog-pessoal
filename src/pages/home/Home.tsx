
import meusFilhos from "../../assets/fotoblog.png";

function Home() {
  return (
    <div className="bg-pink-100 flex justify-center min-h-screen">
      <div className="container grid grid-cols-2 text-gray-800">
        
        {/* Lado esquerdo: texto */}
        <div className="flex flex-col gap-6 items-center justify-center py-10 px-8">

          <h2 className="text-5xl font-bold text-pink-700 text-center">
            Seja Bem-Vinda!
          </h2>

          <p className="text-xl text-center">
            Um espaço para compartilhar histórias, desafios e amor 💗
          </p>

          <div className="rounded border-pink-700 border-2 text-pink-700 text-center p-6 max-w-md">
            <strong>Diário de uma Mãe em Dobro - Semana nº1</strong>
            <br /><br />
            Esta semana foi cheia de aprendizados e emoções enquanto cuido dos meus dois filhos, cada um com suas particularidades. Quero compartilhar com vocês um pouco do que vivi e senti.
          </div>

          <div className="rounded border-pink-700 border-2 text-pink-700 text-center p-6 max-w-md mt-6">
            Momentos especiais:
          </div>

          <button className="rounded text-pink-700 border-pink-700 border-2 py-2 px-6 hover:bg-pink-200 transition max-w-xs">
            Nova Postagem
          </button>
        </div>

{/* Lado direito: imagem */}
<div className="flex flex-col justify-center items-center">
  <img
    src={meusFilhos} alt="Meus filhos" className="w-2/3 rounded-lg shadow-md" />
 
</div>

      </div>
    </div>
  );
}

export default Home;
