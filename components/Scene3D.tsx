'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function Globe() {
  const groupRef = useRef<THREE.Group>(null)
  
  // Generate random points on sphere surface
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < 20; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const x = 2 * Math.sin(phi) * Math.cos(theta)
      const y = 2 * Math.sin(phi) * Math.sin(theta)
      const z = 2 * Math.cos(phi)
      pts.push({ x, y, z })
    }
    return pts
  }, [])
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })
  
  return (
    <group ref={groupRef}>
      {/* Wireframe globe */}
      <mesh>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial 
          color="#10b981" 
          wireframe 
          transparent 
          opacity={0.2}
        />
      </mesh>
      
      {/* Connection points */}
      {points.map((point, i) => (
        <mesh key={i} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>
      ))}
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Globe />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        enablePan={false}
      />
    </Canvas>
  )
}
