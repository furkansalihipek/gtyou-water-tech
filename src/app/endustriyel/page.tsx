'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function EndustriyelPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* R Series Section */}
      <section className="w-full bg-gradient-to-b from-[#9EA7B3] to-[#C7CDD6]">
        <div className="max-w-[1280px] mx-auto text-center py-4 px-4 md:px-8">
          <h1 className="text-[42px] font-light mb-0.5">+R Series</h1>
          <p className="text-sm text-gray-600 mb-0.5">The Green Technology</p>
          <p className="text-lg font-light mb-0.5">Günlük 3.500 litreye kadar içme suyunuzu üretin.</p>
          <p className="text-sm">Başlangıç Fiyatı <span className="font-medium">28.990₺</span></p>
          <div className="relative h-[420px] w-full max-w-[640px] mx-auto -mt-8">
            <Image
              src="/r series Large.png"
              alt="R Series Water Treatment System"
              fill
              className="object-contain scale-125"
              priority
            />
          </div>
          <div className="flex justify-center gap-3 -mt-4">
            <Link href="/iletisim" className="bg-blue-500 text-white px-6 py-1.5 rounded-full text-sm hover:bg-blue-600 transition-colors">
              Bilgi Edin
            </Link>
            <Link href="/satinal" className="border border-blue-500 text-blue-500 px-6 py-1.5 rounded-full text-sm hover:bg-blue-50 transition-colors">
              Satın Al
            </Link>
          </div>
        </div>
      </section>

      {/* Patriox and Double X Grid Section */}
      <section className="w-full bg-white py-4">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Patriox Card */}
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <h2 className="text-[32px] font-light mb-0.5">+Patriox</h2>
              <p className="text-sm text-gray-600 mb-0.5">The Green Technology</p>
              <div className="relative h-[300px] w-full max-w-[400px] mx-auto -mt-4">
                <Image
                  src="/patriox.png"
                  alt="Patriox System"
                  fill
                  className="object-contain scale-90"
                  priority
                />
              </div>
              <p className="text-sm -mt-4">Başlangıç Fiyatı <span className="font-medium">35.990₺</span></p>
              <div className="flex justify-center gap-3 mt-2">
                <Link href="/iletisim" className="bg-blue-500 text-white px-6 py-1.5 rounded-full text-sm hover:bg-blue-600 transition-colors">
                  Bilgi Edin
                </Link>
                <Link href="/satinal" className="border border-blue-500 text-blue-500 px-6 py-1.5 rounded-full text-sm hover:bg-blue-50 transition-colors">
                  Satın Al
                </Link>
              </div>
            </div>

            {/* Double X Card */}
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <h2 className="text-[32px] font-light mb-0.5">+Double X</h2>
              <p className="text-sm text-gray-600 mb-0.5">The Green Technology</p>
              <div className="relative h-[300px] w-full max-w-[400px] mx-auto -mt-4">
                <Image
                  src="/Double X.png"
                  alt="Double X System"
                  fill
                  className="object-contain scale-150"
                  priority
                />
              </div>
              <p className="text-sm -mt-4">Başlangıç Fiyatı ile Sadece <span className="font-medium">137.990₺</span></p>
              <div className="flex justify-center gap-3 mt-2">
                <Link href="/iletisim" className="bg-blue-500 text-white px-6 py-1.5 rounded-full text-sm hover:bg-blue-600 transition-colors">
                  Bilgi Edin
                </Link>
                <Link href="/satinal" className="border border-blue-500 text-blue-500 px-6 py-1.5 rounded-full text-sm hover:bg-blue-50 transition-colors">
                  Satın Al
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmoz R Section */}
      <section className="w-full bg-black text-white">
        <div className="max-w-[1280px] mx-auto text-center py-8 px-4 md:px-8">
          <h1 className="text-[42px] font-light mb-0.5">+Cosmoz R</h1>
          <p className="text-sm text-gray-400 mb-0.5">The Green Technology</p>
          <p className="text-2xl font-light mb-2">Çok Güçlü, Hızlı ve Dayanıklı.</p>
          <p className="text-base text-gray-300 mb-4">Endüstriyel Su İhtiyacınızı En İyi şekilde Çözümleyin.</p>
          <div className="relative h-[420px] w-full max-w-[800px] mx-auto">
            <Image
              src="/ozmoz resim.png"
              alt="Cosmoz R Industrial Water Treatment System"
              fill
              className="object-contain scale-180"
              priority
            />
          </div>
          <p className="text-lg mt-4">Başlangıç Fiyatı ile <span className="font-medium">179.990₺</span></p>
          <div className="flex justify-center gap-3 mt-4">
            <Link href="/iletisim" className="bg-white text-black px-8 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors">
              Bilgi Edin
            </Link>
            <Link href="/satinal" className="border border-white text-white px-8 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
              Satın Al
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-[1280px] mx-auto text-center md:px-8">
          <h1 className="text-[42px] font-light text-gray-800 mb-4">"İşletmenizin Tüm Suyunu Arıtın"</h1>
          <p className="text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Günlük 100.000 Litre Üretim kapasitesine kadar Size uygun En iyi ürünü seçmek için Profesyonel ekibimiz ile iletişime geçmek çok kolay. Doğru ürün ve Doğru Proje ile yıllık su tüketim maliyetinizi düşürürken Suyunuzun Kalitesini artırın.
          </p>
        </div>
      </section>
    </main>
  );
} 