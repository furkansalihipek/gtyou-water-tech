import Image from 'next/image';
import styles from '@/styles/Product.module.css';

interface ProductCardProps {
    title: string;
    subtitle: string;
    image: string;
    darkMode?: boolean;
    customBg?: string;
}

const ProductCard = ({ title, subtitle, image, darkMode = false, customBg }: ProductCardProps) => {
    const getImageContainerClass = (title: string) => {
        switch (title) {
            case "+GT Filters":
                return styles.gtFiltersImage;
            case "+Cosmoz R":
                return styles.cosmozRImage;
            case "+R Series":
                return styles.rSeriesImage;
            case "+Hydro G":
                return styles.hydroGImage;
            default:
                return styles.rSeriesImage;
        }
    };

    const getSecondaryButtonStyle = (title: string) => {
        switch (title) {
            case "+GT Filters":
            case "+Cosmoz R":
                return styles.secondaryButton;
            case "+Hydro G":
                return styles.secondaryButtonWhite;
            default:
                return styles.secondaryButtonLight;
        }
    };

    return (
        <div className={`${styles.productCard} ${customBg || (darkMode ? 'bg-black' : 'bg-gray-100')}`}>
            {title === "+GT Filters" || title === "+Cosmoz R" || title === "+Hydro G" ? (
                <div className={styles.imageContainer}>
                    {/* Resim */}
                    <div className={getImageContainerClass(title)}>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="w-full h-full"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                    </div>
                    
                    {/* Karartma gradient'i */}
                    <div className={styles.gradient} />

                    {/* İçerik */}
                    <div className={`${styles.content} ${title === "+Hydro G" && styles.hydroContent}`}>
                        <div className="text-center pt-3">
                            <h2 className="text-lg sm:text-xl font-normal tracking-wider text-white mb-1 drop-shadow-lg">
                                {title}
                            </h2>
                            <p className="text-xs sm:text-sm font-light tracking-wide text-gray-200 mb-2 sm:mb-3 px-2">
                                {subtitle}
                            </p>
                            
                            {/* Butonlar */}
                            <div className={styles.buttonContainer}>
                                <button className={`${styles.button} ${styles.primaryButton}`}>
                                    Bilgi Edin
                                </button>
                                <button className={`${styles.button} ${getSecondaryButtonStyle(title)}`}>
                                    Satın Alın
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {/* Diğer kartlar için layout */}
                    <div className="pt-3 pb-2 text-center">
                        <h2 className={`text-lg sm:text-xl font-light mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {title}
                        </h2>
                        <p className={`text-xs sm:text-sm mb-2 sm:mb-3 px-2 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                            {subtitle}
                        </p>
                        
                        {/* Butonlar */}
                        <div className={styles.buttonContainer}>
                            <button className={`${styles.button} ${styles.primaryButton}`}>
                                Bilgi Edin
                            </button>
                            <button className={`${styles.button} ${getSecondaryButtonStyle(title)}`}>
                                Satın Alın
                            </button>
                        </div>
                    </div>
                    <div className="flex-grow flex justify-center items-end">
                        <div className={getImageContainerClass(title)}>
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="w-full h-full"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const ProductGrid = () => {
    const products: ProductCardProps[] = [
        {
            title: "+GT Filters",
            subtitle: "Coconat Bazlı Filtre Teknolojisi.",
            image: "/hindistan cevisi resim.png",
            darkMode: true
        },
        {
            title: "+Cosmoz R",
            subtitle: "Günlük 100 Ton'a Kadar Kullanılabilir Nitelikli Su.",
            image: "/ozmoz resim.png",
            darkMode: true
        },
        {
            title: "+R Series",
            subtitle: "İçme Suyunuzu 2.500 Litreye Kadar Üretebilirsiniz",
            image: "/rseries resim.png",
            darkMode: false
        },
        {
            title: "+Hydro G",
            subtitle: "Alkali ve Antioksidan suyu Keşfet!",
            image: "/kadın bardaklı.png",
            darkMode: true,
            customBg: "bg-gradient-to-b from-[#6A6F6E] to-[#99B3B2]"
        }
    ];

    return (
        <section className="py-3 sm:py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        {...product}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
