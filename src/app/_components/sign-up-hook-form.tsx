import React from "react";
import Image from "next/image";
import Heart from "../../../public/coffee-heart.png";

export default function Contact() {
  return (
    <section
      id="contato"
      className="min-h-screen overflow-hidden flex justify-center items-start p-6 text-[#392418]  "
    >
      <article className="shadow-lg shadow-[#392418] rounded-lg flex flex-col md:flex-row max-w-4x1 w-full relative items-center">
        <aside
          data-aos="fade-right"
          data-aos-delay="300"
          className=" w-full h-screen  md:w-1/2 relative flex justify-center items-center"
        >
          <Image src={Heart} alt="coração de café" className="w-10/12" />
        </aside>

        <section
          data-aos="fade-left"
          data-aos-delay="300"
          className="sm:w-full lg:w-5/12 p-8 "
        >
          <header className=" mb-6">
            <h2 className="text-4xl text-[#392418] text-center mb-4">
              Fale conosco
            </h2>
          </header>

          <form
            action="https://formspree.io/f/mdklbpnb"
            method="POST"
            className="w-full space-y-4 m-10"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-[#392418] font-medium mb-2"
              >
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
              />
            </div>
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <div>
              <label
                htmlFor="email"
                className="block text-[#392418] font-medium mb-2 "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="name"
                placeholder="Seu email"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[#392418] font-medium mb-2"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Sua mensagem"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" border-2 py-2 px-6 focus:outline-none hover:bg-[#B27944] hover:text-white cursor-pointer
                  rounded-full text-lg"
            >
              Enviar
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}
