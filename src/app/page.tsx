import DijiPlus from '@/components/DijiPlus'
import Titan from '@/components/Titan'
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
        <div className="space-y-4 xs:space-y-5 sm:space-y-6 lg:space-y-8">
          <DijiPlus />
          <Titan />
          <ProductGrid />
        </div>
      </div>
      <div className="mt-8 xs:mt-10 sm:mt-12 lg:mt-16">
      </div>
    </main>
  );
}