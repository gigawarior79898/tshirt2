/*
  📦 fashion-platform-app
  Full-stack deployable fashion brand platform with animated 3D landing page using Next.js, Tailwind, Three.js, and Sanity CMS.
*/

'use client';
import SphereScene from '@/components/SphereScene';
import CategoryOverlay from '@/components/CategoryOverlay';
import LoadingScreen from '@/components/LoadingScreen';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <SphereScene />
      <CategoryOverlay />
    </main>
  );
}