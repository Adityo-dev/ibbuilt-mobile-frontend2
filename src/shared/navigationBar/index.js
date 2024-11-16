import NavigationBar from "./navBar";

async function NavigationBarData() {
  const response = await fetch(
    "https://ecomdash-ten.vercel.app/api/product/brand"
  );
  const data = await response.json();

  return (
    <main>
      <NavigationBar brandCategories={data.brands} />
    </main>
  );
}

export default NavigationBarData;
