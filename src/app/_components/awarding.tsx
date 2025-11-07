import Image from "next/image";
import Premium from "../../../public/vecteezy_premium-quality-golden-emblem-clipart-design-illustration_9385241.png";
import abic from "../../../public/1.png";
import abic1 from "../../../public/selo1.png";
import abic2 from "../../../public/selo2.png";
import abic4 from "../../../public/selo4.png";
import abic3 from "../../../public/selo3.png";
import verde from "../../../public/verde.png";
//estou construindo um objeto para colocar os premios.

export function Awarding() {
  return (
    <section
      className="bg-[url('/1.png')] py-16 text-white
    bg-cover 
    bg-center 
    bg-no-repeat     
    h-full       
    relative 
    overflow-hidden  
    "
    >
      <div className="container mx-auto px-4">
        <div className="border-b border-yellow-950/20 pb-8">
          <h4 className="text-4xl pb-6">Por que escolher nosso café?</h4>
        </div>
        <footer className="text-center text-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 mt-5">
          <div className="">
            <Image
              src={abic2}
              alt=""
              className="font-bold w-20 mx-auto pb-4 object-cover hover:scale-180 duration-300 cursor-pointer"
            />
            <p className="font-bold">Café Tradicional</p>
            <p>Consumo diário e custo menor </p>
            <p>Nota QG &gt; = 4,5 e &lt; 5,9</p>
          </div>

          <div>
            <Image
              src={abic3}
              alt=""
              className="w-20 mx-auto pb-4 object-cover hover:scale-180 duration-300 cursor-pointer"
            />
            <p className="font-bold">Café Superior</p>
            <p>Boa qualidade e sabor mais acentuado </p>
            <p>Nota QG &gt;= 6,0 e &lt; 7,2</p>
          </div>

          <div className="">
            <Image
              src={abic4}
              alt=""
              className="w-20 mx-auto pb-4 object-cover hover:scale-180 duration-300 cursor-pointer"
            />
            <p className="font-bold ">Café Gourmet</p>
            <p>Alta qualidade e valor agregado</p>
            <p>Nota QG &gt; = 7,3 e até 10</p>
          </div>
          <div className="w-screen flex h-25 m-0 justify-end items-end">
            <div className="pr-18">
              <a
                href="https://www.abic.com.br/certificacoes/"
                target="_blank"
                className="text-white text-[10px]"
              >
                ** Nota QG = Nota de Qualidade Global **
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
