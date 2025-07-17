'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import { useRef, Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';
import { fetchCategories } from '@/utils/api';

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

function AnimatedSphere({ categories }: { categories: Category[] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
    
    if (materialRef.current) {
      materialRef.current.emissive.setHSL(
        (state.clock.elapsedTime * 0.1) % 1,
        0.2,
        0.1
      );
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial 
            ref={materialRef}
            color="#ffffff"
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>
      
      {/* Floating category labels */}
      {categories.map((category, index) => {
        const angle = (index / categories.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <Float key={category._id} speed={1.5} rotationIntensity={0.2}>
            <Text
              position={[x, Math.sin(index) * 0.5, z]}
              fontSize={0.3}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {category.title}
            </Text>
          </Float>
        );
      })}
    </group>
  );
}

export default function SphereScene() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then(setCategories).catch(console.error);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
      
      <Suspense fallback={null}>
        <AnimatedSphere categories={categories} />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}