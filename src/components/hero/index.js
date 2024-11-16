import HeroSlider from "../slider/heroSlider";

async function Hero() {
  const response = await fetch("https://ecomdash-ten.vercel.app/api/slider");
  const data = await response.json();
  return (
    <main>
      <HeroSlider sliderData={data.slider} />
    </main>
  );
}

export default Hero;
