'use client';

import { Carousel } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles

// Custom CSS to override Slick Slider styles
const customStyles = `
  .slick-slide {
    width: 100% !important; /* Make slides take full width of the container */
    display: flex !important;
    justify-content: center !important;
  }
  .slick-track {
    display: flex !important;
    align-items: center !important;
  }
  .slick-slider {
    width: 100% !important;
  }
`;

const announcements = [
  'FREE DELIVERY ON PURCHASE PKR 5000',
  'NEXT DAY DELIVERY',
  'SECURE PAYMENTS',
  'APPLY PROMO CODE "20BC" FOR 20% ADDITIONAL DISCOUNT',
];

export default function AnnouncementBar() {
  return (
    <>
      {/* Inject custom styles */}
      <style jsx>{customStyles}</style>
      <div className="w-full h-[50px] bg-gray-150 flex items-center justify-center overflow-hidden">
        <Carousel
          dots={false}
          arrows={false}
          draggable={true}
          autoplay
          autoplaySpeed={5000}
          className="w-full max-w-3xl"
        >
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full"
            >
              <div
                className="text-xs sm:text-lg font-normal text-center px-4 flex items-center justify-center gap-2"
                style={{ color: '#0097B2' }}
              >
                <span></span> {announcement}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
