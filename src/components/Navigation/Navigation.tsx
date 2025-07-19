import React from 'react';
import { Waves, Calendar, Users, BarChart3, Sparkles, Trophy, MessageCircle, Info } from 'lucide-react';
import { Section } from '../../App';

interface NavigationProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'home' as Section, label: 'Home', icon: Waves },
    { id: 'events' as Section, label: 'Events', icon: Calendar },
    { id: 'volunteers' as Section, label: 'Volunteers', icon: Users },
    { id: 'waste' as Section, label: 'Analytics', icon: BarChart3 },
    { id: 'content' as Section, label: 'Content', icon: Sparkles },
    { id: 'impact' as Section, label: 'Impact', icon: Trophy },
    { id: 'chat' as Section, label: 'EduBot', icon: MessageCircle },
    { id: 'about' as Section, label: 'About', icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-sky-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              CleanCoast
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center space-x-1">
            {navItems.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white'
                    : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};