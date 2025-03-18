'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Titan.module.css';

const Titan = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/905412650436', '_blank');
    };

    return (
        <section className={`${styles.section}`}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <Image
                        src="/titan series logo.png"
                        alt="Titan Series Logo"
                        width={280}
                        height={100}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

                {/* Ürün görselleri */}
                <div className={styles.productContainer}>
                    <div className={`${styles.productImage} ${styles.bottomImage}`}>
                        <Image
                            src="/titanx.png"
                            alt="Titan X"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                        />
                    </div>
                    <div className={`${styles.productImage} ${styles.topImage}`}>
                        <Image
                            src="/TİTANXS.png"
                            alt="Titan XS"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                        />
                    </div>
                </div>

                {/* Fiyat ve bilgi */}
                <div className={styles.infoContainer}>
                    <div className={styles.priceInfo}>
                        <span className="font-light">Ücretsiz Kurulum</span>
                        <span className="font-medium">Avantajlı Fiyat ile.</span>
                    </div>
                    <p className={styles.price}>16.490 ₺</p>
                </div>

                {/* Butonlar */}
                <div className={styles.buttonContainer}>
                    <Link href="/more-info#titan-x" className={styles.buyButton}>
                        Bilgi Edin
                    </Link>
                    <button onClick={handleWhatsAppClick} className={styles.infoButton}>
                        Satın Alın
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Titan; 