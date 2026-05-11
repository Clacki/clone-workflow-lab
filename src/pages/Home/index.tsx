// src/pages/Home/HomePage.tsx
import FullBleed from '@/components/common/FullBleed';
import Container from '@/components/common/Container';
import Section from '@/components/common/Section';

import HeroBanner from './sections/HeroBanner';
import FeatureGrid from './sections/FeatureGrid';
import CategoryStrip from './sections/CategoryStrip';
import ProductSection from './sections/ProductSection';
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

      <FullBleed className="bg-[#FAFAFA]">
        <Container>
          <CategoryStrip />
        </Container>
      </FullBleed>

      <Section>
        <Container>
          <ProductSection />
        </Container>
      </Section>

      <FullBleed>
        <PromoTilesSection />
      </FullBleed>

      <FullBleed>
        <CTABanner />
      </FullBleed>
    </>
  );
}
