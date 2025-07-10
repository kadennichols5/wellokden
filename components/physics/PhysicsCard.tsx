'use client';

import React, { useEffect, useRef , useState } from 'react';
import { usePhysics } from './PhysicsProvider';


interface PhysicsCardProps {
    children: React.ReactNode;
    index: number;
    className ?: string
}

export const PhysicsCard: React.FC<PhysicsCardProps> = ({
    children,
    index,
    className = '',
}) => {
    const { physicsActive, physicsMode} = usePhysics();
    const cardRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [rotation, setRotation] = useState(0);
    const [velocity, setVelocity] = useState({x: 0, y: 0, rotation: 0});
    //const [acceleration, setAcceleration] = useState({x: 0, y: 0});
    const animationRef = useRef<number>(0);
    const originalPositionRef = useRef<{x: number, y: number}>({ x: 0, y: 0});

    // store original position when component mounts



    useEffect(() => {
        if (cardRef.current && !physicsActive) {
          const rect = cardRef.current.getBoundingClientRect();
          const containerRect = cardRef.current.closest('[data-physics-container]')?.getBoundingClientRect();
          
          if (containerRect) {
            originalPositionRef.current = {
              x: rect.left - containerRect.left,
              y: rect.top - containerRect.top
            };
          }
        }
      }, [physicsActive]);


    useEffect(() => {
        if (!physicsActive) {
            // reset to original position
            setPosition({x:0, y:0});
            setRotation(0);
            setVelocity({ x: 0, y: 0, rotation: 0});

            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            return;
         
    } //initialise physics based on mode
        if (physicsMode === 'antigravity') {
            setVelocity({
            x: (Math.random() - 0.5) * 2,
            y: 0,
            rotation: (Math.random() - 0.5) * 4
            });
        } else if (physicsMode === 'earthquake') {
            setVelocity({
            x: (Math.random() - 0.5) * 8,
            y: (Math.random() - 0.5) * 8,
            rotation: (Math.random() - 0.5) * 12
            });
        } else if (physicsMode === 'vanDerWaals') {
            // Repulsion effect - different for each card
            const angle = (index / 6) * Math.PI * 2; // Spread cards in circle
            setVelocity({
            x: Math.cos(angle) * 6,
            y: Math.sin(angle) * 6,
            rotation: (Math.random() - 0.5) * 8
            });
        }
        
    
}