import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'auto',
  },
  textOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    pointerEvents: 'none',
    color: 'transparent', // Le texte sera rendu par les particules
  }
}));

export const ParticleText = ({ text, className }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const classes = useStyles();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let particleArray = [];
    let animationId;
    
    // Mouse tracking
    const mouse = {
      x: null,
      y: null,
      radius: 150
    };

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      setDimensions({ width: rect.width, height: rect.height });
      return { width: rect.width, height: rect.height };
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.random = Math.random();
      }

      draw() {
        ctx.fillStyle = 'rgba(250, 250, 250, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if (mouse.x == null || mouse.y == null) {
          // Return to base position when mouse is not present
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
          return;
        }

        // Mouse interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;

        if (force < 0) force = 0;

        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius + this.size) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    const init = () => {
      const { width, height } = updateCanvasSize();
      particleArray = [];

      // Create text
      ctx.clearRect(0, 0, width, height);
      ctx.font = `bold ${Math.min(width / 12, 80)}px "Inter", -apple-system, BlinkMacSystemFont, sans-serif`;
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Dessiner "EGGON TECHNOLOGY" sur deux lignes
      const fontSize = Math.min(width / 12, 80);
      const lineHeight = fontSize * 1.2;
      const startY = height / 2 - lineHeight / 2;
      
      ctx.fillText('EGGON', width / 2, startY);
      ctx.fillText('TECHNOLOGY', width / 2, startY + lineHeight);

      // Get image data
      const data = ctx.getImageData(0, 0, width, height);
      
      // Create particles from text pixels
      for (let y = 0; y < data.height; y += 3) {
        for (let x = 0; x < data.width; x += 3) {
          if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
            particleArray.push(new Particle(x, y));
          }
        }
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x))
            + ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));
          
          if (distance < 2600) {
            opacityValue = 1 - (distance / 2600);
            
            if (mouse.x !== null && mouse.y !== null) {
              let dx = mouse.x - particleArray[a].x;
              let dy = mouse.y - particleArray[a].y;
              let mouseDistance = Math.sqrt(dx * dx + dy * dy);
              
              if (mouseDistance < mouse.radius / 2) {
                ctx.strokeStyle = `rgba(252, 233, 107, ${opacityValue})`;
              } else if (mouseDistance < mouse.radius - 50) {
                ctx.strokeStyle = `rgba(255, 255, 140, ${opacityValue})`;
              } else if (mouseDistance < mouse.radius + 20) {
                ctx.strokeStyle = `rgba(255, 255, 210, ${opacityValue})`;
              } else {
                ctx.strokeStyle = `rgba(250, 250, 250, ${opacityValue})`;
              }
            } else {
              ctx.strokeStyle = `rgba(250, 250, 250, ${opacityValue * 0.3})`;
            }
            
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      connect();
      
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', () => {
      init();
    });

    // Initialize
    init();
    animate();

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', init);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [text]);

  return (
    <div ref={containerRef} className={`${classes.container} ${className || ''}`}>
      <canvas ref={canvasRef} className={classes.canvas} />
    </div>
  );
};