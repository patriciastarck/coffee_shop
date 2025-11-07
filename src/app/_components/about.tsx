import Image from "next/image";
import about1Img from "../../../public/coffee_local2.jpg";
import about2Img from "../../../public/coffee_name2.png";

import { Award, Cake, CakeSlice, Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#170F0A] py-16">
      <div className="container px-4  mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          <div
            className="w-full relative"
            data-aos="fade-up-right"
            data-oas-delay="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-600"
                priority
              />
            </div>

            <div className="bg-white absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-[#392418]">
              <Image
                src={about2Img}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="text-[#F2DAC4] space-y-6 mt-10 ml-3"
            data-aos="fade-up-"
            data-oas-delay="300"
          >
            <h2 className=" text-[#F2DAC4] text-4xl">SOBRE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
              culpa blanditiis aspernatur ullam nobis impedit, sequi
              consequuntur sed at, cupiditate eius quidem optio praesentium
              maiores voluptas sapiente dignissimos? Corporis, mollitia!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <CakeSlice className="text-green-800" />
                Confeitaria própria
              </li>
              <li className="flex items-center gap-2">
                <Cake className="text-green-800" />
                Desde 1985
              </li>
              <li className="flex items-center gap-2">
                <Award className="text-green-800" />
                Prêmio de melhor cafeteria
              </li>
            </ul>
            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#B27944] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-[#B27944]]" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
