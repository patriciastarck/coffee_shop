"use client";

import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    content:
      "O ambiente é simplesmente incrível! O aroma do café recém-torrado e o atendimento impecável fazem do Coffee Shop meu lugar favorito para relaxar e trabalhar. Cada visita é uma nova experiência deliciosa.",
    author: "Mariana Souza",
    role: "Designer",
    // image: tutor2,
  },
  {
    content:
      "Descobri o Coffee Shop por acaso e me apaixonei! O cappuccino é perfeito e os doces são maravilhosos. Dá pra sentir o carinho em cada detalhe, desde o atendimento até a decoração",
    author: "Lucas Almeida",
    role: "Desenvolvedor Web",
    // image: tutor1,
  },
  {
    content:
      "O Coffee Shop é o refúgio ideal no meio da correria do dia. Sempre encontro um café de qualidade, ambiente tranquilo e um atendimento que me faz sentir em casa.",
    author: "Camila fernandes",
    role: "Professora",
    // image: tutor2,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  return (
    <section
      className="
        border-[#180f0c4b] p-4  
        py-16    
        bg-[url('/testimonials3.png')] 
        bg-cover 
        bg-center 
        bg-no-repeat 
       text-white
        h-full    
        relative 
        overflow-hidden     
        select-none
        "
    >
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl text-center mb-12">
          Depoimentos dos nossos clientes
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className=" text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className=" flex flex-col items-center text-center space-y-4">
                      <p className="text-gray-200">{item.content}</p>
                      <div>
                        <p className="font-bold">{item.author}</p>
                        <p className="text-sm #170f0a">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
