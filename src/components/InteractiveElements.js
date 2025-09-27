import React, { useState, useEffect, useRef } from 'react';
import './InteractiveElements.css';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`scroll-to-top-professional ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <svg className="progress-ring" width="50" height="50">
        <circle
          className="progress-ring-circle"
          stroke="#667eea"
          strokeWidth="3"
          fill="transparent"
          r="20"
          cx="25"
          cy="25"
          style={{
            strokeDasharray: `${2 * Math.PI * 20}`,
            strokeDashoffset: `${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`
          }}
        />
      </svg>
      <div className="scroll-icon">↑</div>
    </div>
  );
};

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.pageYOffset;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentProgress / scrollHeight) * 100);
      }
      
      // Determine active section
      const sections = ['home', 'key-areas', 'important-dates', 'papers', 'registration', 'speakers', 'organizing-committee', 'venue'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="progress-container-professional">
      <div className="progress-bar-professional" style={{ width: `${scrollProgress}%` }}>
        <div className="progress-glow"></div>
      </div>
      <div className="section-indicator">{activeSection.replace('-', ' ').toUpperCase()}</div>
    </div>
  );
};

// Professional Button with Ripple Effect
export const ProfessionalButton = ({ children, onClick, className = '', variant = 'primary' }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now()
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    if (onClick) onClick(e);
  };

  return (
    <button 
      className={`professional-btn ${variant} ${className}`} 
      onClick={handleClick}
    >
      <span className="btn-content">{children}</span>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y
          }}
        />
      ))}
    </button>
  );
};

// Enhanced Scroll Animation Hook
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

// Staggered Animation Component
export const StaggeredAnimation = ({ children, className = '', delay = 100 }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`staggered-container ${className} ${isVisible ? 'animate' : ''}`}>
      {React.Children.map(children, (child, index) => (
        <div 
          className="stagger-item" 
          style={{ animationDelay: `${index * delay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

// Parallax Scroll Component
export const ParallaxElement = ({ children, speed = 0.5, className = '' }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref} 
      className={`parallax-element ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

// Professional Fade In Animation
export const FadeInSection = ({ children, direction = 'up', className = '' }) => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div 
      ref={ref} 
      className={`fade-in-section fade-${direction} ${className} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

// Professional Counter with Animation
export const ProfessionalCounter = ({ target, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollAnimation(0.5);

  useEffect(() => {
    if (isVisible && count === 0) {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration, count]);

  return (
    <div ref={ref} className="professional-counter">
      <span className="counter-value">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    </div>
  );
};

const InteractiveElements = () => {
  return (
    <div className="interactive-elements">
      <ScrollToTop />
      <ProgressBar />
    </div>
  );
};

export default InteractiveElements;