
import React from 'react';

export const Network = ({ className = "", size = 24, animated = false, ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="1.5" className={animated ? "animate-pulse" : ""} />
      <circle cx="5" cy="5" r="1" className={animated ? "animate-pulse" : ""} style={animated ? {animationDelay: "0.1s"} : {}} />
      <circle cx="19" cy="5" r="1" className={animated ? "animate-pulse" : ""} style={animated ? {animationDelay: "0.2s"} : {}} />
      <circle cx="5" cy="19" r="1" className={animated ? "animate-pulse" : ""} style={animated ? {animationDelay: "0.3s"} : {}} />
      <circle cx="19" cy="19" r="1" className={animated ? "animate-pulse" : ""} style={animated ? {animationDelay: "0.4s"} : {}} />
      
      {/* Lines with animation if enabled */}
      <line 
        x1="12" y1="11" x2="5" y2="5" 
        className={animated ? "opacity-70 animate-[pulse_2s_ease-in-out_infinite]" : ""} 
        style={animated ? {animationDelay: "0.1s"} : {}}
      />
      <line 
        x1="12" y1="11" x2="19" y2="5" 
        className={animated ? "opacity-70 animate-[pulse_2s_ease-in-out_infinite]" : ""} 
        style={animated ? {animationDelay: "0.2s"} : {}}
      />
      <line 
        x1="12" y1="13" x2="5" y2="19" 
        className={animated ? "opacity-70 animate-[pulse_2s_ease-in-out_infinite]" : ""} 
        style={animated ? {animationDelay: "0.3s"} : {}}
      />
      <line 
        x1="12" y1="13" x2="19" y2="19" 
        className={animated ? "opacity-70 animate-[pulse_2s_ease-in-out_infinite]" : ""} 
        style={animated ? {animationDelay: "0.4s"} : {}}
      />
      
      {/* Additional connection points for more network-like appearance */}
      {animated && (
        <>
          <circle cx="8" cy="12" r="0.5" className="animate-[pulse_3s_ease-in-out_infinite]" style={{animationDelay: "0.5s"}} />
          <circle cx="16" cy="12" r="0.5" className="animate-[pulse_3s_ease-in-out_infinite]" style={{animationDelay: "0.6s"}} />
          <circle cx="12" cy="8" r="0.5" className="animate-[pulse_3s_ease-in-out_infinite]" style={{animationDelay: "0.7s"}} />
          <circle cx="12" cy="16" r="0.5" className="animate-[pulse_3s_ease-in-out_infinite]" style={{animationDelay: "0.8s"}} />
          
          <line x1="12" y1="12" x2="8" y2="12" className="opacity-50 animate-[pulse_3s_ease-in-out_infinite]" style={{animationDelay: "0.5s"}} />
          <line x1="12" y1="12" x2="16" y2="12" className="opacity-50 animate-[pulse_3s_ease-in-out_infinite]" style={{animationDelay: "0.6s"}} />
          <line x1="12" y1="12" x2="12" y2="8" className="opacity-50 animate-[pulse_3s_ease-in-out_infinite]" style={{animationDelay: "0.7s"}} />
          <line x1="12" y1="12" x2="12" y2="16" className="opacity-50 animate-[pulse_3s_ease-in-out_infinite]" style={{animationDelay: "0.8s"}} />
        </>
      )}
    </svg>
  );
};
