import React, { useEffect, useState } from "react";
import "./StarryBackground.css";

const StarryBackground = ({ starCount = 100 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: starCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 12 + 10,
      opacity: Math.random() * 0.35 + 0.15,
    }));

    setStars(newStars);
  }, [starCount]);

  return (
    <div className="starry-background" aria-hidden="true">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.speed}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
