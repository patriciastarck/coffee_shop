import { About } from "./_components/about";
import { Awarding } from "./_components/awarding";
import { Hero } from "./_components/hero";
import { Services } from "./_components/service";
import SignUpHookForm from "./_components/sign-up-hook-form";
import { Testimonials } from "./_components/testimonials";
import { Contact} from "./_components/contact";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Services />
      <Awarding />
      <SignUpHookForm />
      <Testimonials />
      <Contact />
      <Footer />
    </section>
  );
}
