
import Gaia from "../../../public/gaia_cafe.png";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export function Contact() {
  return (
    <section className="bg-[#170F0A] py-8 text-white">
      <div className="container text-center mx-auto">
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full">
          <div className="flex justify-center m-2">
            <Image src={Gaia} alt="Logo do Gaia Café" className="w-40 h-40" />
          </div>

          <div className="flex flex-col justify-center m-2">
            <h4 className="flex text-[#F2DAC4] text-[12px] font-bold justify-center ">
              <MapPin className="mr-2 text-green-800" />
              Endereço
            </h4>
            <p className="pl-8 text-[14px]">
              Rua X, Centro, Rio de Janeiro | RJ
            </p>
          </div>

          <div className="flex flex-col justify-center m-2">
            <h4 className="flex text-[#F2DAC4] text-[12px] font-bold justify-center">
              <Phone className="mr-2 text-green-800" />
              Contate-nos
            </h4>
            <p className="pl-8 text-[14px]">(24) 2222-3344</p>
          </div>

          <div className="text-[12px] flex flex-col justify-center m-2">
            <h3 className="text-[#F2DAC4] text-[12px] font-bold">
              Acesse Nossas Redes Sociais
            </h3>

            <div className="flex gap-2 pt-1.5 justify-center ">
              <a href="#" target="_blank">
                <FacebookLogoIcon className="w-6 h-6 hover:text-green-800" />
              </a>

              <a href="#" target="_blank">
                <InstagramLogoIcon className="w-6 h-6 hover:text-green-800" />
              </a>

              <a href="#" target="_blank">
                <YoutubeLogoIcon className="w-6 h-6 hover:text-green-800" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
