
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  imageUrl?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  imageUrl,
  delay = 0
}) => {
  return (
    <div 
      className="rounded-2xl overflow-hidden shadow-subtle hover-lift group scroll-trigger"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image (if provided) */}
      {imageUrl && (
        <div className="h-48 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 bg-white glass-card">
        <div className="w-12 h-12 rounded-full bg-nature-100 flex items-center justify-center text-nature-600 mb-4">
          {icon}
        </div>
        
        <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <Link 
          to={link}
          className="inline-flex items-center text-nature-600 font-medium hover:text-nature-700 transition-colors"
        >
          Learn more
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
