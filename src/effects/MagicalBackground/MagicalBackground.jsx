import React, { useEffect, useRef } from 'react';
import './MagicalBackground.css';

const MagicalBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * height; // initial random y
      }
      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = -(Math.random() * 0.5 + 0.2);
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // slight drift
        this.speedX += (Math.random() - 0.5) * 0.01;
        
        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`; // Gold sparks
        ctx.fill();
      }
    }

    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }

    let animationFrameId;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="magical-background">
      <div className="magical-overlay"></div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default MagicalBackground;
