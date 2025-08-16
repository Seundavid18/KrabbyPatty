import React from 'react';
import burgerImg from '../images/clipart297757.png';
import chipsImg from '../images/clipart845852.png';

const FoodScatter = ({ count = 12 }) => {
  // Generate random positions, sizes, and rotations
  const items = Array(count).fill().map((_, i) => {
    const isBurger = Math.random() > 0.3; // 70% burgers, 30% chips
    return {
      type: isBurger ? 'burger' : 'chips',
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: isBurger 
        ? `${Math.random() * 40 + 70}px`  // Burgers: 70-110px
        : `${Math.random() * 30 + 50}px`, // Chips: 50-80px
      rotate: `${Math.random() * 60 - 30}deg`, // -30° to +30°
      opacity: `${Math.random() * 0.15 + 0.2}` // 20-35% opacity
    };
  });

  return (
    <>
      {items.map((item, i) => (
        <img
          key={i}
          src={item.type === 'burger' ? burgerImg : chipsImg}
          alt=""
          style={{
            position: 'fixed',
            left: item.x,
            top: item.y,
            width: item.size,
            opacity: item.opacity,
            zIndex: 0,
            pointerEvents: 'none',
            transform: `rotate(${item.rotate})`,
            filter: 'drop-shadow(0 0 3px rgba(255,165,0,0.3))' // Golden glow
          }}
        />
      ))}
    </>
  );
};

export default FoodScatter;