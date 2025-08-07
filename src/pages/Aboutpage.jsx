import React from 'react';
import { Users, Globe, Shield, Award, Heart } from 'lucide-react';
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
export default AboutPage;