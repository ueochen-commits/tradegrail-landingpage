import React from 'react';
import { motion } from 'motion/react';

interface CandlestickProps {
  delay?: number;
  x?: number;
  y?: number | string;
  height?: number;
  isUp?: boolean;
}

const Candlestick: React.FC<CandlestickProps> = ({ delay = 0, y = 0, height = 40, isUp = true }) => (
  <motion.div
    initial={{ opacity: 0, x: '10vw' }}
    animate={{ 
      opacity: [0, 0.3, 0.3, 0],
      x: '-110vw',
    }}
    transition={{ 
      duration: 25, 
      repeat: Infinity, 
      delay, 
      ease: "linear" 
    }}
    className="absolute pointer-events-none"
    style={{ top: y, left: '100%' }}
  >
    <div className="flex flex-col items-center">
      <div className={`w-[1px] h-6 ${isUp ? 'bg-emerald-500/40' : 'bg-red-500/40'}`} />
      <div className={`w-4 rounded-sm ${isUp ? 'bg-emerald-500/30 border border-emerald-500/40' : 'bg-red-500/30 border border-red-500/40'}`} style={{ height }} />
      <div className={`w-[1px] h-6 ${isUp ? 'bg-emerald-500/40' : 'bg-red-500/40'}`} />
    </div>
  </motion.div>
);

interface DataRowProps {
  delay?: number;
  xOffset?: string;
}

const DataRow: React.FC<DataRowProps> = ({ delay = 0, xOffset = '10%' }) => (
  <motion.div
    initial={{ opacity: 0, y: '10vh' }}
    animate={{ 
      opacity: [0, 0.15, 0.15, 0],
      y: '-110vh',
    }}
    transition={{ 
      duration: 20, 
      repeat: Infinity, 
      delay, 
      ease: "linear" 
    }}
    className="absolute w-64 flex items-center justify-between border-b border-current py-4 pointer-events-none opacity-10"
    style={{ top: '100%', left: xOffset }}
  >
    <div className="flex gap-3">
      <div className="w-10 h-1.5 bg-current rounded opacity-40" />
      <div className="w-20 h-1.5 bg-current rounded opacity-20" />
    </div>
    <div className="flex gap-3">
      <div className="w-12 h-1.5 bg-brand-primary/40 rounded" />
    </div>
  </motion.div>
);

export const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none text-[var(--text-main)]">
      {/* Grid Lines - adaptive color */}
      <div className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      {/* Candlestick Patterns */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <Candlestick 
            key={`candle-${i}`}
            delay={i * 2}
            y={`${15 + (i * 7) % 70}%`}
            height={30 + (i * 12) % 60}
            isUp={i % 3 !== 0}
          />
        ))}
      </div>

      {/* Scrolling Data Columns */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <DataRow 
            key={`row-left-${i}`}
            delay={i * 4}
            xOffset={`${5 + i * 15}%`}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <DataRow 
            key={`row-right-${i}`}
            delay={i * 4 + 2}
            xOffset={`${10 + i * 15}%`}
          />
        ))}
      </div>
      
      {/* Radial Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-primary/[0.03] to-transparent" />
    </div>
  );
};
