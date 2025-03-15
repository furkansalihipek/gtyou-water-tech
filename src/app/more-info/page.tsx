'use client';

import React, { useEffect } from 'react';
import styles from '../../styles/MoreInfo.module.css';
import ProductCard from '../../components/ProductCard';

const products = [
  {
    id: 'w23-platin',
    title: '+W23 Platin',
    description: 'Son Teknoloji Filtreler Güçlü 5 Filtrasyon ile %95 Oranına kadar Arıtılmış Taze Su içimi. Uzun Ömürlü Filtreler ile Daha çok Arıtım. Hızlı ve Kolay Filtre Değişimi ile Hemen Bakım yapılabilir. Mutfağınızda Şık duran Minimum yer kaplayan tasarımı ile Evinizin içme suyu ihtiyacını pratik şekilde çözümleyin. 304 takviyeli Lux musluk ile daha sağlıklı su elde edin. Basınç regülatörü ile anlık Değişen Su Basıncını Dengeliyor. Kaçak Kit ile Maksimum koruma sağlayın.'
  },
  {
    id: 'digi-plus',
    title: '+DigiPlus',
    description: 'Güçlü Black 5 Filtrasyon ile %95 Oranına kadar Anıtılmış Taze Su içimi. Uzun Ömürlü Filtreler ile Daha çok Anıtım. Hızlı ve Kolay Filtre Değişimi ile Hemen Bakım yapılabilir. Mutfağınızda Şık duran Minimum yer kaplayan tasarımı ile Evinizin içme suyu ihtiyacını pratik şekilde çözümleyin. Dokunmatik ekran ile Suyunuzu her an ölçüp Güvenle takip edin. Özel üretilmiş alkali filtre ile suyunuzun lezzetini daha da artırın.'
  },
  {
    id: 'direct-s',
    title: '+Direct S',
    description: 'Anlık üretim yapabilen filtreler sayesinde en taze suya erişim. 2X150 Gpd uzun ömürlü filtrasyon. 300 GPD güçlendirici motor. Paslanmaz 304 alaşımlı musluk. Minimum yer kaplayarak tezgah altında ve üstünde şık görünüm elde edin. Estetik tasarımı ile dijital göstergenin birleşmesi farklı bir görünüm sağlar. Harici depo olmadan kullanılabilir. Dijital gösterge ile filtre değişim zamanlarında uyarır. Anlık Su ölçümü yapar. Günlük 400 litre su üretim kapasitesi ile işletmelerde de kullanılabilir.'
  },
  {
    id: 'hydro-g',
    title: '+Hydro G',
    description: 'Alkali İyonizer Özel üretim filtrasyon ile Suyunuz Canlı ve antioksidan olması artık mümkün. Orp ve hydrojen takviyesi Suyunuzu güçlendirecek. Abs kasa ile dijital pano tasarımı bütünleşen Hydro G ile üst seviye Arıtıcı sahibi olun. Dijital göstergeli panodan dokunmatik özelliği ile içtiğiniz suyu takip edebilirsiniz. Filtre göstergeleri ile filtreleri ve diğer fonksiyonlarıyla Hakimiyet parmak ucunuzda.'
  },
  {
    id: 'titan-x',
    title: '+Titan X',
    description: 'Ultra V eklentili cihaz ile Alkali su elde edin. Ultra V filtrasyon sayesinde bakterileri extra olarak tekrar tekrar yok edecek teknoloji. Özel olarak tasarlanmış Cihaz kasası ile diğer arıtıcılara göre fark yaratan estetik tasarım. Tüm detayları ile Mutfağınıza şıklık katacak. Dahili olarak içersinde 6 filtreden oluşan sistemde içtiğiniz suyu alkali yapan filtrasyon barındırır. İçtiğiniz en lezzetli su olabilir.'
  },
  {
    id: 'titan-xs',
    title: '+Titan XS',
    description: 'Ultra V eklentili cihaz ile Alkali su elde edin. Ultra V filtrasyon sayesinde bakterileri extra olarak tekrar tekrar yok edecek teknoloji. Titan X modeline göre Dahili olarak Orp filtre sayesinde Suyunuz Orp değerini negative olarak elde edin. Basınç regülatörü ile anlık Değişen Su Basıncını Dengeliyor. Kaçak Kit ile Maksimum koruma sağlayın.'
  },
  {
    id: 'r-series',
    title: '+R Series',
    description: 'Güçlü Membran teknolojisi sayesinde günlük 500-4.000 Litre kapasite ile su üretimi yapabilirsiniz. İçme suyu maliyetinizi minimize edin. Dayanıklı filtreler ile Çok su üretin Minimum harcama yapın. Taze üretilmiş suya erişim sağlayın. Birden fazla pek çok işletme Tüm içme suyu ihtiyacını R Series ile karşılıyor. İşletmenize uygun modeli tercih edip maliyetlerinizi minimize edin.'
  },
  {
    id: 'falcon-35',
    title: '+Falcon 35',
    description: 'Güçlü 5 Filtrasyon ile %95 Oranına kadar Anıtılmış Taze Su içimi. Uzun Ömürlü Filtreler ile Daha çok Anıtım. Hızlı ve Kolay Filtre Değişimi ile Hemen Bakım yapılabilir. Mutfağınızda Şık duran Minimum yer kaplayan tasarımı ile Evinizin içme suyu ihtiyacını pratik şekilde çözümleyin. 2.7 Soğuk 0.7 sıcak su kapasitesi ile taze suya erişim.'
  },
  {
    id: 'patriox',
    title: '+Patriox',
    description: 'Reçinasyon filtreler ile Artık tüm kullanım suyunuzu %95\'e kadar kireçten arındırın. Evinizdeki muslukları, beyaz eşyanızı maksimum seviyede koruyun. Şebeke sonrası Kompakt kutu içersinde tüm sistemi Kontrol edin. Sistem bakımı Kullanımla ve su kalitesine göre belirlenir. Satış biriminden destek alabilirsiniz. Dijital otomasyon valf ile kendi yıkama işlemini yapan sistemde sadece yapmanız gereken tuz eklemek. Tam otomatik olmasıyla Kolay kullanım sunar.'
  },
  {
    id: 'double-x',
    title: '+Double X',
    description: 'Şebekedeki suyun, Koku, tortu, bulanıklık ve kireç sorunları için Analiz raporuna göre düzenlenen arıtıcı sistemlerdir. Mineraller ve diğer bileşenler ile donatılan proje bazlı sistemlerde günlük 100 Ton suyu istenilen düzeyde arıtmak mümkün. Sonuca varılmak istenen değerdeki suyun kullanım miktarı ve diğer faktörler tespit edildikten sonra profesyonel ekibimiz ile Teklifimizi iletiyoruz. Pek çok kalitedeki suyu arıtmak mümkündür. Günlük 3500-100.000 litre aralığında Kullanım için uygundur. Su analizinize göre opsiyonları satış destekten öğrenebilirsiniz.'
  },
  {
    id: 'cozmos-r',
    title: '+Cozmos R',
    description: '40x40 ve 40x80 Boyutlu membranlar başta olmak üzere çok hacimli su arıtımında Güçlü membran filtrasyon sistemin ana bileşenidir. Suyun değerlerine göre %90\'a varan arıtım ile Bakteri ve virüsleri arıtabilirsiniz. Günlük 50.000 Litreye kadar sistemler kurulabilir. Sonuca varılmak istenen değerdeki suyun kullanım miktarı ve diğer faktörler tespit edildikten sonra profesyonel ekibimiz ile Teklifimizi iletiyoruz. Pek çok kalitedeki suyu arıtmak mümkündür. Günlük 5.000-50.000 litre aralığında Kullanım için uygundur. Su analizinize göre opsiyonları satış destekten öğrenebilirsiniz.'
  }
];

export default function MoreInfo() {
  useEffect(() => {
    // Sayfa yüklendikten sonra scroll işlemini gerçekleştir
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Mobil tarayıcılar için timeout ile bekle
          setTimeout(() => {
            const yOffset = -50; // Üstten boşluk bırakmak için
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            });
          }, 500); // 500ms bekle
        }
      }
    };

    // İlk yüklemede ve hash değiştiğinde çalıştır
    handleScroll();
    window.addEventListener('hashchange', handleScroll);

    return () => {
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} id={product.id}>
            <ProductCard
              title={product.title}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 