'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { BiSolidCartAdd } from 'react-icons/bi';
import { VscHeart } from 'react-icons/vsc';
import Link from 'next/link';

const ShowCards = () => {
  // Get category and sub-category from the URL
  const { category, 'sub-category': subCategory } = useParams();

  const products = [
    {
      id: '221076',
      name: 'FLAMILANO SILAS CEILING RECESSED LIGHT 7W',
      price: 'AED15.60',
      stock: '716',
      image: '/images/category/img1.jpg',
      item_code: '123',
      subCategory: 'solar-lights',
    },
    {
      id: '22110013894',
      name: 'FLAMILANO GAMEO 7W 630lm WHITE CEILING LIGHT IP54',
      price: 'AED18.00',
      stock: '716',
      image: '/images/category/img1.jpg',
      item_code: '12335',
      subCategory: 'ceiling-lights',
    },
    {
      id: '0097728',
      name: 'SYLVANIA IP20 SATIN GLASS SYL SLIM ROUND CEILING RECESSED WHITE 18W DOWN LIGHTS',
      price: 'AED142.29',
      stock: '261',
      image: '/images/category/img1.jpg',
      item_code: '123234',
      subCategory: 'solar-lights',
    },
    {
      id: '221051',
      name: 'FLAMILANO CANAL 20W SURFACE MOUNTED CEILING LIGHT',
      price: 'AED58.92',
      stock: '51',
      image: '/images/category/img1.jpg',
      item_code: '1243223',
      subCategory: 'ceiling-lights',
    },
    {
      id: '0097721',
      name: 'SYLVANIA IP20 SYL ROUND CEILING RECESSED CRYSTAL 15W WHITE DOWN LIGHTS',
      price: 'AED144.92',
      stock: '44',
      image: '/images/category/img1.jpg',
      item_code: '122324323',
      subCategory: 'table-lights',
    },
    {
      id: '0097721',
      name: 'SYLVANIA IP20 SYL ROUND CEILING RECESSED CRYSTAL 15W WHITE DOWN LIGHTS',
      price: 'AED144.92',
      stock: '44',
      image: '/images/category/img1.jpg',
      item_code: '122324323',
      subCategory: 'table-lights',
    },
    {
      id: '0097721',
      name: 'SYLVANIA IP20 SYL ROUND CEILING RECESSED CRYSTAL 15W WHITE DOWN LIGHTS',
      price: 'AED144.92',
      stock: '44',
      image: '/images/category/img1.jpg',
      item_code: '122324323',
      subCategory: 'torchiere',
    },
    {
      id: '0097721',
      name: 'SYLVANIA IP20 SYL ROUND CEILING RECESSED CRYSTAL 15W WHITE DOWN LIGHTS',
      price: 'AED144.92',
      stock: '44',
      image: '/images/category/img1.jpg',
      item_code: '122324323',
      subCategory: 'sconces',
    },
    {
      id: '0097721',
      name: 'SYLVANIA IP20 SYL ROUND CEILING RECESSED CRYSTAL 15W WHITE DOWN LIGHTS',
      price: 'AED144.92',
      stock: '44',
      image: '/images/category/img1.jpg',
      item_code: '122324323',
      subCategory: 'chandeliers',
    },
    {
      id: '0097721',
      name: 'SYLVANIA IP20 SYL ROUND CEILING RECESSED CRYSTAL 15W WHITE DOWN LIGHTS',
      price: 'AED144.92',
      stock: '44',
      image: '/images/category/img1.jpg',
      item_code: '122324323',
      subCategory: 'solar-lights',
    },
    {
      id: '0097721',
      name: 'SYLVANIA IP20 SYL ROUND CEILING RECESSED CRYSTAL 15W WHITE DOWN LIGHTS',
      price: 'AED144.92',
      stock: '44',
      image: '/images/category/img1.jpg',
      item_code: '122324323',
      subCategory: 'chandeliers',
    },
  ];

  // Filter products based on the subCategory from the URL
  const filteredProducts = subCategory
    ? products.filter((product) => product.subCategory.toLowerCase() === decodeURIComponent(subCategory).toLowerCase())
    : products;

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link href={`/${category}/${subCategory}/${product.id}`}
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            >
              <VscHeart className="absolute top-3 right-3 text-lg" />
              <img
                alt={product.name}
                src={product.image}
                className="w-full h-48 object-cover"
              />
              <div className="p-2 flex flex-col gap-2 justify-center items-start">
                <h3 className="text-md !font-normal !m-0 text-gray-800 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 !m-0 !text-left">Stock: {product.stock}</p>
                <p className="text-gray-600 !m-0">{product.item_code}</p>
                <p className="text-lg font-bold text-gray-900 mt-2 text-center mx-auto">{product.price}</p>
                <button className="w-full mt-4 bg-black !text-white py-2 rounded transition-colors duration-200 flex items-center justify-center gap-2">
                  <BiSolidCartAdd className="text-xl" />
                  <span>ADD TO CART</span>
                </button>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found for sub-category: {subCategory || 'None'}</p>
        )}
      </div>
    </div>
  );
};

export default ShowCards;