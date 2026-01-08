// src/pages/Home/HomePage.tsx
import FullBleed from '@/components/common/FullBleed';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';

import HeroBanner from './sections/HeroBanner';
import FeatureGrid from './sections/FeatureGrid';
import CategoryStrip from './sections/CategoryStrip';
import ProductSection from './sections/ProductSection';
import PromoTiles from './sections/PromoTiles';
import BigSaleBanner from './sections/BigSaleBanner';

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

      <Section>
        <Container>
          <PromoTiles />
        </Container>
      </Section>

      <FullBleed className="bg-[#121212]">
        <BigSaleBanner />
      </FullBleed>
    </>
  );
}
