import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const Icon = type === 'success' ? CheckCircle : AlertCircle;
  const bgColor = type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';

  return (
    <div className={`fixed top-6 right-6 p-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 ${bgColor} text-white min-w-80 max-w-md backdrop-blur-sm`}>
      <Icon size={20} />
      <span className="flex-1 font-medium">{message}</span>
      <button onClick={onClose} className="hover:bg-white/20 rounded-lg p-1 transition-colors">
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;
