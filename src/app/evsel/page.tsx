'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  subName: string;
  description?: string;
  price: string;
  pricePrefix: string;
  image?: string;
  images?: string[];
}

const topHeroProduct: Product = {
  id: 1,
  name: 'W23 Platin',
  subName: 'The Green Technology',
  description: 'Yeni.Güçlü ve Kompakt.',
  price: '8.990₺',
  pricePrefix: 'Özel Fiyatı ile Sadece',
  image: '/BEYAZ W23.png'
};

const bottomHeroProduct: Product = {
  id: 6,
  name: 'Falcon 35',
  subName: 'The Green Technology',
  description: 'Sıcak ve Soğuk Arıtılmış Suya Erişim.',
  price: '29.490₺',
  pricePrefix: 'Avantajlı Fiyatı ile',
  image: '/falcon 35 siyah.png',
  images: ['/falcon 35 beyaz.png', '/falcon 35 siyah.png', '/falcon 35 beyaz.png']
};

const gridProducts: Product[] = [
  {
    id: 2,
    name: 'DigiPlus',
    subName: 'The Green Technology',
    price: '18.490₺',
    pricePrefix: 'Özel Fiyatı ile Sadece',
    image: '/titanx.png'
  },
  {
    id: 3,
    name: 'Direct S',
    subName: 'The Green Technology',
    price: '26.490₺',
    pricePrefix: 'Başlangıç Fiyatı',
    image: '/directs.png'
  },
  {
    id: 4,
    name: 'Hydro G',
    subName: 'The Green Technology',
    price: '68.490₺',
    pricePrefix: 'Özel Fiyatı ile Sadece',
    image: '/hydro g.png'
  },
  {
    id: 5,
    name: 'Titan Series',
    subName: 'The Green Technology',
    price: '16.490₺',
    pricePrefix: 'Başlangıç Fiyatı',
    image: '/titanx.png'
  }
];

interface HeroProductProps {
  product: Product;
  textAlign?: "left" | "center";
}

const HeroProduct = ({ product, textAlign = "left" }: HeroProductProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full bg-[#2B3441] text-white mb-5 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto py-8 md:py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`text-center md:text-${textAlign} mb-8 md:mb-0 md:w-1/3 w-full`}>
            <h1 className="text-3xl md:text-5xl font-light mb-4">
              +{product.name}
            </h1>
            <p className="text-sm text-gray-300 mb-2">{product.subName}</p>
            {product.description && (
              <p className="text-lg md:text-2xl mb-4">{product.description}</p>
            )}
            <p className="text-sm mb-2">{product.pricePrefix}</p>
            <p className="text-2xl font-bold">{product.price}</p>
            <div className={`flex gap-4 justify-center md:justify-${textAlign} mt-6`}>
              <button className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-full hover:bg-blue-600 transition-colors text-sm md:text-base">
                Bilgi Edin
              </button>
              <button className="border border-white text-white px-4 md:px-6 py-2 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base">
                Satın Al
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center w-full md:w-2/3 overflow-hidden">
            {product.images ? (
              <div className="relative w-full min-h-[300px] md:min-h-[500px] overflow-hidden">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="absolute w-[280px] md:w-[500px] h-[300px] md:h-[500px] transition-all duration-300"
                    style={{
                      transform: index === 0 
                        ? `translateX(${isMobile ? '-8%' : '20%'}) scale(${isMobile ? 0.7 : 0.85})` 
                        : index === 1 
                        ? `translateX(${isMobile ? '0%' : '35%'}) scale(${isMobile ? 0.8 : 1})` 
                        : `translateX(${isMobile ? '8%' : '45%'}) scale(${isMobile ? 0.7 : 0.85})`,
                      zIndex: index === 1 ? 20 : 10,
                      opacity: index === 1 ? 1 : 0.8,
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-4"
                    />
                  </div>
                ))}
              </div>
            ) : product.image ? (
              <div className="relative w-full h-[250px] md:h-[400px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const W23Hero = () => (
  <div className="relative w-full bg-[#2B3441] text-white overflow-x-hidden">
    <div className="max-w-[1280px] mx-auto py-16 px-4 md:px-8">
      {/* Title at the top */}
      <div className="text-center mb-12">
        <div className="text-[42px] md:text-[56px] leading-tight tracking-wide mb-1">
          +W23 Platin
        </div>
        <div className="text-sm text-gray-400">The Green Technology</div>
      </div>

      {/* Content container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {topHeroProduct.image && (
          <div className="relative w-full md:w-1/3 h-[280px]">
            <Image
              src={topHeroProduct.image}
              alt={topHeroProduct.name}
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        )}

        {/* Text content on the right */}
        <div className="text-center md:text-left md:w-1/3">
          <div className="mb-4">
            <p className="text-2xl font-light tracking-wide">Yeni.Güçlü ve Kompakt.</p>
          </div>
          <p className="text-sm mb-0">
            <span className="text-gray-400">Özel Fiyatı ile Sadece </span>
            <span>8.990₺</span>
          </p>
        </div>
      </div>

      {/* Buttons at the bottom */}
      <div className="flex justify-center gap-3 mt-8">
        <button className="bg-white text-[#2B3441] px-6 py-1.5 rounded-full text-sm hover:bg-gray-100 transition-colors">
          Bilgi Edin
        </button>
        <button className="border border-white/50 text-white px-6 py-1.5 rounded-full text-sm hover:bg-white/10 transition-colors">
          Satın Al
        </button>
      </div>
    </div>
  </div>
);

export default function EvselPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 overflow-x-hidden">
        {/* Top Hero Product */}
        <W23Hero />

        {/* Grid Products */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-100 rounded-lg overflow-hidden p-8"
              >
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-light mb-2">+{product.name}</h2>
                  <p className="text-sm text-gray-600">{product.subName}</p>
                </div>
                {product.image && (
                  <div className="relative h-64 w-full mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-4"
                    />
                  </div>
                )}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">{product.pricePrefix}</p>
                  <p className="text-xl font-bold mb-6">{product.price}</p>
                  <div className="flex justify-center gap-4">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                      Bilgi Edin
                    </button>
                    <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
                      Satın Al
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Hero Product */}
        <HeroProduct product={bottomHeroProduct} textAlign="center" />
      </div>
    </main>
  );
}