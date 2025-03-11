
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')",
          filter: "brightness(0.3)"
        }}
      ></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-nature-500/20 text-nature-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <CalendarCheck size={16} className="mr-2" />
            Same-Week Appointments Available
          </div>
          
          <h2 className="text-white text-4xl md:text-5xl font-display mb-6">Ready to enhance your property's natural beauty?</h2>
          
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Our certified arborists are just a call away. Get expert advice and a free, no-obligation quote for your tree care needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary py-3 px-8 text-lg bg-nature-600 hover:bg-nature-700">
              Schedule a Consultation
            </Link>
            <a href="tel:+17025551234" className="btn-outline py-3 px-8 text-lg border-white text-white hover:bg-white/10">
              Call (702) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
