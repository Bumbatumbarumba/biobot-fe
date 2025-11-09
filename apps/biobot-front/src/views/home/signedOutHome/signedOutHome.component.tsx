import { Hero } from "../../../components/hero/hero.component";
import { Features } from "../../../components/features/features.component";
import { HowItWorks } from "../../../components/howItWorks/howItWorks.component";
import { Pricing } from "../../../components/pricing/pricing.component";
import { Footer } from "../../../components/footer/footer";

export const SignedOutHome = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  );
};
