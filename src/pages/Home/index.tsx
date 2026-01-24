// src/pages/Home/HomePage.tsx
import FullBleed from '@/components/common/FullBleed';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';

import HeroBanner from './sections/HeroBanner';
import FeatureGrid from './sections/FeatureGrid';
import CategoryStrip from './sections/CategoryStrip';
import ProductSection from './sections/ProductSection';

import BigSaleBanner from './sections/BigSaleBanner';
import CTABanner from './sections/CTABanner';
import PromoTilesSection from './sections/PromoTilesSection';

export default function HomePage() {
  return (
    <>
      <FullBleed className="bg-[#211C24]">
        <HeroBanner />
      </FullBleed>

      <FullBleed>
        <FeatureGrid />
      </FullBleed>

      <Section>
        <Container>
          <CategoryStrip />
          <ProductSection />
        </Container>
      </Section>

      <FullBleed>
        <PromoTilesSection />
      </FullBleed>
      <FullBleed>
        <CTABanner />
      </FullBleed>
      <FullBleed className="bg-[#121212]">
        <BigSaleBanner />
      </FullBleed>
    </>
  );
}
