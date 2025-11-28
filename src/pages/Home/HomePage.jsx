import { DealOfMonthSection } from "./HomeSections/DealOfMonthSection";
import { HeroSection } from "./HomeSections/HeroSection";
import { InstagramSection } from "./HomeSections/InstagramSection";
import { NewArrivalsSection } from "./HomeSections/NewArrivalsSection";
import { NewsletterSection } from "./HomeSections/NewsletterSection";
import { PromoBannerSection } from "./HomeSections/PromoBannerSection";
import { TestimonialsSection } from "./HomeSections/TestimonialsSection";


export const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <DealOfMonthSection/>
            <NewArrivalsSection/>
            <PromoBannerSection/>
            <InstagramSection/>
            <TestimonialsSection/>
            <NewsletterSection/>
        </div>
    )
}