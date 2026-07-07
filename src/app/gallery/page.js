import GalleryPage from "@/components/gallery/GalleryPage";
import SupportCTA from "@/components/layout/SupportCTA";
import VideoDemoSection from "@/components/product/VideoDemoSection";


export default function Gallery_Page() {
  return (
    <main>
      <GalleryPage/>
      <VideoDemoSection/>
      <SupportCTA/>
    </main>
  );
}