import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<'booking' | 'contact'>('booking');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Add form type for the backend
    data.source = formType === 'booking' ? 'Booking' : 'Contact';
    data.timestamp = new Date().toISOString();

    try {
      // NOTE: Replace with your actual Google Apps Script Web App URL after deployment
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_REPLACEME_W_SCRIPT_ID/exec';
      
      // We use a simple fetch POST
      // Mode 'no-cors' is often used with Apps Script to avoid CORS preflight issues 
      // if you don't need the response body.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      // Since no-cors doesn't give us a response body, we assume success if no error is thrown
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-20 pb-12 bg-light border-b border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-dark mb-4">
            {formType === 'booking' ? 'Book a Consultation' : 'Get in Touch'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step toward a more efficient business.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-xl font-bold text-dark mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <a href="tel:09047632448" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Call Us</p>
                      <p className="text-dark font-bold">09047632448</p>
                    </div>
                  </a>
                  <a href="https://wa.me/2349047632448?text=Hello%20+Quick.ai,%20I’d%20like%20to%20talk%20about%20AI%20automation%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.161 1.442 4.757 1.443 5.462 0 9.904-4.441 9.907-9.904.001-2.646-1.03-5.132-2.903-7.007-1.873-1.873-4.359-2.903-7.004-2.904-5.463 0-9.903 4.442-9.907 9.906-.001 1.83.482 3.618 1.396 5.187l-1.007 3.674 3.76-1.001zm11.367-7.64c-.31-.155-1.835-.906-2.112-1.006-.277-.1-.479-.155-.68.155-.201.31-.779 1.006-.955 1.206-.176.2-.352.226-.662.071-.31-.155-1.31-.482-2.494-1.538-.921-.822-1.543-1.838-1.724-2.148-.181-.31-.019-.477.136-.632.14-.139.31-.362.466-.543.155-.181.206-.31.31-.517.103-.207.052-.387-.026-.543-.077-.156-.68-1.637-.931-2.246-.244-.594-.492-.514-.68-.524-.176-.009-.377-.01-.578-.01s-.528.077-.804.377c-.277.31-1.057 1.033-1.057 2.519s1.082 2.92 1.232 3.127c.15.207 2.13 3.253 5.159 4.561.72.311 1.282.496 1.72.636.724.23 1.383.197 1.903.12.58-.087 1.835-.75 2.093-1.442.258-.691.258-1.282.181-1.407-.077-.126-.277-.201-.588-.356z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                      <p className="text-dark font-bold">Message Us</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Location</p>
                      <p className="text-dark font-bold">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-accent rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-4">Why book a call?</h4>
                <ul className="space-y-4">
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 text-indigo-200 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    <span>Get clarity on AI capabilities</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 text-indigo-200 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    <span>Identify your high-ROI use cases</span>
                  </li>
                  <li className="flex gap-2">
                    <svg className="w-5 h-5 text-indigo-200 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    <span>Get a rough cost/time estimate</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Container */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                <div className="flex border-b border-gray-100">
                  <button 
                    onClick={() => setFormType('booking')}
                    className={`flex-1 py-4 text-sm font-bold transition-colors ${formType === 'booking' ? 'bg-white text-accent border-b-2 border-accent' : 'bg-gray-50 text-gray-500 hover:text-dark'}`}
                  >
                    Booking Form
                  </button>
                  <button 
                    onClick={() => setFormType('contact')}
                    className={`flex-1 py-4 text-sm font-bold transition-colors ${formType === 'contact' ? 'bg-white text-accent border-b-2 border-accent' : 'bg-gray-50 text-gray-500 hover:text-dark'}`}
                  >
                    General Inquiry
                  </button>
                </div>

                <div className="p-8 md:p-12">
                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-dark mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600 mb-8">Thank you for reaching out to +Quick.ai. Our team will get back to you within 24 hours.</p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="text-accent font-bold hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                          <input required name="fullName" type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                          <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="john@company.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                          <input name="companyName" type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Acme Inc." />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                          <input required name="phoneNumber" type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="090 000 0000" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                        <select name="service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white">
                          <option>AI Automation</option>
                          <option>AI Agents & Chatbots</option>
                          <option>AI Tool Integration</option>
                          <option>AI Strategy & Consulting</option>
                          <option>Custom AI Solution</option>
                          <option>Other / Not Sure</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {formType === 'booking' ? 'Tell us about your business challenges' : 'Your Message'}
                        </label>
                        <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                      </div>

                      {status === 'error' && (
                        <p className="text-red-500 text-sm font-medium">There was an error sending your message. Please try again or contact us via WhatsApp.</p>
                      )}

                      <button 
                        disabled={status === 'loading'}
                        type="submit" 
                        className={`w-full bg-accent text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-100 transition-all ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90 active:scale-[0.98]'}`}
                      >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
