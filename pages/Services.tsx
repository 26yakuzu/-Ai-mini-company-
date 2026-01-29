
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'AI Automation',
    desc: 'Workflow automation, task automation, and internal process optimization.',
    who: 'Ideal for businesses with repetitive administrative tasks, manual data entry, or complex multi-step digital workflows.',
    benefit: 'Saves hundreds of hours monthly, eliminates human error in data processing, and allows your team to focus on high-level strategy.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'AI Agents & Chatbots',
    desc: 'Intelligent customer support bots, internal assistants, and automated WhatsApp communication systems.',
    who: 'Customer-facing businesses, sales teams, and HR departments looking to scale support without increasing headcount.',
    benefit: 'Provides 24/7 instant response times, improves customer satisfaction scores, and handles up to 80% of routine inquiries automatically.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  {
    title: 'AI Tool Integration',
    desc: 'Connecting CRM (Salesforce, HubSpot), WhatsApp Business, Email, and internal APIs with intelligent AI logic.',
    who: 'Companies using modern SaaS stacks who want their data to work smarter across multiple platforms.',
    benefit: 'Unified data intelligence and automated triggers that ensure no lead falls through the cracks between different software tools.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3m16 0h-3a2 2 0 01-2-2V5a2 2 0 114 0v1zM3 13h10a2 2 0 012 2v1a2 2 0 01-2 2H3a2 2 0 01-2-2v-1a2 2 0 012-2z" />
      </svg>
    )
  },
  {
    title: 'AI Strategy & Consulting',
    desc: 'Strategic AI adoption planning, use-case discovery sessions, and implementation roadmaps.',
    who: 'Founders and Executives who know AI is important but aren’t sure where to start for the highest ROI.',
    benefit: 'Avoids "hype-driven" investments by focusing only on AI applications that solve specific, high-value business problems.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'Custom AI Solutions',
    desc: 'Bespoke AI systems tailored to unique business needs, including proprietary data training.',
    who: 'Enterprises and tech-forward startups with unique operational requirements that off-the-shelf tools can’t solve.',
    benefit: 'Creates a proprietary competitive advantage through a system built specifically for your unique data and business logic.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-20 pb-16 bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-dark mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just talk about AI. We build, deploy, and manage AI systems that drive actual business value.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center p-3 bg-accent/10 text-accent rounded-2xl mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-dark mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-accent text-sm uppercase tracking-wider mb-2">Who it is for</h4>
                      <p className="text-gray-600">{service.who}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h4 className="font-bold text-green-700 text-sm uppercase tracking-wider mb-2">Business Benefit</h4>
                      <p className="text-gray-600">{service.benefit}</p>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <Link 
                      to="/contact" 
                      className="inline-block bg-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all"
                    >
                      Get Started with {service.title}
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                   <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center border-2 border-dashed border-gray-200">
                      <span className="text-gray-400 font-medium">Service Visualization</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Not sure which service you need?</h2>
          <p className="text-gray-600 text-lg mb-10">
            Let's have a 15-minute chat to identify the biggest bottlenecks in your business and how AI can solve them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-accent text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:scale-105 transition-transform">
              Book Strategy Call
            </Link>
            <a href="tel:09047632448" className="bg-white border border-gray-200 text-dark px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
              Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
