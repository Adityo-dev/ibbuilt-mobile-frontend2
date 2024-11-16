import { AllProductData } from "../../../utils/product";
import ColumnCart from "@/components/productCart/columnCart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Shop() {
  const filteringData = [
    {
      filteringCategoryName: "Brand",
      filteringCategory: [
        "iPhone",
        "Vivo",
        "Oppo",
        "One Plus",
        "Realme",
        "Google Pixel",
      ],
    },
    {
      filteringCategoryName: "Ram",
      filteringCategory: ["64Gm", "120GB", "520GB", "1TB"],
    },
    {
      filteringCategoryName: "Color",
      filteringCategory: ["Red", "Black", "Blue", "White"],
    },
    {
      filteringCategoryName: "Storage Capacity",
      filteringCategory: ["64Gm", "120GB", "520GB", "1TB"],
    },
  ];
  return (
    <main className="max-w-[1700px] mx-auto px-6 mt-5 grid grid-cols-12 gap-5">
      <section className="w-full col-span-2 relative">
        <p className="text-lg font-medium p-4 border border-custom-border rounded-lg">
          Price Range
        </p>
        {filteringData.map((data, ind) => (
          <Accordion
            key={ind}
            type="multiple"
            collapsible
            defaultValue={[ind + 1]}
            className="w-full mt-4 flex flex-col"
          >
            <AccordionItem
              className="border border-custom-border px-4 rounded-lg"
              value={ind + 1}
            >
              <AccordionTrigger className="no-underline text-lg font-medium">
                {data.filteringCategoryName}
              </AccordionTrigger>
              {data.filteringCategory.map((data, ind) => (
                <AccordionContent
                  className="w-[100px] flex items-center space-x-2"
                  key={ind}
                >
                  <Checkbox id={data} className="shadow-none" />
                  <label
                    htmlFor={data}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-nowrap"
                  >
                    {data}
                  </label>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        ))}
      </section>
      <section className="w-full col-span-10 ">
        <div className=" p-4 mb-5 flex justify-between items-center border border-custom-border rounded-lg">
          <p className="text-lg font-medium">iPhone</p>
          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
              <p className="font-medium">Show:</p>
              <Select>
                <SelectTrigger className="w-[80px] h-7 border border-custom-border shadow-none flex gap-2 focus:ring-0">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="40">40</SelectItem>
                    <SelectItem value="60">60</SelectItem>
                    <SelectItem value="80">80</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 items-center text-nowrap">
              <p className="font-medium">Sort By:</p>
              <Select>
                <SelectTrigger className="w-[150px] h-7 border border-custom-border shadow-none flex gap-2 focus:ring-0 ">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="lowHigh">
                      {"Price(Low > High)"}
                    </SelectItem>
                    <SelectItem value="highLow">
                      {"Price(High > Low)"}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-5">
          {AllProductData.map((data, ind) => (
            <div key={ind}>
              <ColumnCart cartData={data} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Shop;
