import React, { useState, useEffect, useRef } from 'react';
import './CreativeElements.css';

// Professional Loading Component
export const ProfessionalLoader = ({ isLoading = true, text = 'Loading...' }) => {
  if (!isLoading) return null;

  return (
    <div className="professional-loader">
      <div className="loader-container">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-text">{text}</div>
      </div>
    </div>
  );
};

// Professional Modal Component
export const ProfessionalModal = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="professional-modal-overlay" onClick={onClose}>
      <div className="professional-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

// Professional Particle System
export const ProfessionalParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 30; // Reduced for better performance

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="professional-particle-canvas" />;
};

// Professional Interactive Card
export const ProfessionalCard = ({ children, className = '', variant = 'default' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`professional-interactive-card ${variant} ${className} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        {children}
      </div>
      <div className="card-shine"></div>
      <div className="card-border"></div>
    </div>
  );
};

// Professional Animated Button
export const ProfessionalAnimatedButton = ({ children, onClick, className = '', variant = 'primary', disabled = false }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    if (disabled) return;
    
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    
    if (onClick) onClick(e);
  };

  return (
    <button 
      className={`professional-animated-btn ${variant} ${className} ${isClicked ? 'clicked' : ''} ${disabled ? 'disabled' : ''}`} 
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="btn-text">{children}</span>
      <div className="btn-background"></div>
      <div className="btn-border"></div>
    </button>
  );
};

// Professional Background Elements
export const ProfessionalBackgroundElements = () => {
  return (
    <div className="professional-bg-elements">
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>
      <div className="bg-circle circle-3"></div>
      <div className="bg-gradient gradient-1"></div>
      <div className="bg-gradient gradient-2"></div>
    </div>
  );
};

// Professional Section Divider
export const ProfessionalDivider = ({ variant = 'wave', className = '' }) => {
  if (variant === 'wave') {
    return (
      <div className={`professional-divider wave-divider ${className}`}>
        <svg className="divider-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".3" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".6" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    );
  }
  
  return (
    <div className={`professional-divider gradient-divider ${className}`}>
      <div className="gradient-line"></div>
    </div>
  );
};

// Professional Text Animation
export const ProfessionalTextReveal = ({ text, className = '', animationType = 'fade' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (animationType === 'typewriter') {
    return (
      <div ref={ref} className={`professional-text-reveal typewriter ${className} ${isVisible ? 'visible' : ''}`}>
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className="char" 
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={`professional-text-reveal fade-in ${className} ${isVisible ? 'visible' : ''}`}>
      {text.split(' ').map((word, index) => (
        <span 
          key={index} 
          className="word" 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {word}\u00A0
        </span>
      ))}
    </div>
  );
};

// Export updated components
export { ProfessionalBackgroundElements as FloatingElements };

export const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(249, 115, 22, 0.3)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export const MorphingCard = ({ children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`morphing-card ${className} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="morphing-content">
        {children}
      </div>
      <div className="morphing-overlay"></div>
    </div>
  );
};

export const GlowingButton = ({ children, onClick, className = '' }) => {
  return (
    <button className={`glowing-btn ${className}`} onClick={onClick}>
      <span className="btn-text">{children}</span>
      <div className="btn-glow"></div>
    </button>
  );
};

export const WaveAnimation = () => {
  return (
    <div className="wave-container">
      <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
      </svg>
    </div>
  );
};

export const TextReveal = ({ text, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`text-reveal ${className} ${isVisible ? 'visible' : ''}`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="char" 
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};