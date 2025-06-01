"use client";
import Link from "next/link";

const LightingCategories = () => {
  const categories = [
    { name: "Spot Lights", route: "/spot-lights", image: "/images/home/light1.png" },
    { name: "Chandeliers", route: "/chandeliers", image: "/images/home/light1.png" },
    { name: "Wall Lights", route: "/wall-lights", image: "/images/home/light1.png" },
    { name: "Outdoor Lights", route: "/outdoor-lights", image: "/images/home/light1.png" },
    { name: "Floor Lamps", route: "/floor-lamps", image: "/images/home/light1.png" },
    { name: "Strips Lights", route: "/strips-lights", image: "/images/home/light1.png" },
    { name: "Ceiling Fans", route: "/ceiling-fans", image: "/images/home/light1.png" },
    { name: "Commercial Lights", route: "/commercial-lights", image: "/images/home/light1.png" },
    { name: "Pendants", route: "/pendants", image: "/images/home/light1.png" },
    { name: "Landscape Lights", route: "/landscape-lights", image: "/images/home/light1.png" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center mb-6">Top Lighting Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
        {categories.map((category) => (
          <Link href={category.route} key={category.name} className="block">
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white h-full flex flex-col items-center justify-center p-2">
              <img src={category.image} alt={category.name} className="w-full h-32 object-contain bg-gray-100 p-2" />
              <p className="text-center text-gray-600 mt-2">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LightingCategories;