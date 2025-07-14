"use client"
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Row, Col, Modal } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const Details = () => {
  const { category, 'sub-category': subCategory, id } = useParams();
  
  const [mainImage, setMainImage] = useState('/images/home/led1.jpg');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    '/images/home/led1.jpg',
    '/images/home/led2.jpg',
    '/images/home/led3.jpg',
    '/images/home/led4.jpg',
  ];

  const productDetails = {
    name: '2Pcs Outdoor Table Umbrella Hole Ring Plug, Silicone Pool Umbrella Sleeve Stabilizer Cone Wedge, Umbrella Table Ring Hole Insert for 2-2.5 Inch Table Hole or 1.5 Inch Pool Umbrella Adapter (Black)',
    brand: 'CANIPHA',
    rating: 4.3,
    reviews: 178,
    color: 'Black',
    specificUses: 'Outdoor activities',
    recommendedUses: 'Table',
    specialFeatures: 'Windproof, UV Resistant, Water Resistant',
    shape: 'Octagonal',
    shaftMaterial: 'Plastic',
    handleMaterial: 'Rubber',
    frameMaterial: 'Carbon Fibre',
    description: `
- [High Quality Material] The outdoor table umbrella hole ring plug is made of high-quality and reliable silicone material, which is soft and elastic, not easy to break, and suitable for long-term use. The umbrella hole ring is not easy to wear and is reusable. The umbrella table ring can help you stabilize your table umbrella and keep it from shaking, which can bring you a good user experience.
- [Keep Umbrella Steady] The pool umbrella sleeve can firmly fix your table umbrella, keep the table umbrella from shaking, effectively reduce the possibility of the table umbrella falling and scraping the table, and is conducive to the long-term use of the table umbrella. Even in windy and rainy weather conditions, the table umbrella can stand upright and stable, and the silicone pool umbrella adapter can eliminate annoying rattling.
- [Easy to Install] The umbrella cone wedge is easy to use, first put the umbrella cone into the hole of the table, then insert the umbrella pole into the cone, and finally adjust the position of the cone to make the umbrella stand firm.
    `,
    originalPrice: 139.99,
    discountedPrice: 98.99,
    deliveryInfo: '€8.43 delivery Sunday, 20 July',
    deliveryCost: 8.43,
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  // Calculate subtotal and total
  const subtotal = (quantity * productDetails.discountedPrice).toFixed(2);
  const total = (parseFloat(subtotal) + productDetails.deliveryCost).toFixed(2);

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <Row gutter={[24, 24]} className="flex flex-col md:flex-row">
        {/* Left Column - Images */}
        <Col span={8}>
          <div className="mb-4">
            <Image
              src={mainImage}
              alt="Main Product Image"
              width={200}
              height={100}
              style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
              onClick={showModal}
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {productImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                width={100}
                height={100}
                alt={`Product Image ${index + 1}`}
                style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </Col>
        {/* Middle Column - Product Details */}
        <Col xs={24} md={12} className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2">{productDetails.name}</h1>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">{'★'.repeat(Math.floor(productDetails.rating))}</span>
            <span className="ml-1">{productDetails.rating} out of 5</span>
            <span className="ml-2 text-gray-500">({productDetails.reviews} ratings)</span>
          </div>
          <p><strong>Brand:</strong> {productDetails.brand}</p>
          <p><strong>Color:</strong> {productDetails.color}</p>
          <p><strong>Specific Uses:</strong> {productDetails.specificUses}</p>
          <p><strong>Recommended Uses:</strong> {productDetails.recommendedUses}</p>
          <p><strong>Special Features:</strong> {productDetails.specialFeatures}</p>
          <p><strong>Shape:</strong> {productDetails.shape}</p>
          <p><strong>Shaft Material:</strong> {productDetails.shaftMaterial}</p>
          <p><strong>Handle Material:</strong> {productDetails.handleMaterial}</p>
          <p><strong>Frame Material:</strong> {productDetails.frameMaterial}</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">About this item</h2>
            <div className="mt-2 text-gray-700">{productDetails.description}</div>
          </div>
        </Col>
        {/* Right Column - Pricing and Cart */}
        <Col xs={24} md={4} className="flex flex-col">
          <div className="p-6 border rounded-lg shadow-sm bg-white w-full">
            <div className="mb-4">
              <p className="text-2xl font-bold text-red-600">€{productDetails.discountedPrice.toFixed(2)}</p>
              <p className="text-sm text-gray-500 line-through">€{productDetails.originalPrice.toFixed(2)}</p>
              <p className="text-sm text-green-600">
                -{Math.round(((productDetails.originalPrice - productDetails.discountedPrice) / productDetails.originalPrice) * 100)}% Limited time deal
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600">{productDetails.deliveryInfo}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold">Quantity:</p>
              <div className="flex items-center justify-start">
                <button
                  onClick={handleDecrement}
                  className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-100">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal ({quantity} item{quantity > 1 ? 's' : ''}):</span>
                <span>€{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery:</span>
                <span>€{productDetails.deliveryCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base mt-2">
                <span>Total:</span>
                <span>€{total}</span>
              </div>
            </div>
            <button
              className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mb-2"
              onClick={() => alert(`Added ${quantity} item(s) to Cart!`)}
            >
              Add to Cart
            </button>
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            //   onClick={() => alert(`Buying ${quantity} item(s) now!`)}
            >
                <Link href="/payment" className='!text-black'>Buy Now</Link>
              
            </button>
          </div>
        </Col>
      </Row>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}
        className="md:max-w-[80%] max-w-[90%]"
      >
        <Image
          src={mainImage}
          alt="Preview Image"
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
      </Modal>
    </div>
  );
};

export default Details;