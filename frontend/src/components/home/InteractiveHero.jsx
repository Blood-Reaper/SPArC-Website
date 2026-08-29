import React, { useEffect, useRef } from 'react';
import './InteractiveHero.css';

export default function InteractiveHero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  
  const maskPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const maskSize = useRef(0);
  const targetMaskSize = useRef(0);
  const requestRef = useRef();

  useEffect(() => {
    // Initialize target position to center initially
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      maskPosition.current = { x: rect.width / 2, y: rect.height / 2 };
      targetPosition.current = { x: rect.width / 2, y: rect.height / 2 };
    }

    const animate = () => {
      // Lerp for smooth position following (inertia)
      maskPosition.current.x += (targetPosition.current.x - maskPosition.current.x) * 0.1;
      maskPosition.current.y += (targetPosition.current.y - maskPosition.current.y) * 0.1;
      
      // Lerp for smooth size transition (grow/shrink)
      maskSize.current += (targetMaskSize.current - maskSize.current) * 0.1;
      
      if (containerRef.current) {
        containerRef.current.style.setProperty('--mask-x', `${maskPosition.current.x}px`);
        containerRef.current.style.setProperty('--mask-y', `${maskPosition.current.y}px`);
        containerRef.current.style.setProperty('--mask-size', `${maskSize.current}px`);
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetPosition.current.x = e.clientX - rect.left;
    targetPosition.current.y = e.clientY - rect.top;
  };

  const handlePointerEnter = () => {
    const isMobile = window.innerWidth < 768;
    targetMaskSize.current = isMobile ? 450 : 600; 
  };

  const handlePointerLeave = () => {
    targetMaskSize.current = 0;
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetPosition.current.x = e.touches[0].clientX - rect.left;
    targetPosition.current.y = e.touches[0].clientY - rect.top;
  };

  const handleTouchStart = (e) => {
    handlePointerEnter();
    handleTouchMove(e);
  };

  const handleTouchEnd = () => {
    handlePointerLeave();
  };

  return (
    <section 
      className="interactive-hero" 
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Base Layer: Static Image */}
      <div className="interactive-hero-layer interactive-hero-base">
        <img src="/static.png" alt="SPArC Interactive Background" />
      </div>

      {/* Reveal Layer: Animated Video */}
      <div className="interactive-hero-layer interactive-hero-reveal">
        <video 
          ref={videoRef}
          src="/animated.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
        />
      </div>
    </section>
  );
}
