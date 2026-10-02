import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const ToastNotification: React.FC<ToastProps> = ({
  message,
  isOpen,
  onClose,
  duration = 3500,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#111622] border border-[#10b981]/40 text-slate-100 px-4 py-3 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-0"
      role="status"
      aria-live="polite"
    >
      <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white transition-colors p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
