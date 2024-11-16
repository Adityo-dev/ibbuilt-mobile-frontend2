import styles from "./page.module.css";
// import components
import ProductCategory from "@/components/productCategory";
import Hero from "@/components/hero";
import NewArrival from "@/components/ProductShowcase/NewArrival";
import ProductBanner1 from "@/components/bannerGroup/banner1";
import ProductBanner2 from "@/components/bannerGroup/banner2";
import ProductBanner3 from "@/components/bannerGroup/banner3";
import TrendingProducts from "@/components/trendingProducts";
import Newsletter from "@/components/newsletter";
import ServiceType from "@/components/serviceType";
import LimitedTimeDeal from "@/components/limitedTimeDeal";
import BestSellers from "@/components/ProductShowcase/BestSellers";

export default function Home() {
  return (
    <main className={styles.homePageMainContainer}>
      <div>
        <Hero />
        <ProductCategory />
      </div>
      <LimitedTimeDeal />
      <BestSellers />
      <section className={styles.serviceAndBannerContainer}>
        <div className={styles.serviceComponents}>
          <ServiceType />
        </div>
        <div className={styles.bannerComponents}>
          <ProductBanner3 />
        </div>
      </section>
      <NewArrival />
      <section>
        <div className={styles.mobileNone}>
          <ProductBanner1 />
        </div>
        <ProductBanner2 />
      </section>
      <TrendingProducts />
      <div className={styles.serviceTypeMobile}>
        <ServiceType />
      </div>
      <Newsletter />
    </main>
  );
}
