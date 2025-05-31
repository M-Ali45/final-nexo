'use client';

import { Carousel } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles

const announcements = [
  'FREE DELIVERY ON PURCHASE PKR 5000',
  'NEXT DAY DELIVERY',
  'SECURE PAYMENTS',
  'APPLY PROMO CODE "20BC" FOR 20% ADDITIONAL DISCOUNT',
];

export default function AnnouncementBar() {
  return (
    <div className="w-full h-[50px] bg-gray-300 flex items-center justify-center">
      <Carousel
        dots={false}
        arrows={false}
        draggable={true}
        autoplay // Enables auto-sliding
        autoplaySpeed={2000} // Slide every 3 seconds
        className="w-full max-w-3xl"
      >
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="flex items-center justify-center "
          >
            <div className="text-xl font-bold text-red-500 text-center">
              {announcement}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}