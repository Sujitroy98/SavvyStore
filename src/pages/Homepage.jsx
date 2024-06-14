import Category from "../components/category/Category";
import HeroSection from "../components/heroSection/HeroSection";
import HomePageProductCard from "../components/homePageProductCard/HomePageProductCard";
import Testimonial from "../components/testimonial/Testimonial";
import Track from "../components/track/Track";

function Homepage() {
  return (
    <div>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
    </div>
  );
}

export default Homepage;
