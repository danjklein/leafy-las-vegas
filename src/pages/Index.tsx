
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Scissors, Truck, Heart, Shield, Wind, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the scroll-trigger class
    document.querySelectorAll('.scroll-trigger').forEach(el => {
      observer.observe(el);
    });

    // Observe staggered children elements
    document.querySelectorAll('.stagger-children').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
            alt="Majestic trees in Las Vegas" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10 pt-20 pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-nature-400/20 px-4 py-1.5 text-sm font-medium text-nature-200 backdrop-blur-sm mb-6 animate-fade-in">
              <span className="mr-1">🌵</span> Trusted Tree Care in Las Vegas
            </div>
            
            <h1 className="text-white font-display mb-6 animate-slide-up">
              Expert Tree Care<br />for the Desert Climate
            </h1>
            
            <p className="text-gray-200 text-xl mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We provide specialized tree care services tailored to Las Vegas' unique desert environment. Our certified arborists help your trees thrive in even the harshest conditions.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link 
                to="/contact"
                className="btn-primary bg-nature-600 hover:bg-nature-700 text-white py-3 px-8 text-lg"
              >
                Get a Free Quote
              </Link>
              
              <Link 
                to="/services"
                className="btn-outline border-white text-white hover:bg-white/10 py-3 px-8 text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronRight size={30} className="text-white rotate-90" />
        </div>
      </section>
      
      {/* About Brief Section */}
      <section className="section bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                  alt="Professional arborist working on a tree" 
                  className="rounded-2xl shadow-accent w-full h-auto scroll-trigger"
                />
                <div className="absolute -bottom-6 -right-6 bg-nature-600 text-white p-4 rounded-xl shadow-lg scroll-trigger" style={{ transitionDelay: '300ms' }}>
                  <div className="flex items-center">
                    <Award size={40} className="mr-3" />
                    <div>
                      <p className="text-sm font-medium">ISA Certified</p>
                      <p className="text-xl font-bold">Since 2005</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="stagger-children">
              <div className="inline-flex items-center rounded-full bg-nature-100 px-4 py-1.5 text-sm font-medium text-nature-800 mb-4">
                About Desert Arbor
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display mb-6">We care for your trees, so they can care for you</h2>
              
              <p className="text-muted-foreground mb-6">
                Established in 2005, Desert Arbor has been providing exceptional tree care services to Las Vegas residents and businesses. We understand the unique challenges that desert trees face, and our certified arborists are equipped with the knowledge and tools to ensure your trees remain healthy and beautiful year-round.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-3 text-nature-600">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Fully Insured</h4>
                    <p className="text-sm text-muted-foreground">Licensed and insured for your peace of mind</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 text-nature-600">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Certified Arborists</h4>
                    <p className="text-sm text-muted-foreground">ISA certified tree care professionals</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/about"
                className="btn-primary bg-nature-600 hover:bg-nature-700"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
            <div className="inline-flex items-center rounded-full bg-nature-100 px-4 py-1.5 text-sm font-medium text-nature-800 mb-4">
              Our Services
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display mb-4">Professional Tree Care Services for Las Vegas</h2>
            
            <p className="text-muted-foreground">
              From routine maintenance to emergency tree removal, our comprehensive services are designed to keep your trees healthy and your property safe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Tree Trimming & Pruning"
              description="Professional pruning to enhance tree health, appearance, and safety with techniques specific to desert species."
              icon={<Scissors size={24} />}
              link="/services#trimming"
              imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              delay={100}
            />
            
            <ServiceCard 
              title="Tree Removal"
              description="Safe, efficient removal of dead, damaged, or unwanted trees, including complete stump grinding services."
              icon={<Truck size={24} />}
              link="/services#removal"
              imageUrl="https://images.unsplash.com/photo-1609844279176-61d89e868a18"
              delay={200}
            />
            
            <ServiceCard 
              title="Tree Health Care"
              description="Diagnose and treat tree diseases, pest infestations, and nutritional deficiencies to ensure long-term tree health."
              icon={<Heart size={24} />}
              link="/services#health"
              imageUrl="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
              delay={300}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="btn-outline border-nature-600 text-nature-600 hover:bg-nature-50"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section bg-nature-950 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
            <div className="inline-flex items-center rounded-full bg-nature-800 px-4 py-1.5 text-sm font-medium text-nature-200 mb-4">
              Why Choose Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display mb-4">The Desert Arbor Difference</h2>
            
            <p className="text-nature-200">
              What sets us apart is our dedication to excellence, sustainable practices, and our specialized knowledge of desert tree care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-nature-900/50 p-8 rounded-2xl hover-lift scroll-trigger">
              <div className="w-12 h-12 rounded-full bg-nature-800 flex items-center justify-center text-nature-400 mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Safety First Approach</h3>
              <p className="text-nature-300">
                Our team adheres to the highest safety standards with comprehensive insurance coverage and rigorous training.
              </p>
            </div>
            
            <div className="bg-nature-900/50 p-8 rounded-2xl hover-lift scroll-trigger" style={{ transitionDelay: '100ms' }}>
              <div className="w-12 h-12 rounded-full bg-nature-800 flex items-center justify-center text-nature-400 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Certified Expertise</h3>
              <p className="text-nature-300">
                Our ISA Certified Arborists bring specialized knowledge of desert trees and the unique Las Vegas climate.
              </p>
            </div>
            
            <div className="bg-nature-900/50 p-8 rounded-2xl hover-lift scroll-trigger" style={{ transitionDelay: '200ms' }}>
              <div className="w-12 h-12 rounded-full bg-nature-800 flex items-center justify-center text-nature-400 mb-4">
                <Wind size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Eco-Friendly Practices</h3>
              <p className="text-nature-300">
                We prioritize sustainable tree care methods that conserve water and protect the fragile desert ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
            <div className="inline-flex items-center rounded-full bg-nature-100 px-4 py-1.5 text-sm font-medium text-nature-800 mb-4">
              Testimonials
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display mb-4">What Our Clients Say</h2>
            
            <p className="text-muted-foreground">
              Don't just take our word for it. Hear from Las Vegas homeowners and businesses who trust Desert Arbor with their trees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The Desert Arbor team transformed our yard completely. They trimmed our overgrown palms and removed a diseased tree that was becoming a hazard. Professional from start to finish!"
              author="Sarah Johnson"
              location="Summerlin, Las Vegas"
              rating={5}
              delay={100}
            />
            
            <TestimonialCard 
              quote="As a property manager, I need reliable vendors. Desert Arbor has maintained the trees for all my properties for years. Their response time for emergency services is unmatched."
              author="Michael Rodriguez"
              location="Henderson, NV"
              rating={5}
              delay={200}
            />
            
            <TestimonialCard 
              quote="We were concerned about our 20-year-old Joshua tree. The arborist from Desert Arbor diagnosed the issue and saved it with their specialized treatment plan. Highly recommended!"
              author="Jennifer and David Chen"
              location="Spring Valley, Las Vegas"
              rating={5}
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </>
  );
};

export default Index;
