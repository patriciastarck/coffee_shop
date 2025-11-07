import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import primier from "../../../public/primier.png";
import whiskas from "../../../public/whiskas.png";
import natural from "../../../public/natural.png";
import Verde from "../../../public/coffee-green.png";
import Gaia from "../../../public/gaia_cafe.png";
import {
  Award,
  Cake,
  CakeSlice,
  Check,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

// import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
];

export function Footer() {
  return (
    <section className="bg-[#170F0A] py-4 text-white">
      <div className="container mx-auto px-4">
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 mt-5">
          <div>
            <Image src={Gaia} alt="Logo do Gaia Café" className="w-40 h-40" />
          </div>

          <div className="items-center">
            <h4 className="flex text-[#F2DAC4] text-[12px] font-bold">
              <MapPin className="mr-2 text-green-800" />
              Endereço
            </h4>
            <p className="pl-8 text-[14px]">
              Rua X, Centro, Rio de Janeiro | RJ
            </p>
          </div>

          <div className="items-center pb-6">
            <h4 className="flex text-[#F2DAC4] text-[12px] font-bold">
              <Phone className="mr-2 text-green-800" />
              Contate-nos
            </h4>
            <p className="pl-8 text-[14px]">(24) 2222-3344</p>
          </div>

          <div className="pb-6 text-[12px]">
            <h3 className="text-[#F2DAC4] text-[12px] font-bold">
              Redes sociais
            </h3>
            <div className="flex gap- pt-1.5">
              <a href="#" target="_blank">
                <FacebookLogoIcon className="w-6 h-6" />
              </a>

              <a href="#" target="_blank">
                <InstagramLogoIcon className="w-6 h-6" />
              </a>

              <a href="#" target="_blank">
                <YoutubeLogoIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-[#231E21] p-1.5 text-center text-[10px] border-t-1 border-[#231E21] flex justify-center items-center">
        <p className="items-center text-[#F2DAC4]">
          &copy; Patricia Starck Bernardi - 2025
        </p>
      </div>
    </section>
  );
}
