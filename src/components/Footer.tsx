import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-5 mb-5 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Hakkımızda */}
                    <div>
                        <h3 className="text-lg font-medium mb-3 text-gray-800">Hakkımızda</h3>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                            Gtyou Water Technology olarak 2023 yılından itibaren Evsel ve Endüstriyel alanlarda su arıtma projeleri geliştirme hedefi ile çalışmalarımızı sürdürüyoruz.
                        </p>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mt-1">
                            Şirketimiz Türkiye merkezli olup Sadece Türkiye bölgesinde faaliyet göstermektedir.
                        </p>
                    </div>

                    {/* Endüstriyel */}
                    <div>
                        <h3 className="text-lg font-medium mb-3 text-gray-800">Endüstriyel</h3>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                            Gtyou Endüstriyel Çalışmalarımız Fabrikalar, Oteller, Hastaneler gibi işletmelerdeki Genel kullanım ve içme Suyu Üretimi hususunda Çözümler sunmaktadır. Günlük ortalama 1 ile 100 Ton kullanım ve içme suyu sağlama kapasitelerindeki arıtma sistemleri kurulmaktadır.
                        </p>
                    </div>

                    {/* Evsel */}
                    <div>
                        <h3 className="text-lg font-medium mb-3 text-gray-800">Evsel</h3>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                            Gtyou Evsel Çalışmalarımız Doğrudan Son kullanıcı olan Tezgah altı ve Tezgah üstü tasarımlı ürünlerimiz ile Ailenizin günlük içme suyu ihtiyacını karşılamak için seçenekler sunmaktadır.
                        </p>
                    </div>

                    {/* İletişim */}
                    <div>
                        <h3 className="text-lg font-medium mb-3 text-gray-800">İletişim</h3>
                        <div className="text-gray-600 text-xs md:text-sm space-y-1">
                            <p><span className="font-medium">Merkez:</span> 38/2 Sk. No:49a Irmak Mah. İzmir</p>
                            <p><span className="font-medium">Depo:</span> Tekeli Mah. Menderes-İzmir</p>
                            <p><span className="font-medium">İdari işler:</span> +905334796107</p>
                            <p><span className="font-medium">Genel:</span> +905412650436</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 mt-6 pt-4 text-center">
                    <p className="text-gray-600 text-xs">
                        © {new Date().getFullYear()} Gtyou Water Technology. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 