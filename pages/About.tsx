
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-8">Practical AI. Real Results.</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            +Quick.ai was founded on a simple principle: Artificial Intelligence shouldn't be a luxury for "big tech"—it should be a practical tool for every business in Africa.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-6">Our Mission</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                In a rapidly evolving global economy, African businesses face unique challenges and opportunities. At +Quick.ai, our mission is to make advanced AI technology accessible, usable, and profitable for businesses across Nigeria and the continent.
              </p>
              <p>
                We believe that AI is not about replacing humans, but about empowering them. By automating the mundane, we free up teams to focus on creativity, strategy, and connection—the things that truly drive growth.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-accent pl-6 py-2">
                <h4 className="text-xl font-bold text-dark mb-2">Execution Over Hype</h4>
                <p className="text-gray-600">We don't sell dreams or complex theories. We deliver systems that work from Day 1.</p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h4 className="text-xl font-bold text-dark mb-2">Business-First Mindset</h4>
                <p className="text-gray-600">Every project starts with a business goal, not a technology stack.</p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h4 className="text-xl font-bold text-dark mb-2">African Context</h4>
                <p className="text-gray-600">We build for the realities of the local market, including infrastructure and cost constraints.</p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h4 className="text-xl font-bold text-dark mb-2">Transparent Partnership</h4>
                <p className="text-gray-600">Honest advice on what AI can (and can't) do for your specific situation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Founder Focus Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
               <div className="bg-gray-200 aspect-square rounded-3xl overflow-hidden flex items-center justify-center border-2 border-white shadow-xl">
                  <span className="text-gray-400 font-bold text-2xl">Founder-Led Team</span>
               </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-dark mb-6">Grounded in Experience</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Based in Lagos, Nigeria, our team combines deep technical expertise with a sharp business acumen. We've seen firsthand how manual processes can stifle even the most promising African ventures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                +Quick.ai isn't just a service provider; we are your implementation partners. We stick around to ensure the systems we build continue to deliver value long after the initial deployment.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">Q</div>
                <div>
                  <p className="font-bold text-dark">The +Quick.ai Team</p>
                  <p className="text-gray-500 text-sm">Automating Africa's Future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
