/*
global physics state
*/

'use client';

import React, { createContext, useContext, useState, useRef } from 'react';

export type PhysicsMode = 'antigravity' | 'earthquake' |  'vanDerWaals' | null;

interface PhysicsContextType {
  physicsActive: boolean;
  setPhysicsActive: (active: boolean) => void;
  physicsMode: PhysicsMode;
  setPhysicsMode: (mode: PhysicsMode) => void;
  resetPhysics: () => void;
  engineRef: React.RefObject<any>;
}

const PhysicsContext = createContext<PhysicsContextType | null>(null);

export const PhysicsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [physicsActive, setPhysicsActive] = useState(false);
  const [physicsMode, setPhysicsMode] = useState<PhysicsMode>(null);
  const engineRef = useRef<any>(null);

  const resetPhysics = () => {
    setPhysicsActive(false);
    setPhysicsMode(null);
    // Additional reset logic will be added when we integrate Matter.js
  };

  return (
    <PhysicsContext.Provider value={{
      physicsActive,
      setPhysicsActive,
      physicsMode,
      setPhysicsMode,
      resetPhysics,
      engineRef
    }}>
      {children}
    </PhysicsContext.Provider>
  );
};

export const usePhysics = () => {
  const context = useContext(PhysicsContext);
  if (!context) {
    throw new Error('usePhysics must be used within PhysicsProvider');
  }
  return context;
};
