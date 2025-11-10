import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Gaia from "../../../public/gaia_cafe.png";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="
      bg-black
      bg-[url('/coffee_cup.png')]  
      bg-cover 
      bg-center 
      bg-no-repeat         
      h-screen
      text-white relative     
      flex items-center    
    "
    >
      <div className="mx-auto pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Texto + Botão */}
          <div className="space-y-6 pl-10 flex flex-col items-start">
            <h1
              className="text-4xl md:text-4xl lg:text-5xl font-semibold leading-15 filter drop-shadow-md drop-shadow-black"
              data-aos="fade-down"
            >
              Um Blend especial entre Tradição e Inovação
            </h1>

            <p
              className="lg:text-2xl text-2xl filter drop-shadow-md drop-shadow-black"
              data-aos="fade-right"
            >
              Da seleção dos grãos à xícara, cada detalhe é pensado para
              oferecer a você uma inesquecível experiência de sabor.
            </p>

            {/* Botão + Imagem lado a lado no mobile e médio */}
            <div className="flex items-center gap-3 lg:gap-0 lg:block">
              <a
                data-aos="fade-up"
                href="#"
                className="bg-[#B27944] text-white px-5 py-2 rounded-md font-bold flex items-center justify-center w-fit gap-2"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                WhatsApp
              </a>

              {/* Mostra a imagem à direita do botão até o breakpoint lg */}
              <div className="flex justify-center items-center lg:hidden">
                <Image
                  src={Gaia}
                  alt="logo gaia café"
                  className="w-40 md:w-45 h-auto ml-12"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center h-full relative">
            <Image
              src={Gaia}
              alt="logo gaia café"
              className="object-contain"
              width={300}
              height={300}
              quality={100}
              priority
              data-aos="fade-up"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
