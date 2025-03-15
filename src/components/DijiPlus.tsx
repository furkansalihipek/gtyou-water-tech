'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/DijiPlus.module.css';

const DijiPlus = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/905538793231', '_blank');
    };

    return (
        <div>
            <section className={styles.dijiPlusSection}>
                <div className="container mx-auto">
                    <div className={styles.productWrapper}>
                        {/* Logo */}
                        <div className={styles.logoContainer}>
                            <Image
                                src="/Digiplus-logo.png"
                                alt="DijiPlus Logo"
                                width={380}
                                height={140}
                                className="object-contain"
                                priority
                            />
                        </div>
                        
                        {/* Ürün görseli */}
                        <div className={styles.productContainer}>
                            <Image
                                src="/digipluss-ekran.png"
                                alt="DijiPlus Cihazı"
                                width={900}
                                height={500}
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Fiyat ve bilgi */}
                        <div>
                            <div className={styles.priceInfo}>
                                <span className="font-light">Ücretsiz Kurulum</span>
                                <span className="font-medium">Avantajlı Fiyat ile.</span>
                            </div>
                            <p className={styles.price}>18.990 ₺</p>
                        </div>

                        {/* Butonlar */}
                        <div className={styles.buttonContainer}>
                            <Link href="/more-info#digi-plus" className={styles.blueButton}>
                                Bilgi Edin
                            </Link>
                            <button onClick={handleWhatsAppClick} className={`${styles.blueButton} ${styles.whiteButton}`}>
                                Satın Alın
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DijiPlus; 