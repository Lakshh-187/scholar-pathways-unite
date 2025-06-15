
import React from 'react';
import { Shield, Star } from 'lucide-react';

interface AuthenticationStampProps {
  stampType: 'uniford' | 'uncif' | 'scholar';
  size?: 'small' | 'medium' | 'large';
  applied?: boolean;
}

const AuthenticationStamp: React.FC<AuthenticationStampProps> = ({ 
  stampType, 
  size = 'medium',
  applied = false 
}) => {
  const getStampData = () => {
    switch (stampType) {
      case 'uniford':
        return {
          name: 'UNIFORD FOUNDATION',
          code: 'U85500HR2024NPL120586',
          color: 'from-blue-600 to-blue-800'
        };
      case 'uncif':
        return {
          name: 'UNCIF',
          code: 'UNCIF-AUTH-2024',
          color: 'from-purple-600 to-purple-800'
        };
      case 'scholar':
        return {
          name: 'SCHOLAR DEPARTMENT',
          code: 'SCHOLAR-DEPT-VERIFIED',
          color: 'from-green-600 to-green-800'
        };
      default:
        return {
          name: 'UNIFORD FOUNDATION',
          code: 'U85500HR2024NPL120586',
          color: 'from-blue-600 to-blue-800'
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-16 h-16 text-[6px]';
      case 'medium':
        return 'w-24 h-24 text-[8px]';
      case 'large':
        return 'w-32 h-32 text-[10px]';
      default:
        return 'w-24 h-24 text-[8px]';
    }
  };

  const stampData = getStampData();
  const sizeClasses = getSizeClasses();

  if (!applied) {
    return (
      <div className={`${sizeClasses} border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center bg-gray-50`}>
        <div className="text-center text-gray-400">
          <Shield className="h-6 w-6 mx-auto mb-1" />
          <p className="text-xs">STAMP AREA</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses} relative`}>
      {/* Outer Circle with Authentication Border */}
      <div className={`w-full h-full rounded-full bg-gradient-to-br ${stampData.color} relative overflow-hidden border-4 border-double border-white shadow-lg`}>
        {/* Inner decorative border */}
        <div className="absolute inset-2 rounded-full border-2 border-white/50 border-dashed"></div>
        
        {/* Stamp Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
          {/* Top Star */}
          <Star className="h-3 w-3 mb-1 fill-yellow-300 text-yellow-300" />
          
          {/* Main Text */}
          <div className="text-center leading-tight">
            <div className="font-black tracking-wider mb-1">
              {stampData.name.split(' ').map((word, index) => (
                <div key={index} className="text-[7px]">{word}</div>
              ))}
            </div>
            
            {/* Authentication Code */}
            <div className="text-[5px] font-mono bg-white/20 px-1 rounded">
              {stampData.code}
            </div>
          </div>
          
          {/* Bottom Shield */}
          <Shield className="h-3 w-3 mt-1 fill-white" />
        </div>

        {/* Stamp Effect Overlay */}
        <div className="absolute inset-0 bg-black/10 rounded-full"></div>
        
        {/* Date stamp effect */}
        <div className="absolute bottom-1 right-1 text-[4px] text-white/80 font-mono">
          {new Date().toLocaleDateString('en-GB').replace(/\//g, '.')}
        </div>
      </div>
      
      {/* Drop shadow effect */}
      <div className="absolute inset-0 rounded-full bg-black/20 blur-sm -z-10 translate-x-1 translate-y-1"></div>
    </div>
  );
};

export default AuthenticationStamp;
