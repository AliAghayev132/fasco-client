import { HeroSection } from "./HomeSections/HeroSection";
import { InstagramSection } from "./HomeSections/InstagramSection";
import { NewsletterSection } from "./HomeSections/NewsletterSection";
import { NewArrivalsSection } from "./HomeSections/NewArrivalsSection";
import { PromoBannerSection } from "./HomeSections/PromoBannerSection";
import { DealOfMonthSection } from "./HomeSections/DealOfMonthSection";
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