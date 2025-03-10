import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-2 md:py-5">
            <div className="px-2 md:px-3 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 text-center md:text-left">
                    {/* Hakkımızda */}
                    <div className="space-y-1 md:space-y-1.5 mx-auto md:mx-0 max-w-sm">
                        <h3 className="text-[11px] md:text-base font-medium text-gray-800">Hakkımızda</h3>
                        <p className="text-[9px] md:text-xs text-gray-600 leading-relaxed">
                            Gtyou Water Technology olarak 2023 yılından itibaren Evsel ve Endüstriyel alanlarda su arıtma projeleri geliştirme hedefi ile çalışmalarımızı sürdürüyoruz.
                        </p>
                        <p className="text-[9px] md:text-xs text-gray-600 leading-relaxed">
                            Şirketimiz Türkiye merkezli olup Sadece Türkiye bölgesinde faaliyet göstermektedir.
                        </p>
                    </div>

                    {/* Endüstriyel */}
                    <div className="space-y-1 md:space-y-1.5 mx-auto md:mx-0 max-w-sm">
                        <h3 className="text-[11px] md:text-base font-medium text-gray-800">Endüstriyel</h3>
                        <p className="text-[9px] md:text-xs text-gray-600 leading-relaxed">
                            Gtyou Endüstriyel Çalışmalarımız Fabrikalar, Oteller, Hastaneler gibi işletmelerdeki Genel kullanım ve içme Suyu Üretimi hususunda Çözümler sunmaktadır. Günlük ortalama 1 ile 100 Ton kullanım ve içme suyu sağlama kapasitelerindeki arıtma sistemleri kurulmaktadır.
                        </p>
                    </div>

                    {/* Evsel */}
                    <div className="space-y-1 md:space-y-1.5 mx-auto md:mx-0 max-w-sm">
                        <h3 className="text-[11px] md:text-base font-medium text-gray-800">Evsel</h3>
                        <p className="text-[9px] md:text-xs text-gray-600 leading-relaxed">
                            Gtyou Evsel Çalışmalarımız Doğrudan Son kullanıcı olan Tezgah altı ve Tezgah üstü tasarımlı ürünlerimiz ile Ailenizin günlük içme suyu ihtiyacını karşılamak için seçenekler sunmaktadır.
                        </p>
                    </div>

                    {/* İletişim */}
                    <div className="space-y-1 md:space-y-1.5 mx-auto md:mx-0 max-w-sm">
                        <h3 className="text-[11px] md:text-base font-medium text-gray-800">İletişim</h3>
                        <div className="text-[9px] md:text-xs text-gray-600 space-y-0.5">
                            <div className="flex items-start space-x-1 md:space-x-1.5 justify-center md:justify-start">
                                <span className="font-medium min-w-[50px] md:min-w-[70px]">Merkez:</span>
                                <span>38/2 Sk. No:49a Irmak Mah. İzmir</span>
                            </div>
                            <div className="flex items-start space-x-1 md:space-x-1.5 justify-center md:justify-start">
                                <span className="font-medium min-w-[50px] md:min-w-[70px]">Depo:</span>
                                <span>Tekeli Mah. Menderes-İzmir</span>
                            </div>
                            <div className="flex items-start space-x-1 md:space-x-1.5 justify-center md:justify-start">
                                <span className="font-medium min-w-[50px] md:min-w-[70px]">İdari:</span>
                                <span>+905334796107</span>
                            </div>
                            <div className="flex items-start space-x-1 md:space-x-1.5 justify-center md:justify-start">
                                <span className="font-medium min-w-[50px] md:min-w-[70px]">Genel:</span>
                                <span>+905412650436</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-2 md:mt-4 pt-1.5 md:pt-3 text-center">
                    <p className="text-[8px] md:text-xs text-gray-600">
                        © {new Date().getFullYear()} Gtyou Water Technology. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 