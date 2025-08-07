import React from 'react';
import { Shield, Zap, Users, CheckCircle2 } from 'lucide-react';
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
export default FeaturesPage;