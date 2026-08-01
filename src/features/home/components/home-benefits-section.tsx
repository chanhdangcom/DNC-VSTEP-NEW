import { HomeBenefitsCards } from "./home-benefits-cards";
import { HomeBenefitsHero } from "./home-benefits-hero";

export function HomeBenefitsSection() {
  return (
    <section id="noi-dung" className="bg-primary scroll-mt-28">
      <HomeBenefitsHero />

      <div className="py-12 sm:py-14 lg:py-16">
        <HomeBenefitsCards />
      </div>
    </section>
  );
}
