
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  imageSrc?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  location, 
  rating,
  imageSrc,
  delay = 0 
}) => {
  return (
    <div 
      className="glass-card p-8 hover-glow scroll-trigger"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "text-desert-500 fill-desert-500" : "text-gray-300"}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="mb-6">
        <p className="text-foreground/90 italic">{quote}</p>
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center">
        {imageSrc && (
          <div className="mr-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src={imageSrc} 
                alt={`${author} profile`} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        <div>
          <p className="font-medium text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
