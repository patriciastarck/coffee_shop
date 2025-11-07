import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <section
        className="      
          
    bg-[url('/22.png')]     
    bg-cover 
    bg-center 
    bg-no-repeat     
    h-screen   
    relative 
    overflow-hidden  
    font-[var(--font-playfair)]        
    "
      >
        <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative ">
          <article className="grid grid-cols-1 lg:grid-cols-2">
            <div className="space-y-6">
              <h1
                className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-14"
                data-aos="fade-down"
              >
                Onde a Paixão pelo Café Encontra a Perfeição.
              </h1>
              <p
                className="font-semibold rounded-1xl border-0 text-white lg:text-lg"
                data-aos="dade-right"
              >
                Da seleção dos grãos à xícara, cada detalhe é pensado para
                oferecer a você uma inesquecível experiência de sabor.
              </p>
              <a
                data-aos="fade-up"
                data-oas-delay="500"
                href="#"
                className="bg-#B27944][ text-white px-5 py-2 rounded-md font-bold flex items-center justify-center w-fit gap-2"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <div className="mt-8">
                {/* <p className="text-sm mb-4">
                  <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>
                  de desconto na primeira compra.
                </p> */}

                <div className="flex mt-4">
                  <div className="w-32 hidden lg:block"></div>
                </div>
              </div>
            </div>
            <div className="hidden md:block h-full relative "></div>
          </article>
        </div>
      </section>
    </div>
  );
}
