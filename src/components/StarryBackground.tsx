import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars: { x: number; y: number; size: number; speed: number }[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStar = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5,
      };
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < 100; i++) {
        stars.push(createStar());
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 25, 47, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y = (star.y + star.speed) % canvas.height;
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initStars();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initStars();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default StarryBackground;