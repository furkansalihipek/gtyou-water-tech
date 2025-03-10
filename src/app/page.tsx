import Header from "@/components/Header";
import DijiPlus from '@/components/DijiPlus'
import Titan from '@/components/Titan'
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <DijiPlus />
        <Titan />
        <ProductGrid />
      </div>
      <div className="mt-12 sm:mt-16">
        <Footer />
      </div>
    </main>
  );
}