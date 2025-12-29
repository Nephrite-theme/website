import FeaturesSection from "@/components/layout/FeaturesSection";
import FooterSection from "@/components/layout/Footer";
import GallerySection from "@/components/layout/GallerySection";
import HeroSection from "@/components/layout/HeroSection";
import PreviewSection from "@/components/layout/PreviewSection";
import RoadmapSection from "@/components/layout/RoadmapSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <PreviewSection />
      <FeaturesSection />
      <RoadmapSection />
      <GallerySection />
      <FooterSection />
    </>
  );
}
