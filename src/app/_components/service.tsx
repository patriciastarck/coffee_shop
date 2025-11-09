"use client";
import Image from "next/image";
import bag1 from "../../../public/coffee_bag1.png";
import bag3 from "../../../public/coffee_bag3.png";
import bag4 from "../../../public/coffee_bag4.png";
import bag5 from "../../../public/coffee_bag5.png";
import bag6 from "../../../public/coffee_bag6.png";

import useEmblaCarousel from "embla-carousel-react";

import { ChevronLeft, ChevronRight, Coffee } from "lucide-react";

const services = [
  {
    title: "Blend entre duas epécies",
    description: "Mescla entre Arabica e Canephora (Robusta ou Conilon).",
    icon: <Coffee />,
    image: <Image src={bag3} alt="saca de cafe" />,
  },
  {
    title: "Blend de variedades",
    description: "Mescla entre Catuaí Vermelho + Mundo Novo.",
    icon: <Coffee />,
    image: <Image src={bag1} alt="saca de cafe" />,
  },
  {
    title: "Blend entre sub variedades",
    description: "Mescla entre Bourbon Vermelho e Bourbon Amarelo.",
    icon: <Coffee />,
    image: <Image src={bag4} alt="saca de cafe" />,
  },
  {
    title: "Blend entre outros terroir",
    description: "Mescla entre Café das Matas de Minas e Mogiana Paulista.",
    icon: <Coffee />,    
    image: <Image src={bag5} alt="saca de cafe" />,
  },
  {
    title: "Blend de processos pós colheita",
    description: "Mescla entre Processos Natural, Cereja Descascado e Lavado.",
    icon: <Coffee />,
    image: <Image src={bag6} alt="saca de cafe" />,
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg- py-16 select-none">
      <div className="container mx-auto px-4 text-[#392418]">
        <h2 className="text-4xl mb-12">Temos os melhores blends de café</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className=" rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-2xl text-[#392418]">
                          {item.icon}
                        </span>
                        <div>
                          <h3 className="text-[#392418] font-bold text-md my-1">
                            {item.title}
                          </h3>
                          <p className="text-sm select-none w-45 h-auto rounded-lg object-cover ">
                            {item.image}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#392418]] pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <p className="text-center font-[#170F0A]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
      {/* <div className="flex items-center justify-start">
        <Image src={green} alt="whiskas" className="w-50 h-50 opacity-70 " />,
      </div> */}      
    </section>
  );
}
