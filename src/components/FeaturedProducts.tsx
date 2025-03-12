'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getImagePath } from '../utils/imagePath';

interface Product {
  id: number;
  heading: string;
  subheading: string;
  description: string[];
  images: string[];
}

const products: Product[] = [
  {
    id: 1,
    heading: 'ViewBoard® IFP8633',
    subheading: '86" 4K Interactive Display',
    description: [
      'Integrated with myViewBoard software for enhanced collaboration',
      'Multi-tasking capabilities for seamless lesson delivery',
      'USB-C one-cable solution with 65W Power Delivery',
      'Intuitive Android 11 interface for smooth operation'
    ],
    images: [
      getImagePath('/products/viewboard-ifp8633-1.jpg'),
      getImagePath('/products/viewboard-ifp8633-2.jpg'),
      getImagePath('/products/viewboard-ifp8633-3.jpg')
    ]
  },
  {
    id: 2,
    heading: 'ViewBoard IFP8650-5F',
    subheading: 'Professional Display Solutions',
    description: [
      'Ultra Fine Touch Technology with up to 40-point touch',
      'myViewBoard Whiteboard software',
      'Intuitive remote device control and multimedia broadcast',
      'Android 13 OS powered by an octa-core CPU'
    ],
    images: [
      getImagePath('/products/viewboard-ifp8650-1.jpg'),
      getImagePath('/products/viewboard-ifp8650-2.jpg'),
      getImagePath('/products/viewboard-ifp8650-3.jpg')
    ]
  },
  {
    id: 3,
    heading: 'IFP9850-4',
    subheading: 'ViewBoard® 98" 4K Interactive Display',
    description: [
      'Natural pen-on-paper writing experience',
      'Seamless plug-and-present connectivity via USB-C​',
      'Wireless content sharing and 4-way split screen',
      'myViewBoard Manager for simplified display management'
    ],
    images: [
      getImagePath('/products/viewboard-ifp9850-1.jpg'),
      getImagePath('/products/viewboard-ifp9850-2.jpg'),
      getImagePath('/products/viewboard-ifp9850-3.jpg')
    ]
  },
  {
    id: 4,
    heading: 'ViewSonic VPCF5-W33-G1',
    subheading: 'Slot-in PC for ViewBoard',
    description: [
      '11th Gen Intel core i5 CPU, 8GB DDR4, 256 GB SSD',
      'Powerful Intel® 11th Core Processors​ embedded TPM2.0',
      'Improved System Stability, Security, & Thermal Control',
      'Remote management and scheduling capabilities'
    ],
    images: [
      getImagePath('/products/viewsonic-vpcf5-w33-g1-1.jpg'),
      getImagePath('/products/viewsonic-vpcf5-w33-g1-2.jpg')
    ]
  },
  {
    id: 5,
    heading: 'CP-LNR-4K3162-P16',
    subheading: '16 Ch. 4K NVR with 16 PoE Ports',
    description: [
      'Up to 16 channel IP camera input',
      'Support 2 SATA HDDs up to 10TB Each',
      'Support 16 PoE Ports',
      'Mobile Software: iCMOB, gCMOB'
    ],
    images: [
      getImagePath('/products/cp-unr-4k3162-p16-1.jpg'),
      getImagePath('/products/cp-unr-4k3162-p16-2.jpg')
    ]
  },
  {
    id: 6,
    heading: 'CP-UNC-TC81ZML6C-MD',
    subheading: '8MP Network IR Bullet Camera- 60 Mtr.',
    description: [
      '8MP 1/2.7" CMOS Sensor',
      '120° Wide-Angle Lens',
      'Max. Output 8 MP (3840×2160)@25/30 fps.',
      'IR Range: 60 Mtr.'
    ],
    images: [
      getImagePath('/products/cp-unc-tc81zml6c-md-1.jpg'),
      getImagePath('/products/cp-unc-tc81zml6c-md-2.jpg')
    ]
  }
];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden p-4">
        {product.images.map((image: string, index: number) => (
          <div
            key={index}
            className={`absolute inset-4 rounded-lg transition-opacity duration-1000
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={image}
              alt={`${product.heading} ${product.subheading} - View ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-4 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-[#b62685] group-hover:text-[#a11f75] transition-colors duration-300">
            {product.heading}
          </h3>
          <h4 className="text-lg text-gray-700">
            {product.subheading}
          </h4>
        </div>
        <div className="mt-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-100 shadow-inner">
          <ul className="space-y-2 list-disc list-inside text-gray-600 marker:text-[#b62685]">
            {product.description.map((point, index) => (
              <li key={index} className="text-sm">
                {point}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Image Indicators */}
        <div className="absolute bottom-4 right-4 flex space-x-1">
          {product.images.map((_: string, index: number) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
                ${index === currentImageIndex 
                  ? 'bg-[#b62685] w-3' 
                  : 'bg-gray-300 group-hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover our premium selection of display solutions
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 