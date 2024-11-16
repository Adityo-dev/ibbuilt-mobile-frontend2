// tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// data
const productSpecifications = [
  {
    category: "Display",
    details: [
      { key: "Size", value: "6.75 Inch" },
      { key: "Type", value: "IPS LCD" },
      { key: "Resolution", value: "HD+ (720x1600 pixels) 260PPI" },
      { key: "Refresh Rate", value: "90Hz" },
      { key: "Brightness", value: "450 nits (Typ.)" },
      {
        key: "Features",
        value: [
          "Display ratio: 20:9",
          "Screen-to-body ratio: 90%",
          "Contrast ratio: 1500:1 (Typ.)",
          "Color gamut: NTSC 69.3% (Typ.)",
        ],
      },
    ],
  },
  {
    category: "Processor",
    details: [
      { key: "Chipset", value: "MediaTek Helio G37 (12nm)" },
      { key: "CPU Type", value: "Octa-core" },
      {
        key: "CPU Speed",
        value: "4 x Cortex-A53 @ 2.3GHz + 4 x Cortex-A53 @ 1.8GHz",
      },
      { key: "GPU", value: "PowerVR GE8320" },
    ],
  },

  {
    category: "Memory",
    details: [
      { key: "RAM", value: "6GB" },
      { key: "Internal Storage", value: "256GB eMMC 5.1" },
      { key: "Card Slot", value: "MicroSD card: up to 1TB" },
    ],
  },
  {
    category: "Rear Camera",
    details: [
      {
        key: "Resolution",
        value: [
          '50 MP, f/1.8, 26mm (wide), 1/2.55", 0.7µm, PDAF',
          "2 MP, f/2.4, (macro)",
          "2 MP, f/2.4, (depth)",
        ],
      },
      {
        key: "Features",
        value: [
          "LED flash",
          "HDR",
          "Panorama",
          "AI scene detection",
          "Face detection",
        ],
      },
      { key: "Video Recording", value: "1080P @30FPS" },
    ],
  },
  {
    category: "Front Camera",
    details: [
      { key: "Resolution", value: '8 MP, f/2.0, 26mm (wide), 1/4", 1.12µm' },
      { key: "Features", value: "HDR" },
      { key: "Video Recording", value: "1080P @30FPS" },
    ],
  },
  {
    category: "Audio",
    details: [
      { key: "Speaker", value: "Dual Stereo Speaker" },
      { key: "Audio Features", value: "Landscape Stereo Sound" },
    ],
  },
  {
    category: "Network & Connectivity",
    details: [
      {
        key: "SIM",
        value:
          "Dual SIM (1 Nano SIM + 1 Nano SIM) + 1 TF card (3-card slot) or Single SIM + 1 TF card",
      },
      { key: "Network", value: "2G, 3G, 4G" },
      {
        key: "Wi-Fi",
        value: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct",
      },
      { key: "Bluetooth", value: "Bluetooth 5.1, A2DP, LE" },
      { key: "GPS", value: "GPS, GLONASS, GALILEO, BDS" },
      { key: "NFC", value: "Yes" },
      { key: "USB", value: "USB Type-C 2.0" },
      { key: "Audio Jack", value: "3.5mm" },
    ],
  },
  {
    category: "Operating System",
    details: [
      { key: "Operating System", value: "Android 13" },
      { key: "Custom UI", value: "TCL UI 5.0" },
    ],
  },
  {
    category: "Sensors",
    details: [
      { key: "Fingerprint", value: "Side-Mounted" },
      {
        key: "Sensors",
        value: ["Accelerometer (G sensor)", "Proximity sensor", "Light sensor"],
      },
    ],
  },
  {
    category: "Battery",
    details: [
      { key: "Type", value: "Lithium-polymer 5010 mAh (non-removable)" },
      { key: "Fast Charging", value: "18W Weird" },
    ],
  },
  {
    category: "Physical specification",
    details: [
      {
        key: "Dimension",
        value: "167.9 x 76.5 x 8.5 mm (6.61 x 3.01 x 0.33 in)",
      },
      { key: "Weight", value: "190 g (6.70 oz)" },
      {
        key: "Body Material",
        value: "Glass front, Plastic frame, Plastic back",
      },
      { key: "Colors", value: "Twilight Purple, Dark Gray" },
    ],
  },
  {
    category: "Warranty Information",
    details: [
      {
        key: "Warranty",
        value:
          "1 Year warranty (To claim please visit the nearest TCL service center)",
      },
    ],
  },
];

function ProductSpecifications({ specifications }) {
  return (
    <section className="w-full md:w-[70%] shadow-lg p-6 rounded-md mt-6">
      <Tabs defaultValue="specification" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="specification">Specification</TabsTrigger>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="qauestions">Questions</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="specification">
          <h3 className="text-2xl mb-3 font-semibold ">Specification</h3>
          <div className="flex flex-col text-start">
            {productSpecifications.map((spData, ind) => (
              <div className="flex flex-col gap-5" key={ind}>
                <h2 className="text-start text-xl mt-3 shadow-sm text-black p-2 rounded-md font-medium">
                  {spData.category}
                </h2>
                <div className="flex flex-col gap-3">
                  {spData.details.map((detail, ind) => (
                    <div
                      className="flex md:flow-row gap-6 text-start text-sm border-b pb-2"
                      key={ind}
                    >
                      <p className=" w-[300px] flex text-nowrap">
                        {detail?.key}
                      </p>
                      <p className="text-wrap">{detail?.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="description">
          <p>description</p>
        </TabsContent>
        <TabsContent value="qauestions">
          <p>qauestions</p>
        </TabsContent>
        <TabsContent value="reviews">
          <p>reviews</p>
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default ProductSpecifications;
