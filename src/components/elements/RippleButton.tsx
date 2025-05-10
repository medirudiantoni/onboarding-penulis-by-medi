import { useState, useRef, useEffect,type PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick?: VoidFunction;
  type?: 'primary' | 'success' | 'alert' | 'danger' | 'transparent' | 'outline' | 'outline-primary' | 'outline-success' | 'outline-alert' | 'outline-danger';
  className?: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  isLongPress: boolean;
}



export default function Button({ children, type = 'primary', onClick, className = '' }: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const longPressTimeoutRef = useRef<number | null>(null);
  const rippleIdCounter = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;
    
    const buttonRect = button.getBoundingClientRect();
    
    let x: number, y: number;
    
    if ('touches' in e) {
      x = e.touches[0].clientX - buttonRect.left;
      y = e.touches[0].clientY - buttonRect.top;
    } else {
      x = e.clientX - buttonRect.left;
      y = e.clientY - buttonRect.top;
    }
    
    const size = Math.max(
      Math.hypot(x, y), 
      Math.hypot(buttonRect.width - x, y),
      Math.hypot(x, buttonRect.height - y),
      Math.hypot(buttonRect.width - x, buttonRect.height - y)
    ) * 2;
    
    const newRipple: Ripple = {
      id: rippleIdCounter.current++,
      x,
      y,
      size,
      isLongPress: false
    };
    
    setRipples([...ripples, newRipple]);
    
    longPressTimeoutRef.current = window.setTimeout(() => {
      setRipples(prev => {
        return prev.map(ripple => {
          if (ripple.id === newRipple.id) {
            return { ...ripple, isLongPress: true };
          }
          return ripple;
        });
      });
    }, 300);
  };

  const handleMouseUp = () => {
    if (longPressTimeoutRef.current !== null) {
      window.clearTimeout(longPressTimeoutRef.current);
      longPressTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (ripples.length > 0) {
      const timerId = window.setTimeout(() => {
        setRipples([]);
      }, 1500);

      return () => window.clearTimeout(timerId);
    }
  }, [ripples]);

  const combineClassNames = (baseStyles: string, additionalStyles: string): string => {
    return `${baseStyles} ${additionalStyles}`.trim();
  };

  const getBaseClassNames = (buttonType: string): string => {
    switch (buttonType) {
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-700 text-white active:bg-blue-800 active:scale-95';
      case 'success':
        return 'bg-green-600 hover:bg-green-700 text-white active:bg-green-800 active:scale-95';
      case 'alert':
        return 'bg-orange-600 hover:bg-orange-700 text-white active:bg-orange-800 active:scale-95';
      case 'danger':
        return 'bg-red-600 hover:bg-red-700 text-white active:bg-red-800 active:scale-95';
      case 'outline-primary':
        return 'bg-blue-100 text-blue-900 hover:bg-blue-600 hover:text-white active:bg-blue-700 active:scale-95';
      case 'outline-success':
        return 'bg-green-100 text-green-900 hover:bg-green-600 hover:text-white active:bg-green-700 active:scale-95';
      case 'outline-alert':
        return 'bg-orange-100 text-orange-900 hover:bg-orange-600 hover:text-white active:bg-orange-700 active:scale-95';
      case 'outline-danger':
        return 'bg-red-100 text-red-900 hover:bg-red-600 hover:text-white active:bg-red-700 active:scale-95';
      case 'transparent':
        return 'bg-transparent text-inherit hover:bg-opacity-5 active:bg-opacity-10 active:scale-95';
      case 'outline':
        return 'bg-transparent border border-inherit text-inherit hover:bg-opacity-5 active:bg-opacity-10 active:scale-95';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white active:bg-blue-800 active:scale-95';
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchCancel={handleMouseUp}
      className={combineClassNames(
        'pt-[6px] pb-[6px] px-4 outline-0 cursor-pointer flex gap-2 items-center rounded-lg relative overflow-hidden transition-transform duration-100',
        combineClassNames(getBaseClassNames(type), className)
      )}
    >
      {children}
      
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className={ripple.isLongPress ? 'ripple-long' : 'ripple'}
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      
      {/* Add ripple animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
          }
          
          .ripple-long {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple-animation 1.5s linear;
            pointer-events: none;
          }
          
          @keyframes ripple-animation {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }
        `
      }} />
    </button>
  );
}