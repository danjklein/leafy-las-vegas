
import React, { useEffect } from 'react';
import { Award, Clock, Users, ThumbsUp, Star, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

const About = () => {
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

  // Timeline data
  const timeline = [
    {
      year: "2005",
      title: "Desert Arbor Founded",
      description: "Started with just 2 arborists and a passion for desert tree preservation."
    },
    {
      year: "2010",
      title: "ISA Certification",
      description: "All our arborists became ISA certified, setting the standard for professional tree care in Las Vegas."
    },
    {
      year: "2015",
      title: "Expanded Services",
      description: "Added specialized desert palm care and drought-resistant landscaping services."
    },
    {
      year: "2018",
      title: "Commercial Division",
      description: "Launched our commercial property division, serving HOAs and businesses throughout Clark County."
    },
    {
      year: "2023",
      title: "Sustainability Program",
      description: "Introduced our water conservation and sustainable tree care program for the desert environment."
    }
  ];

  // Team members
  const team = [
    {
      name: "Robert Martinez",
      role: "Founder & Lead Arborist",
      bio: "ISA Certified Arborist with over 20 years of experience in desert tree care.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Elena Rodriguez",
      role: "Tree Health Specialist",
      bio: "Expert in tree disease diagnosis and treatment in desert conditions.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "David Chen",
      role: "Operations Manager",
      bio: "Ensures smooth operations and exceptional client experience on every project.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Sustainability Director",
      bio: "Specializes in water-wise tree care and desert landscaping practices.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-nature-950 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-nature-800 px-4 py-1.5 text-sm font-medium text-nature-200 mb-4 animate-fade-in">
              About Our Company
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display mb-6 animate-slide-up">
              Caring for Las Vegas Trees Since 2005
            </h1>
            
            <p className="text-gray-300 text-xl mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Desert Arbor is a team of passionate arborists dedicated to preserving and enhancing the urban forest of Las Vegas through expert tree care services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="stagger-children">
              <div className="inline-flex items-center rounded-full bg-nature-100 px-4 py-1.5 text-sm font-medium text-nature-800 mb-4">
                Our Mission
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display mb-6">Growing a greener Las Vegas, one tree at a time</h2>
              
              <p className="text-muted-foreground mb-6">
                At Desert Arbor, our mission is to provide exceptional tree care that enhances the beauty, health, and longevity of Las Vegas' urban forest while respecting the unique challenges of our desert environment. We are committed to sustainable practices, education, and the preservation of our city's valuable tree canopy.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 text-nature-600">
                    <ThumbsUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Excellence in Service</h4>
                    <p className="text-muted-foreground">Delivering exceptional results with professionalism and care</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-nature-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Community Focus</h4>
                    <p className="text-muted-foreground">Contributing to a healthier, more beautiful Las Vegas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-nature-600">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Sustainability</h4>
                    <p className="text-muted-foreground">Environmentally responsible practices in all we do</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative scroll-trigger">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                alt="Desert landscape with trees" 
                className="rounded-2xl shadow-accent w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg scroll-trigger" style={{ transitionDelay: '300ms' }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-nature-100 p-3 rounded-full">
                    <Calendar size={24} className="text-nature-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-nature-800">18+ Years</p>
                    <p className="text-sm text-muted-foreground">Serving Las Vegas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-subtle hover:shadow-accent transition-shadow scroll-trigger">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nature-100 text-nature-600 mb-4">
                <Award size={24} />
              </div>
              <div className="text-4xl font-bold text-nature-800 mb-1">100%</div>
              <p className="text-muted-foreground">Certified Arborists</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-subtle hover:shadow-accent transition-shadow scroll-trigger" style={{ transitionDelay: '100ms' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nature-100 text-nature-600 mb-4">
                <Users size={24} />
              </div>
              <div className="text-4xl font-bold text-nature-800 mb-1">3,000+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-subtle hover:shadow-accent transition-shadow scroll-trigger" style={{ transitionDelay: '200ms' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nature-100 text-nature-600 mb-4">
                <ThumbsUp size={24} />
              </div>
              <div className="text-4xl font-bold text-nature-800 mb-1">25,000+</div>
              <p className="text-muted-foreground">Trees Serviced</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-subtle hover:shadow-accent transition-shadow scroll-trigger" style={{ transitionDelay: '300ms' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nature-100 text-nature-600 mb-4">
                <Clock size={24} />
              </div>
              <div className="text-4xl font-bold text-nature-800 mb-1">18+</div>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Timeline */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
            <div className="inline-flex items-center rounded-full bg-nature-100 px-4 py-1.5 text-sm font-medium text-nature-800 mb-4">
              Our Story
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display mb-4">The Desert Arbor Journey</h2>
            
            <p className="text-muted-foreground">
              Follow our growth from a small local business to the premier tree care service in Las Vegas.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-nature-200 transform md:translate-x-px"></div>
            
            {/* Timeline entries */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`relative flex flex-col md:flex-row gap-8 scroll-trigger ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Year marker */}
                  <div className="md:hidden absolute left-0 top-0 w-8 h-8 rounded-full bg-nature-600 text-white flex items-center justify-center -translate-x-3.5 z-10">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-0 w-8 h-8 rounded-full bg-nature-600 text-white flex items-center justify-center -translate-x-4 z-10">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 pl-10 md:pl-0">
                    <div className="bg-white p-6 rounded-xl shadow-subtle hover:shadow-accent transition-shadow">
                      <div className="text-lg font-bold text-nature-600 mb-1">{item.year}</div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
            <div className="inline-flex items-center rounded-full bg-nature-100 px-4 py-1.5 text-sm font-medium text-nature-800 mb-4">
              Our Team
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display mb-4">Meet Our Experts</h2>
            
            <p className="text-muted-foreground">
              Our team of certified arborists and tree care specialists is passionate about preserving and enhancing Las Vegas' urban forest.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-subtle hover-lift scroll-trigger" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                  <p className="text-nature-600 text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 stagger-children">
              <div className="inline-flex items-center rounded-full bg-nature-100 px-4 py-1.5 text-sm font-medium text-nature-800 mb-4">
                Our Certifications
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display mb-6">Professional Standards & Qualifications</h2>
              
              <p className="text-muted-foreground mb-8">
                At Desert Arbor, we maintain the highest professional standards in the industry. All our arborists are certified by the International Society of Arboriculture (ISA) and regularly participate in continuing education to stay at the forefront of tree care innovation.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-border p-4 rounded-lg text-center">
                  <div className="text-nature-600 mb-2">
                    <Award size={28} className="mx-auto" />
                  </div>
                  <p className="font-medium">ISA Certified Arborists</p>
                </div>
                
                <div className="border border-border p-4 rounded-lg text-center">
                  <div className="text-nature-600 mb-2">
                    <Award size={28} className="mx-auto" />
                  </div>
                  <p className="font-medium">Tree Risk Assessment Qualified</p>
                </div>
                
                <div className="border border-border p-4 rounded-lg text-center">
                  <div className="text-nature-600 mb-2">
                    <Award size={28} className="mx-auto" />
                  </div>
                  <p className="font-medium">Licensed & Insured</p>
                </div>
                
                <div className="border border-border p-4 rounded-lg text-center">
                  <div className="text-nature-600 mb-2">
                    <Award size={28} className="mx-auto" />
                  </div>
                  <p className="font-medium">TCIA Accredited Business</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 scroll-trigger">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                alt="Professional arborist examining a tree" 
                className="rounded-2xl shadow-accent w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </>
  );
};

export default About;
