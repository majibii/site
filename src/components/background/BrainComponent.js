import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BrainComponent = ({ width = 800, height = 600, style = {} }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const brainRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create brain-like geometry
    const createBrainGeometry = () => {
      const group = new THREE.Group();
      
      // Main brain shape (ellipsoid)
      const brainGeometry = new THREE.SphereGeometry(1.5, 32, 16);
      brainGeometry.scale(1.2, 1, 1.1); // Make it more brain-like
      
      const brainMaterial = new THREE.MeshPhongMaterial({
        color: 0xff6b9d,
        transparent: true,
        opacity: 0.8,
        shininess: 100
      });
      
      const brainMesh = new THREE.Mesh(brainGeometry, brainMaterial);
      group.add(brainMesh);

      // Add brain surface details (smaller spheres)
      for (let i = 0; i < 50; i++) {
        const detailGeometry = new THREE.SphereGeometry(0.05, 8, 6);
        const detailMaterial = new THREE.MeshPhongMaterial({
          color: 0xff4081,
          transparent: true,
          opacity: 0.6
        });
        
        const detailMesh = new THREE.Mesh(detailGeometry, detailMaterial);
        
        // Random position on brain surface
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        const radius = 1.6;
        
        detailMesh.position.x = radius * Math.sin(theta) * Math.cos(phi);
        detailMesh.position.y = radius * Math.sin(theta) * Math.sin(phi);
        detailMesh.position.z = radius * Math.cos(theta);
        
        group.add(detailMesh);
      }

      // Add neural network lines
      const lineGeometry = new THREE.BufferGeometry();
      const linePoints = [];
      
      for (let i = 0; i < 100; i++) {
        const phi1 = Math.random() * Math.PI * 2;
        const theta1 = Math.random() * Math.PI;
        const phi2 = Math.random() * Math.PI * 2;
        const theta2 = Math.random() * Math.PI;
        const radius = 1.7;
        
        linePoints.push(
          radius * Math.sin(theta1) * Math.cos(phi1),
          radius * Math.sin(theta1) * Math.sin(phi1),
          radius * Math.cos(theta1),
          radius * Math.sin(theta2) * Math.cos(phi2),
          radius * Math.sin(theta2) * Math.sin(phi2),
          radius * Math.cos(theta2)
        );
      }
      
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
      
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.3
      });
      
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      group.add(lines);

      return group;
    };

    // Create and add brain to scene
    const brain = createBrainGeometry();
    scene.add(brain);
    brainRef.current = brain;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (brainRef.current) {
        brainRef.current.rotation.y += 0.005;
        brainRef.current.rotation.x += 0.002;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
      if (mountRef.current) {
        const newWidth = mountRef.current.clientWidth;
        const newHeight = mountRef.current.clientHeight;
        
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [width, height]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        ...style
      }}
    />
  );
};

export default BrainComponent;
