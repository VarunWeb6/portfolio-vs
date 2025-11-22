import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Scroll3DEffect = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);

    // Create a geometric shape - Icosahedron
    const geometry = new THREE.IcosahedronGeometry(1.5, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x1e40af,
      emissiveIntensity: 0.3,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add lights for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 1.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 1.2);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 5, 5);
    scene.add(directionalLight);

    // Store refs
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    meshRef.current = mesh;

    // GSAP ScrollTrigger animation - ensure it persists
    let scrollAnimation;
    
    // Wait a bit for DOM to be ready
    setTimeout(() => {
      scrollAnimation = gsap.to(mesh.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        z: Math.PI * 2,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          refreshPriority: -1, // Lower priority to avoid conflicts
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Rotate based on scroll
            mesh.rotation.x = progress * Math.PI * 2;
            mesh.rotation.y = progress * Math.PI * 2;
            
            // Move up/down based on scroll
            mesh.position.y = progress * 4 - 2;
            
            // Scale based on scroll (pulsing effect)
            const scale = 1 + Math.sin(progress * Math.PI * 2) * 0.4;
            mesh.scale.set(scale, scale, scale);
            
            // Change color intensity based on scroll
            const colorIntensity = 0.3 + progress * 0.5;
            material.emissiveIntensity = colorIntensity;
          }
        }
      });
    }, 100);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      // Continuous subtle rotation on Z axis
      if (mesh) {
        mesh.rotation.z += 0.002;
      }

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup - only on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // Keep ScrollTrigger alive - don't kill it
      // Only cleanup renderer on actual component unmount
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]"
      style={{ 
        mixBlendMode: "screen",
        opacity: 0.7,
        willChange: "transform"
      }}
    />
  );
};

export default Scroll3DEffect;
