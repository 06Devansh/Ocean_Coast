import React from 'react';
import { ArrowRight, Waves, Users, BarChart3, Sparkles, Trophy, MessageCircle, Calendar } from 'lucide-react';
import { Section } from '../../App';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const features = [
    {
      id: 'events' as Section,
      title: 'Smart Event Scheduling',
      description: 'AI-powered volunteer matching and interactive event management',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'volunteers' as Section,
      title: 'Gamified Volunteer Hub',
      description: 'ShoreSprint game, badges, and community engagement',
      icon: Users,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'waste' as Section,
      title: 'WasteTrack Analytics',
      description: 'Voice-powered logging with AI insights and visualizations',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'content' as Section,
      title: 'ContentCraft AI',
      description: 'Auto-generate social posts, flyers, and reports',
      icon: Sparkles,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'impact' as Section,
      title: 'Impact Dashboard',
      description: 'Comprehensive metrics and leaderboards',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'chat' as Section,
      title: 'EduEngage Chatbot',
      description: 'AI assistant for FAQs, quizzes, and personalized tips',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-sky-500 via-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Waves className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Clean<span className="text-cyan-300">Coast</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              AI-powered platform revolutionizing beach cleanup drives in Mumbai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('events')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors duration-200"
              >
                <span>Start Organizing</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('volunteers')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Join as Volunteer
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sky-50 to-transparent"></div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to organize and track beach cleanup drives</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                onClick={() => onNavigate(feature.id)}
                className="group cursor-pointer bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-sky-600 font-medium group-hover:text-sky-700">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-sky-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25K+</div>
              <div className="text-sky-100">Kilograms Collected</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-sky-100">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-sky-100">Cleanup Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sky-100">Beaches Cleaned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};