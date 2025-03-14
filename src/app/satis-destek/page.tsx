'use client';

import React from 'react';
import styles from '../../styles/ProductCard.module.css';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SalesSupport: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905538793231', '_blank');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Satış Destek</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Mağaza Kartı */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className="flex items-center mb-4">
              <h3 className={styles.title}>Mağazamızı ziyaret edin</h3>
            </div>
            <p className={styles.description}>
              Adres: [Mağaza adresi buraya gelecek]
            </p>
          </div>
        </div>

        {/* WhatsApp Kartı */}
        <div 
          className={`${styles.card} cursor-pointer hover:scale-105 transition-transform duration-300`} 
          onClick={handleWhatsAppClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleWhatsAppClick()}
        >
          <div className={styles.content}>
            <div className="flex items-center mb-4">
              <h3 className={styles.title}>Bize ulaşın</h3>
            </div>
            <p className={styles.description}>
              WhatsApp üzerinden bize hemen ulaşın
            </p>
          </div>
        </div>

        {/* Sosyal Medya Kartı */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className="flex items-center mb-4">
              <h3 className={styles.title}>Bizi takip edin</h3>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-pink-600 hover:scale-110 transition-transform">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-600 hover:scale-110 transition-transform">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-400 hover:scale-110 transition-transform">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-700 hover:scale-110 transition-transform">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* İletişim Kartı */}
        <div className={styles.card}>
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
        </div>
      </div>
    </div>
  );
};

export default SalesSupport; 