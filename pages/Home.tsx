
import React from 'react';
import { Link } from 'react-router-dom';

const servicesSummary = [
  {
    title: 'AI Automation',
    desc: 'Streamline repetitive workflows and save hundreds of hours monthly.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'AI Agents & Chatbots',
    desc: 'Deploy 24/7 intelligent assistants for support and internal operations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  {
    title: 'AI Tool Integration',
    desc: 'Connect your CRMs, ERPs, and internal tools with modern AI capabilities.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3m16 0h-3a2 2 0 01-2-2V5a2 2 0 114 0v1zM3 13h10a2 2 0 012 2v1a2 2 0 01-2 2H3a2 2 0 01-2-2v-1a2 2 0 012-2z" />
      </svg>
    )
  },
  {
    title: 'AI Strategy & Consulting',
    desc: 'Strategic roadmaps for AI adoption tailored to your business goals.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'Custom AI Solutions',
    desc: 'Bespoke AI systems designed for unique enterprise requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-dark leading-tight mb-8">
            AI Automation & Implementation for <span className="text-accent">Modern Businesses</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            We help businesses automate workflows, deploy AI tools, and implement AI systems that drive real results. Built for startups, SMEs, and enterprises in Nigeria and across Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-accent text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-opacity-90 transition-all shadow-xl shadow-indigo-100"
            >
              Book a Free Consultation
            </Link>
            <a 
              href="https://wa.me/2349047632448?text=Hello%20+Quick.ai,%20I’d%20like%20to%20talk%20about%20AI%20automation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-gray-100 px-8 py-4 rounded-xl text-lg font-bold text-dark hover:bg-gray-50 transition-all"
            >
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.161 1.442 4.757 1.443 5.462 0 9.904-4.441 9.907-9.904.001-2.646-1.03-5.132-2.903-7.007-1.873-1.873-4.359-2.903-7.004-2.904-5.463 0-9.903 4.442-9.907 9.906-.001 1.83.482 3.618 1.396 5.187l-1.007 3.674 3.76-1.001zm11.367-7.64c-.31-.155-1.835-.906-2.112-1.006-.277-.1-.479-.155-.68.155-.201.31-.779 1.006-.955 1.206-.176.2-.352.226-.662.071-.31-.155-1.31-.482-2.494-1.538-.921-.822-1.543-1.838-1.724-2.148-.181-.31-.019-.477.136-.632.14-.139.31-.362.466-.543.155-.181.206-.31.31-.517.103-.207.052-.387-.026-.543-.077-.156-.68-1.637-.931-2.246-.244-.594-.492-.514-.68-.524-.176-.009-.377-.01-.578-.01s-.528.077-.804.377c-.277.31-1.057 1.033-1.057 2.519s1.082 2.92 1.232 3.127c.15.207 2.13 3.253 5.159 4.561.72.311 1.282.496 1.72.636.724.23 1.383.197 1.903.12.58-.087 1.835-.75 2.093-1.442.258-.691.258-1.282.181-1.407-.077-.126-.277-.201-.588-.356z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Practical AI Solutions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We focus on execution and tangible results, not buzzwords.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesSummary.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-indigo-50 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quick.ai Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold text-dark mb-8 leading-tight">
                Why Businesses Trust <span className="text-accent">+Quick.ai</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-1">Built for African Businesses</h4>
                    <p className="text-gray-600">We understand the local landscape, connectivity challenges, and market dynamics in Nigeria and beyond.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-1">Execution Focused</h4>
                    <p className="text-gray-600">We don't just write reports. We build, deploy, and manage systems that actually run your business.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-1">Practical AI, Not Theory</h4>
                    <p className="text-gray-600">Every solution we implement is measured by the time it saves or the revenue it generates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-bold text-dark mb-6">Who we help</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <span className="text-accent font-bold block text-lg mb-1">Startups</span>
                    <p className="text-gray-600 text-sm">Scale operations rapidly without linear headcount growth.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <span className="text-accent font-bold block text-lg mb-1">SMEs</span>
                    <p className="text-gray-600 text-sm">Professionalize workflows and compete with larger enterprises.</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <span className="text-accent font-bold block text-lg mb-1">Enterprises</span>
                    <p className="text-gray-600 text-sm">Optimize complex legacy processes with custom AI agents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Ready to automate your business?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Book a 30-minute consultation to explore how AI can save your company time and money.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-accent px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all"
            >
              Book My Consultation
            </Link>
            <a 
              href="tel:09047632448" 
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all"
            >
              Call 09047632448
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
