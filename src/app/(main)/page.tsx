import Arrival from "@/components/main/landing_page/Arrival";
import BannerCard from "@/components/main/landing_page/BannerCard";
import BestDeal from "@/components/main/landing_page/BestDeal";
import FeaturedProduct from "@/components/main/landing_page/FeaturedProduct";
import HeroSection from "@/components/main/landing_page/HeroSection";
import Newsletter from "@/components/main/landing_page/Newsletter";
import SaleOffer from "@/components/main/landing_page/SaleOffer";
import TopCategories from "@/components/main/landing_page/TopCategories";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Arrival />
      <TopCategories />
      <SaleOffer />
      <FeaturedProduct />
      <BannerCard />
      <BestDeal />
      <Newsletter />
    </main>
  );
}
