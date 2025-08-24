import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import ProductGrid from '@/components/ProductGrid'
import EditorialMosaic from '@/components/EditorialMosaic'
import PromoSplit from '@/components/PromoSplit'
import Benefits from '@/components/Benefits'
import BigFooterMark from '@/components/BigFooterMark'
import Container from '@/components/Container'
import { newArrivals, everyday } from '@/lib/products'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* New arrival section */}
      <section className="py-12 md:py-18">
        <Container>
          <SectionHeading title="New arrival" href="/new-arrivals" />
          <ProductGrid products={newArrivals} />
        </Container>
      </section>

      {/* Headline band */}
      <section className="py-12 md:py-18">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
              <div>FRESH DROPS</div>
              <div>MADE FOR MODERN LIVING.</div>
            </h1>
          </div>
        </Container>
      </section>

      {/* Editorial Mosaic */}
      <section className="py-12 md:py-18">
        <Container>
          <EditorialMosaic />
        </Container>
      </section>

      {/* Promo Split */}
      <section className="py-12 md:py-18">
        <Container>
          <PromoSplit />
        </Container>
      </section>

      {/* WEARORA in everyday */}
      <section className="py-12 md:py-18">
        <Container>
          <SectionHeading title="WEARORA in everyday" href="/everyday" />
          <ProductGrid products={everyday} />
        </Container>
      </section>

      {/* Two Feature Tees */}
      <section className="py-12 md:py-18">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/tee-1.jpeg"
                alt="Featured Tee 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6">
                <div className="text-white text-xs font-medium tracking-wide opacity-80">WEARORA</div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/tee-2.jpeg"
                alt="Featured Tee 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6">
                <div className="text-white text-xs font-medium tracking-wide opacity-80">WEARORA</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Benefits */}
      <section className="py-12 md:py-18">
        <Container>
          <Benefits />
        </Container>
      </section>

      
    </>
  )
}