import fs from 'fs';
import path from 'path';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Workshop from '@/components/Workshop';
import Footer from '@/components/Footer';

async function getImagesManifest() {
  const manifestPath = path.join(process.cwd(), 'public/images-manifest.json');
  if (fs.existsSync(manifestPath)) {
    const data = fs.readFileSync(manifestPath, 'utf-8');
    return JSON.parse(data);
  }
  return {};
}

export default async function Home() {
  const manifest = await getImagesManifest();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <About />
      <Gallery manifest={manifest} />
      <Workshop />
      <Footer />
    </main>
  );
}
