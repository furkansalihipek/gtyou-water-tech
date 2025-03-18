'use client';

import React from 'react';
import styles from '../../styles/ProductCard.module.css';
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';

const SalesSupport: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905412650436', '_blank');
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=38/2+Sk.+No:49A+Irmak+Mah.+İzmir', '_blank');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Satış Destek</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
        {/* Mağaza Kartı */}
        <div 
          className={`${styles.card} flex flex-col justify-center cursor-pointer hover:scale-105 transition-transform duration-300`}
          onClick={handleMapClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleMapClick()}
        >
          <div className={`${styles.content} flex flex-col items-center text-center`}>
            <div className="flex items-center mb-4">
              <h3 className={styles.title}>Mağazamızı ziyaret edin</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <FaMapMarkerAlt className="text-5xl text-red-500" />
              <p className={styles.description}>
                Adres: 38/2 Sk. No:49A Irmak Mah. İzmir
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Kartı */}
        <div 
          className={`${styles.card} cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col justify-center`} 
          onClick={handleWhatsAppClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleWhatsAppClick()}
        >
          <div className={`${styles.content} flex flex-col items-center text-center`}>
            <div className="flex items-center mb-4">
              <h3 className={styles.title}>Bize ulaşın</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <FaWhatsapp className="text-5xl text-green-500" />
              <p className={styles.description}>
                WhatsApp üzerinden bize hemen ulaşın
                <br />
                0 (541) 265 04 36
              </p>
            </div>
          </div>
        </div>

        {/* Sosyal Medya Kartı */}
        <div className={`${styles.card} flex flex-col justify-center`}>
          <div className={`${styles.content} flex flex-col items-center text-center`}>
            <div className="flex items-center mb-4">
              <h3 className={styles.title}>Bizi takip edin</h3>
            </div>
            <div className="flex justify-center items-center space-x-8 mt-6">
              <a 
                href="https://www.instagram.com/gtyouturkiye" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-4xl text-gray-600 hover:text-pink-600 hover:scale-125 transition-all duration-300 ease-in-out"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/share/18HfhUHGBd/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-4xl text-gray-600 hover:text-blue-600 hover:scale-125 transition-all duration-300 ease-in-out"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* İletişim Kartı */}
        {/* <div className={styles.card}>
          <div className={styles.content}>
            <div className="flex items-center mb-4">
              <h3 className={styles.title}>Görüş ve önerilerinizi bize iletin</h3>
            </div>
            <p className={styles.description}>
              <a href="mailto:info@example.com" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">
                info@example.com
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SalesSupport; 