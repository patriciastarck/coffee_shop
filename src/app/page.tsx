import { About } from "./_components/about";
import { Awarding } from "./_components/awarding";

import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/service";
import SignUpHookForm from "./_components/sign-up-hook-form";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Services />
      <Awarding />
      <SignUpHookForm />
      <Testimonials />
      <Footer />
    </section>
  );
}
