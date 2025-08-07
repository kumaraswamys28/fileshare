import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, HelpCircle, FileText, Users } from 'lucide-react';
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, title: "Email", value: "support@cloudshare.pro" },
                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Address", value: "123 Tech Street, San Francisco, CA 94105" },
                { icon: Clock, title: "Hours", value: "24/7 Support Available" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl">
                    <item.icon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{item.title}</div>
                    <div className="text-slate-600">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Support</h3>
            <p className="text-slate-600 mb-6">
              Need immediate help? Check out our resources for quick answers.
            </p>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors">
                <HelpCircle size={16} />
                Help Center
              </a>
              <a href="#" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors">
                <FileText size={16} />
                Documentation
              </a>
              <a href="#" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors">
                <Users size={16} />
                Community Forum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; export default ContactPage;  