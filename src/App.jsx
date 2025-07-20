import { useState,useRef, useEffect } from 'react';
import { Upload, Download, Trash2, File, Image, Video, FileText, Archive, Music, Code, AlertCircle, CheckCircle, X, RefreshCw, Cloud, Shield, Zap, Users, Search, Filter, Grid, List, Eye, Share2, Copy, MoreVertical, Menu, Home, Info, Mail, Phone, MapPin, Clock, Star, Award, Globe, Lock, ArrowRight, ChevronDown, Facebook, Twitter, Linkedin, Instagram, Play, CheckCircle2, TrendingUp, BarChart3, Settings, HelpCircle, LogOut, User, Bell, Heart } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function NotificationBell() {
  const [showNotifications, setShowNotifications] = useState(false);
  const bellRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, message: "Your upload completed" },
  ];

  return (
    <div className="relative" ref={bellRef}>
      <button
        onClick={() => setShowNotifications((prev) => !prev)}
        className="relative p-2 text-slate-500 hover:text-slate-700 transition-colors"
      >
        <Bell size={20} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {notifications.length}
        </span>
      </button>

      {showNotifications && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-lg z-50 animate-fade-in">
          <div className="p-4 text-sm font-medium text-slate-700 border-b">Notifications</div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.map((note) => (
              <li key={note.id} className="px-4 py-3 hover:bg-slate-50 text-slate-600 text-sm">
                {note.message}
              </li>
            ))}
          </ul>
          <div className="px-4 py-2 text-center text-xs text-slate-400 border-t">
            <button className="hover:text-blue-600 transition">View All</button>
          </div>
        </div>
      )}
    </div>
  );
}


// Navigation Component
const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  const navigation = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Dashboard', id: 'dashboard', icon: BarChart3 },
    // { name: 'About', id: 'about', icon: Info },
    { name: 'Features', id: 'features', icon: Star },
    // { name: 'Pricing', id: 'pricing', icon: Award },
    // { name: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Cloud size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CloudShare Pro
              </h1>
              <p className="text-xs text-slate-500">Enterprise File Sharing</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </button>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:text-slate-700 transition-colors">
  <NotificationBell />
            </button>
            {/* <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              <User size={18} />
              Account
            </button> */}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-500 hover:text-slate-700 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <item.icon size={18} />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Cloud size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CloudShare Pro</h3>
                <p className="text-slate-400 text-sm">Enterprise Solutions</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Secure, fast, and reliable file sharing platform designed for modern enterprises and teams worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Dashboard', 'Upload Files', 'Shared Files', 'Team Management', 'Analytics', 'Settings'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Documentation', 'API Reference', 'Community Forum', 'Contact Support', 'Status Page'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-slate-400" />
                <span className="text-slate-400">support@cloudshare.pro</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-slate-400" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-slate-400" />
                <span className="text-slate-400">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-slate-400" />
                <span className="text-slate-400">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">
            © 2025 CloudShare Pro. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const Icon = type === 'success' ? CheckCircle : AlertCircle;
  const bgColor = type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';

  return (
    <div className={`fixed top-6 right-6 p-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 ${bgColor} text-white min-w-80 max-w-md backdrop-blur-sm`}>
      <Icon size={20} />
      <span className="flex-1 font-medium">{message}</span>
      <button onClick={onClose} className="hover:bg-white/20 rounded-lg p-1 transition-colors">
        <X size={16} />
      </button>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Express File Sharing
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Secure, fast, and reliable file sharing platform designed for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <Upload size={20} />
              Get Started Free
            </button>
            
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose CloudShare Pro?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Built for enterprises with security, speed, and collaboration in mind
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Enterprise Security", desc: "Bank-level encryption, SOC 2 compliance, and advanced access controls" },
            { icon: Zap, title: "Lightning Fast", desc: "Global CDN with 99.9% uptime and sub-second file delivery worldwide" },
            { icon: Globe, title: "Global Access", desc: "Access your files from anywhere with seamless synchronization" },
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl w-fit mb-4">
                <feature.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20 rounded-3xl">
  <div className="text-center max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-10">Why People Love Us</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Lightning-Fast Sharing",
          desc: "Send files instantly with our optimized infrastructure — no lags, no waiting.",
        },
        {
          title: "Built for Reliability",
          desc: "We’ve maintained 99.9% uptime so your work never gets interrupted.",
        },
        {
          title: "Global & Growing",
          desc: "Used by creators, teams, and enterprises in over 150 countries.",
        },
      ].map((item, idx) => (
        <div key={idx} className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-blue-100 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">About CloudShare Pro</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We're on a mission to make file sharing secure, fast, and accessible for everyone
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Founded in 2020, CloudShare Pro emerged from a simple need: secure, enterprise-grade file sharing that doesn't compromise on speed or user experience. Our team of security experts and cloud engineers built a platform that meets the highest standards of data protection while remaining intuitive for everyday use.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Today, we serve over 50,000 users across 150+ countries, from small startups to Fortune 500 companies, helping them collaborate securely and efficiently in an increasingly digital world.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, title: "50K+ Users", desc: "Active monthly users" },
              { icon: Globe, title: "150+ Countries", desc: "Global presence" },
              { icon: Shield, title: "99.9% Secure", desc: "Security rating" },
              { icon: Award, title: "SOC 2 Compliant", desc: "Industry standard" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-3 rounded-xl w-fit mx-auto mb-2">
                  <item.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-slate-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Security First", desc: "Every feature is built with security as the foundation" },
            { icon: Heart, title: "User-Centric", desc: "We prioritize user experience in every design decision" },
            { icon: Globe, title: "Global Impact", desc: "Making secure file sharing accessible worldwide" }
          ].map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl w-fit mx-auto mb-4">
                <value.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Features Page Component
const FeaturesPage = () => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Powerful Features</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Everything you need for secure, efficient file sharing and collaboration
        </p>
      </div>

      {/* Feature sections */}
      {[
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "Bank-level encryption and compliance",
          features: ["End-to-end encryption", "SOC 2 compliance", "Advanced access controls", "Audit logging"]
        },
        {
          icon: Zap,
          title: "Performance & Speed",
          description: "Lightning-fast file delivery worldwide",
          features: ["Global CDN network", "99.9% uptime SLA", "Sub-second file access", "Smart caching"]
        },
        {
          icon: Users,
          title: "Team Collaboration",
          description: "Built for modern team workflows",
          features: ["Real-time sharing", "Comments & annotations", "Permission management", "Team spaces"]
        }
      ].map((section, index) => (
        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-xl">
              <section.icon size={32} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
              <p className="text-slate-600">{section.description}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {section.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Pricing Page Component
const PricingPage = () => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Choose the plan that fits your needs. All plans include our core security features.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "Starter",
            price: "$9",
            period: "per user/month",
            description: "Perfect for small teams",
            features: ["100GB storage", "5 team members", "Basic analytics", "Email support"],
            highlighted: false
          },
          {
            name: "Professional",
            price: "$19",
            period: "per user/month",
            description: "For growing businesses",
            features: ["1TB storage", "Unlimited team members", "Advanced analytics", "Priority support", "Custom branding"],
            highlighted: true
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "contact us",
            description: "For large organizations",
            features: ["Unlimited storage", "Advanced security", "SSO integration", "Dedicated support", "Custom integrations"],
            highlighted: false
          }
        ].map((plan, index) => (
          <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
            plan.highlighted ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200'
          }`}>
            {plan.highlighted && (
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold mb-4">
                Most Popular
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-600 mb-4">{plan.description}</p>
              <div className="text-4xl font-bold text-slate-900 mb-1">{plan.price}</div>
              <div className="text-slate-600">{plan.period}</div>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
              plan.highlighted
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}>
              {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Page Component
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
};

// File type icon component
const FileIcon = ({ fileName, size = 24 }) => {
  const getFileIcon = (fileName) => {
    if (!fileName) return File;
    
    const ext = fileName.split('.').pop()?.toLowerCase();
    
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) return Image;
    if (['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm'].includes(ext)) return Video;
    if (['mp3', 'wav', 'flac', 'aac', 'ogg'].includes(ext)) return Music;
    if (['pdf', 'doc', 'docx', 'txt', 'rtf'].includes(ext)) return FileText;
    if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) return Archive;
    if (['js', 'jsx', 'ts', 'tsx', 'html', 'css', 'py', 'java', 'cpp', 'c'].includes(ext)) return Code;
    
    return File;
  };

  const getIconColor = (fileName) => {
    if (!fileName) return 'text-slate-500';
    
    const ext = fileName.split('.').pop()?.toLowerCase();
    
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) return 'text-emerald-500';
    if (['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm'].includes(ext)) return 'text-purple-500';
    if (['mp3', 'wav', 'flac', 'aac', 'ogg'].includes(ext)) return 'text-pink-500';
    if (['pdf', 'doc', 'docx', 'txt', 'rtf'].includes(ext)) return 'text-red-500';
    if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) return 'text-orange-500';
    if (['js', 'jsx', 'ts', 'tsx', 'html', 'css', 'py', 'java', 'cpp', 'c'].includes(ext)) return 'text-blue-500';
    
    return 'text-slate-500';
  };

  const IconComponent = getFileIcon(fileName);
  return <IconComponent size={size} className={getIconColor(fileName)} />;
};

// File upload component
const FileUpload = ({ onUploadSuccess, isUploading, uploadProgress }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onUploadSuccess(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      onUploadSuccess(files[0]);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className={`border-2 border-dashed rounded-2xl p-16 text-center transition-all duration-300 ${
          isDragging
            ? 'border-blue-500 bg-blue-50/50 scale-105'
            : 'border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50/50'
        } shadow-lg hover:shadow-xl`}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        {isUploading ? (
          <div className="space-y-6">
            <div className="relative">
              {/* <div className="animate-spin mx-auto">
                <Upload size={64} className="text-blue-500" />
              </div> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 animate-ping"></div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xl font-semibold text-slate-700">Uploading your file...</p>
              <div className="w-full max-w-md mx-auto bg-slate-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-slate-600 font-medium">{uploadProgress}% complete</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="relative">
              <Upload size={64} className="mx-auto text-slate-400" />
              <div className="absolute -top-2 -right-2">
                <Cloud size={24} className="text-blue-500" />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-slate-800">
                Drop your files here
              </h3>
              <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                Drag and drop files or click to browse from your device. 
                <span className="block mt-1 text-sm">Maximum file size: 100MB • All file types supported</span>
              </p>
            </div>
            <input
              type="file"
              onChange={handleFileSelect}
              className="hidden"
              id="file-input"
              disabled={isUploading}
            />
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <label
                htmlFor="file-input"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl cursor-pointer transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Upload size={20} />
                Choose Files
              </label>
              {/* <button className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-4 rounded-xl transition-all duration-200 font-semibold">
                <Zap size={20} />
                Quick Upload
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Individual file item component
const FileItem = ({ file, onDelete, isDeleting, viewMode = 'list' }) => {
  const [showActions, setShowActions] = useState(false);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileType = (fileName) => {
    if (!fileName) return 'Unknown';
    const ext = fileName.split('.').pop()?.toLowerCase();
    return ext ? ext.toUpperCase() : 'Unknown';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  if (viewMode === 'grid') {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <FileIcon fileName={file.fileName} size={48} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 truncate">{file.fileName}</h3>
            <div className="text-sm text-slate-500 mt-1">
              <span className="bg-slate-100 px-2 py-1 rounded-full text-xs font-medium">{getFileType(file.fileName)}</span>
              <span className="block mt-1">{formatFileSize(file.fileSize)}</span>
            </div>
          </div>
          <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => window.open(file.publicUrl || file.downloadUrl, '_blank')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg transition-colors"
            >
              <Download size={16} />
            </button>
            <button
              onClick={() => copyToClipboard(file.publicUrl || file.downloadUrl)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
            >
              <Copy size={16} />
            </button>
            <button
              onClick={() => onDelete(file.id || file.fileId)}
              disabled={isDeleting}
              className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white p-2 rounded-lg transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-slate-300 group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="flex-shrink-0">
            <FileIcon fileName={file.fileName} size={40} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
              {file.fileName}
            </h3>
            <div className="flex items-center gap-4 mt-2">
              <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-600">
                {getFileType(file.fileName)}
              </span>
              <span className="text-sm text-slate-500">{formatFileSize(file.fileSize)}</span>
              {file.uploadDate && (
                <span className="text-sm text-slate-500">{formatDate(file.uploadDate)}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={() => window.open(file.publicUrl || file.downloadUrl, '_blank')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Download size={16} />
            Download
          </button>
          
          <button
            onClick={() => copyToClipboard(file.publicUrl || file.downloadUrl)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Copy size={16} />
            Copy Link
          </button>
          
          <button
            onClick={() => onDelete(file.id || file.fileId)}
            disabled={isDeleting}
            className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
          >
            <Trash2 size={16} />
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Dashboard Page Component (File Management)
const DashboardPage = ({ 
  files, 
  isUploading, 
  uploadProgress, 
  deletingFileId, 
  handleFileUpload, 
  handleFileDelete, 
  fetchFiles,
  isLoading 
}) => {
  const [viewMode, setViewMode] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFiles = files.filter(file =>
    file.fileName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16">
      {/* Dashboard Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">File Dashboard</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Upload, manage, and share your files securely
        </p>
      </div>

      {/* Upload Section */}
      <div>
        <FileUpload
          onUploadSuccess={handleFileUpload}
          isUploading={isUploading}
          uploadProgress={uploadProgress}
        />
      </div>

      {/* Files List */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Your Files
            </h2>
            <p className="text-slate-600">
              {files.length > 0 ? `${files.length} files uploaded` : 'No files yet'}
            </p>
          </div>
          
          {files.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search files..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
              
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <List size={20} />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Grid size={20} />
                </button>
              </div>
              
              <button
                onClick={fetchFiles}
                className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-xl transition-colors font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
            </div>
          )}
        </div>

        {isLoading ? (
  <div className="flex flex-col items-center justify-center py-24 text-center space-y-4 animate-fade-in">
    <div className="relative">
      <div className="absolute inset-0 animate-ping-slow rounded-full bg-slate-300 opacity-20"></div>
      <Cloud size={64} className="text-slate-400 animate-bounce-slow" />
    </div>
    <h3 className="text-xl font-semibold text-slate-600">Getting things ready...</h3>
    <p className="text-slate-500 text-sm">Hang tight — your files are loading faster than you think.</p>
  </div>
): filteredFiles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-lg">
            <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <File size={32} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              {searchTerm ? 'No matching files found' : 'No files uploaded yet'}
            </h3>
            <p className="text-slate-500 max-w-md mx-auto">
              {searchTerm 
                ? 'Try adjusting your search terms or upload new files'
                : 'Upload your first file to get started with secure cloud storage and sharing'
              }
            </p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
            {filteredFiles.map((file) => (
              <FileItem
                key={file.id || file.fileId || file.fileName}
                file={file}
                onDelete={handleFileDelete}
                isDeleting={deletingFileId === (file.id || file.fileId)}
                viewMode={viewMode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Main App component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [deletingFileId, setDeletingFileId] = useState(null);
  const [toast, setToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  // Fetch files on component mount
  useEffect(() => {
    if (currentPage === 'dashboard') {
      fetchFiles();
    }
  }, [currentPage]);

  const fetchFiles = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/files`);
      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }
      const data = await response.json();
      setFiles(data.files || []);
    } catch (error) {
      console.error('Error fetching files:', error);
      showToast('Failed to load files', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const validateFile = (file) => {
    const maxSize = 100 * 1024 * 1024; // 100MB
    
    if (file.size > maxSize) {
      throw new Error('File size exceeds 100MB limit');
    }
    
    return true;
  };

  const handleFileUpload = async (file) => {
    try {
      validateFile(file);
      setIsUploading(true);
      setUploadProgress(0);

      const formData = new FormData();
      formData.append('file', file);

      // Simulate progress tracking
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const response = await fetch(`${API_BASE_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();

      // Add the new file to the list
      const newFile = {
        ...data,
        uploadDate: new Date().toISOString()
      };
      setFiles(prev => [newFile, ...prev]);
      showToast('File uploaded successfully!', 'success');
      
    } catch (error) {
      const errorMessage = error.message || 'Upload failed';
      showToast(errorMessage, 'error');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleFileDelete = async (fileId) => {
    try {
      setDeletingFileId(fileId);
      const response = await fetch(`${API_BASE_URL}/api/files/${fileId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Delete failed');
      }
      
      // Remove the file from the list
      setFiles(prev => prev.filter(file => (file.id || file.fileId) !== fileId));
      showToast('File deleted successfully!', 'success');
      
    } catch (error) {
      const errorMessage = error.message || 'Delete failed';
      showToast(errorMessage, 'error');
    } finally {
      setDeletingFileId(null);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'dashboard':
        return (
          <DashboardPage
            files={files}
            isUploading={isUploading}
            uploadProgress={uploadProgress}
            deletingFileId={deletingFileId}
            handleFileUpload={handleFileUpload}
            handleFileDelete={handleFileDelete}
            fetchFiles={fetchFiles}
            isLoading={isLoading}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'features':
        return <FeaturesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex flex-col">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;