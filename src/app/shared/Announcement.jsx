'use client';

import { useEffect, useState } from 'react';

const announcements = [
  'FREE DELIVERY ON PURCHASE PKR 5000',
  'NEXT DAY DELIVERY',
  'SECURE PAYMENTS',
  'APPLY PROMO CODE "20BC" FOR 20% ADDITIONAL DISCOUNT',
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[10px] bg-gray-100 flex items-center justify-center">
      <div className="text-black text-sm font-medium transition-opacity duration-500 ease-in-out">
        {announcements[index]}
      </div>
    </div>
  );
}



