import React from 'react';

// This is the functional React interpretation of the requested Cinematic OG Generator.
// In a Next.js environment, this structure would be returned by `ImageResponse` in `opengraph-image.tsx`.
// For our client-side environment, this serves as the foundational architectural template.

interface OGImageProps {
  title: string;
  author: string;
  role: string;
}

export function OpengraphImageTemplate({ title, author, role }: OGImageProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '1200px',
        height: '630px',
        backgroundColor: '#050505', // Deep premium pitch black
        color: '#ffffff',
        padding: '80px 100px',
        fontFamily: 'serif', // Simulating the global presentation
        borderBottom: '16px solid #ffcc00', // cmf-gold bottom border
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background glow simulation */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '-100px', 
          right: '-100px', 
          width: '600px', 
          height: '600px', 
          background: 'rgba(255, 204, 0, 0.05)', 
          filter: 'blur(100px)',
          borderRadius: '50%'
        }} 
      />

      <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
        {/* Branding header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#ffcc00', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '24px', fontWeight: 'bold', fontFamily: 'monospace' }}>
            Creative Minds' Forum
          </span>
          <span style={{ color: '#555', margin: '0 20px', fontSize: '24px' }}>|</span>
          <span style={{ color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '20px', fontWeight: 'normal', fontFamily: 'monospace' }}>
            Thought-Leadership
          </span>
        </div>

        {/* Dynamic Typography Title */}
        <h1 
          style={{ 
            fontSize: '84px', 
            fontWeight: 900, 
            lineHeight: 1.1, 
            marginBottom: '60px', 
            maxWidth: '1000px',
            textShadow: '0 10px 20px rgba(0,0,0,0.5)'
          }}
        >
          {title}
        </h1>

        {/* Global Pipeline Author Signoff */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '36px', fontWeight: 'bold' }}>{author}</span>
          <span style={{ color: '#ffcc00', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '20px', fontWeight: 'bold', marginTop: '10px', fontFamily: 'monospace' }}>
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
