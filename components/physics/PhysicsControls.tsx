'use client'


import React from 'react';
import { usePhysics } from './PhysicsProvider';

export const PhysicsControls: React.FC = () => {
    const { physicsActive, setPhysicsActive, setPhysicsMode, resetPhysics } = usePhysics();
    
    const triggerPhysics = (mode: 'antigravity' | 'earthquake' |  'vanDerWaals') => {
        if (physicsActive) return;

        setPhysicsMode(mode);
        setPhysicsActive(true);

        
    };
    const buttonBaseClass = `
    px-6 py-3 font-mono font-bold uppercase tracking-wider
    border-2 border-current rounded-none relative overflow-hidden
    transition-all duration-200 hover:shadow-[0_0_20px_currentColor]
    before:absolute before:inset-0 before:bg-current before:opacity-0
    hover:before:opacity-10 active:before:opacity-20
  `;

    return (
        <div className = 'flex flex-wrap gap-4 justify-center mb-8'>
            <button
            onClick = {() => triggerPhysics('antigravity')}
            disabled = {physicsActive}
            className={`
                ${buttonBaseClass}
                ${physicsActive 
                  ? 'bg-gray-400 text-gray-600' 
                  : 'bg-red-600 hover:bg-red-700 hover:shadow-xl'
                }
              `}
            >
              🌍 Decrease Gravity
            </button>
            
            <button
              onClick={() => triggerPhysics('earthquake')}
              disabled={physicsActive}
              className={`
                ${buttonBaseClass}
                ${physicsActive 
                  ? 'bg-gray-400 text-gray-600' 
                  : 'bg-yellow-600 hover:bg-yellow-700 hover:shadow-xl'
                }
              `}
            >
              🌪️ Earthquake
            </button>
            
            <button
              onClick={() => triggerPhysics('vanDerWaals')}
              disabled={physicsActive}
              className={`
                ${buttonBaseClass}
                ${physicsActive 
                  ? 'bg-gray-400 text-gray-600' 
                  : 'bg-purple-600 hover:bg-purple-700 hover:shadow-xl'
                }
              `}
            >
              ⚛️ Anti van der Waals
            </button>
            
            {physicsActive && (
              <button
                onClick={resetPhysics}
                className={`
                  ${buttonBaseClass}
                  bg-blue-600 hover:bg-blue-700 hover:shadow-xl
                `}
              >
                ↻ Reset
              </button>
            )}
          </div>
        );
      };
      