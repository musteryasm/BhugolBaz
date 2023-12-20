import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg"
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg"
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg"
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg"
import { MeshPhongMaterial, TextureLoader } from 'three';
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";


export function InnerEarth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.set(0, elapsedTime / 6, 0);
    cloudsRef.current.rotation.set(0, elapsedTime / 6, 0);
    camera.position.set(0, 0, 2);
  });

  return (
    <>
      <ambientLight intensity={2} />
      <pointLight color="#f6f3ea" position={[0, 0, 5]} intensity={1.2} />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
      <mesh ref={cloudsRef} position={[0, 0, 2]} scale={[1.005, 1.005, 1.005]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 2]} scale={[1, 1, 1]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap}
          metalness={0.4}
          roughness={0.7} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
