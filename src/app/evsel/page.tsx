'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  subName: string;
  description?: string;
  price: string;
  pricePrefix: string;
  image?: string;
  images?: string[];
}

const topHeroProduct: Product = {
  id: 'w23-platin',
  name: 'W23 Platin',
  subName: 'The Green Technology',
  description: 'Yeni.Güçlü ve Kompakt.',
  price: '8.990₺',
  pricePrefix: 'Özel Fiyatı ile Sadece',
  images: ['/BEYAZ W23.png', '/SİYAH W23.png']
};

const bottomHeroProduct: Product = {
  id: 'falcon-35',
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
    id: 'digi-plus',
    name: 'DigiPlus',
    subName: 'The Green Technology',
    price: '18.490₺',
    pricePrefix: 'Özel Fiyatı ile Sadece',
    images: ['/digipluss siyah.png', '/digipluss beyaz.png', '/digipluss siyah.png']
  },
  {
    id: 'direct-s',
    name: 'Direct S',
    subName: 'The Green Technology',
    price: '26.490₺',
    pricePrefix: 'Başlangıç Fiyatı',
    image: '/directs.png'
  },
  {
    id: 'hydro-g',
    name: 'Hydro G',
    subName: 'The Green Technology',
    price: '68.490₺',
    pricePrefix: 'Özel Fiyatı ile Sadece',
    image: '/hydro g.png'
  },
  {
    id: 'titan-x',
    name: 'Titan Series',
    subName: 'The Green Technology',
    price: '16.490₺',
    pricePrefix: 'Başlangıç Fiyatı',
    images: ['/titanx.png', '/TİTANXS.png']
  }
];

interface HeroProductProps {
  product: Product;
  textAlign?: "left" | "center";
}

const HeroProduct = ({ product, textAlign = "left" }: HeroProductProps) => {
  const [isMobile, setIsMobile] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905412650436', '_blank');
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full bg-[#2B3441] text-white overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto py-16 px-4 md:px-8">
        {/* Content container */}
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
              <Link href={`/more-info#${product.id}`} className="bg-white text-[#2B3441] px-4 md:px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base">
                Bilgi Edin
              </Link>
              <button onClick={handleWhatsAppClick} className="border border-white text-white px-4 md:px-6 py-2 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base">
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
                        ? `translateX(${isMobile ? '0%' : '20%'}) scale(${isMobile ? 0.85 : 0.85})` 
                        : index === 1 
                        ? `translateX(${isMobile ? '15%' : '35%'}) scale(${isMobile ? 0.95 : 1})` 
                        : `translateX(${isMobile ? '30%' : '45%'}) scale(${isMobile ? 0.85 : 0.85})`,
                      zIndex: index === 1 ? 20 : 10,
                      opacity: index === 1 ? 1 : 0.8,
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      style={{ objectFit: 'contain', transform: 'scale(1.2)' }}
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
                  style={{ objectFit: 'contain', transform: 'scale(1.2)' }}
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

const W23Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905412650436', '_blank');
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
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
          <div className="relative w-full md:w-2/3 min-h-[300px] md:min-h-[400px]">
            {topHeroProduct.images?.map((image, index) => (
              <div 
                key={index}
                className="absolute w-full h-full transition-all duration-300"
                style={{
                  transform: index === 0 
                    ? `translateX(${isMobile ? '5%' : '10%'}) scale(${isMobile ? 1 : 1.1})` 
                    : `translateX(${isMobile ? '-5%' : '-1%'}) scale(${isMobile ? 1 : 1.1})`,
                  zIndex: index === 0 ? 20 : 10,
                  opacity: index === 0 ? 1 : 0.8,
                }}
              >
                <Image
                  src={image}
                  alt={`${topHeroProduct.name} - ${index + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority={index === 0}
                  className="p-4"
                />
              </div>
            ))}
          </div>

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
          <Link href={`/more-info#${topHeroProduct.id}`} className="bg-white text-[#2B3441] px-6 py-1.5 rounded-full text-sm hover:bg-gray-100 transition-colors">
            Bilgi Edin
          </Link>
          <button onClick={handleWhatsAppClick} className="border border-white/50 text-white px-6 py-1.5 rounded-full text-sm hover:bg-white/10 transition-colors">
            Satın Al
          </button>
        </div>
      </div>
    </div>
  );
};

export default function EvselPage() {
  const [isMobile, setIsMobile] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905412650436', '_blank');
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
                {product.images ? (
                  <div className="relative h-80 w-full mb-6 overflow-hidden">
                    {product.images.map((image, index) => (
                      <div
                        key={index}
                        className="absolute w-full h-full transition-all duration-300"
                        style={{
                          transform: product.name === 'Titan Series' 
                            ? (index === 0 
                              ? `translateX(${isMobile ? '-5%' : '-8%'}) scale(${isMobile ? 1.1 : 1.2})` 
                              : `translateX(${isMobile ? '10%' : '5%'}) scale(${isMobile ? 1 : 1.1})`)
                            : product.name === 'DigiPlus'
                              ? (index === 0
                                ? `translateX(${isMobile ? '-15%' : '-10%'}) scale(${isMobile ? 0.9 : 0.95})`
                                : index === 1
                                ? `translateX(${isMobile ? '0%' : '0%'}) scale(${isMobile ? 1 : 1.1})`
                                : `translateX(${isMobile ? '15%' : '10%'}) scale(${isMobile ? 0.9 : 0.95})`)
                            : (index === 0 
                              ? `translateX(${isMobile ? '5%' : '8%'}) scale(${isMobile ? 1 : 1.1})` 
                              : `translateX(${isMobile ? '-5%' : '-5%'}) scale(${isMobile ? 1 : 1.1})`),
                          zIndex: product.name === 'DigiPlus'
                            ? (index === 1 ? 20 : 10)
                            : (index === 0 ? 20 : 10),
                          opacity: product.name === 'Titan Series'
                            ? (index === 0 ? 1 : 0.95)
                            : product.name === 'DigiPlus'
                              ? (index === 1 ? 1 : 0.98)
                              : (index === 0 ? 1 : 0.8),
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
                  <div className="relative h-80 w-full mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'contain', transform: 'scale(1.2)' }}
                      className="p-4"
                    />
                  </div>
                ) : null}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">{product.pricePrefix}</p>
                  <p className="text-xl font-bold mb-6">{product.price}</p>
                  <div className="flex justify-center gap-4">
                    <Link href={`/more-info#${product.id}`} className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                      Bilgi Edin
                    </Link>
                    <button onClick={handleWhatsAppClick} className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
                      Satın Al
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Hero Product */}
        <div className="mb-8">
          <HeroProduct product={bottomHeroProduct} textAlign="center" />
        </div>
      </div>
    </main>
  );
}