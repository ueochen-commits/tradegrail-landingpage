import React from 'react';
import { motion } from 'motion/react';

export const Cube3D = ({ size = 40 }: { size?: number }) => {
  const faceSize = size;
  const halfSize = size / 2;

  return (
    <div 
      className="relative" 
      style={{ 
        width: size, 
        height: size, 
        perspective: '400px' 
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-emerald-500 border border-emerald-400 flex items-center justify-center"
          style={{ transform: `translateZ(${halfSize}px)` }}
        >
          {/* Face */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
            </div>
            <div className="w-3 h-1.5 rounded-b-full bg-white shadow-[0_0_8px_white]" />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-emerald-600 border border-emerald-500"
          style={{ transform: `rotateY(180deg) translateZ(${halfSize}px)` }}
        />

        {/* Left */}
        <div
          className="absolute inset-0 bg-emerald-500 border border-emerald-400"
          style={{ transform: `rotateY(-90deg) translateZ(${halfSize}px)` }}
        />

        {/* Right */}
        <div
          className="absolute inset-0 bg-emerald-500 border border-emerald-400"
          style={{ transform: `rotateY(90deg) translateZ(${halfSize}px)` }}
        />

        {/* Top */}
        <div
          className="absolute inset-0 bg-emerald-400 border border-emerald-300"
          style={{ transform: `rotateX(90deg) translateZ(${halfSize}px)` }}
        />

        {/* Bottom */}
        <div
          className="absolute inset-0 bg-emerald-700 border border-emerald-600"
          style={{ transform: `rotateX(-90deg) translateZ(${halfSize}px)` }}
        />
      </motion.div>
    </div>
  );
};
