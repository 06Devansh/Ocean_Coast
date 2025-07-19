import React from 'react';
import { Heart, Users, Target, Award, MapPin, Calendar, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      role: 'Founder & CEO',
      bio: 'Marine biologist with 15+ years of experience in coastal conservation. Former researcher at TIFR.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      role: 'CTO & AI Lead',
      bio: 'Tech entrepreneur passionate about using AI for environmental solutions. Former Google engineer.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: '3',
      name: 'Anita Patel',
      role: 'Community Manager',
      bio: 'Social impact specialist with expertise in volunteer management and community engagement.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: '4',
      name: 'Vikram Singh',
      role: 'Operations Director',
      bio: 'Environmental engineer focused on waste management systems and sustainable operations.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'CleanCoast was founded with a vision to revolutionize beach cleanup efforts in Mumbai'
    },
    {
      year: '2021',
      title: 'First AI Integration',
      description: 'Launched our first AI-powered volunteer matching system'
    },
    {
      year: '2022',
      title: '10,000 Volunteers',
      description: 'Reached milestone of 10,000 registered volunteers across Mumbai'
    },
    {
      year: '2023',
      title: 'Government Partnership',
      description: 'Partnered with BMC and Maharashtra Pollution Control Board'
    },
    {
      year: '2024',
      title: 'Platform 2.0',
      description: 'Launched comprehensive AI-powered platform with gamification'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Environmental Stewardship',
      description: 'We believe in protecting our oceans and coastlines for future generations through collective action and sustainable practices.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our platform is built around empowering communities to take ownership of their local environment and create lasting change.'
    },
    {
      icon: Target,
      title: 'Data-Driven Impact',
      description: 'We use AI and analytics to maximize the effectiveness of every cleanup effort and measure real environmental impact.'
    },
    {
      icon: Award,
      title: 'Innovation for Good',
      description: 'We harness cutting-edge technology to make environmental conservation accessible, engaging, and rewarding for everyone.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About CleanCoast</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're on a mission to transform Mumbai's coastline through AI-powered community action, 
          making beach cleanup drives more effective, engaging, and impactful than ever before.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="bg-gradient-to-br from-sky-500 to-cyan-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-sky-100 text-lg leading-relaxed">
            To revolutionize coastal conservation in Mumbai by creating an AI-powered ecosystem that connects, 
            motivates, and empowers communities to take meaningful environmental action. We believe that 
            technology can amplify human compassion to create unprecedented positive impact on our oceans.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-teal-500 to-green-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-teal-100 text-lg leading-relaxed">
            A future where Mumbai's coastline is pristine, marine ecosystems thrive, and every citizen 
            is an active guardian of our ocean heritage. We envision a world where environmental 
            stewardship is gamified, data-driven, and deeply rewarding for all participants.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-500 to-cyan-500 rounded-full"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-sky-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Meet Our Team</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Passionate individuals united by a common goal: protecting Mumbai's beautiful coastline for future generations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sky-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-sky-500 transition-colors duration-200">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-gradient-to-br from-sky-600 to-cyan-600 text-white rounded-2xl p-12 mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Impact So Far</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">25,000+</div>
            <div className="text-sky-100">Kilograms of Waste Removed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">12,000+</div>
            <div className="text-sky-100">Active Volunteers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">200+</div>
            <div className="text-sky-100">Cleanup Events Organized</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-sky-100">Beaches & Coastlines Cleaned</div>
          </div>
        </div>
      </div>

      {/* Partnerships */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Government Bodies</h3>
            <p className="text-gray-600">BMC, Maharashtra Pollution Control Board, Coastal Regulation Zone Authority</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">NGO Partners</h3>
            <p className="text-gray-600">Versova Residents Volunteers, Juhu Beach Lovers, Marine Life Conservation Society</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Sponsors</h3>
            <p className="text-gray-600">Tech companies, environmental organizations, and local businesses supporting our mission</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">hello@cleancoast.org</p>
            <p className="text-gray-600">partnerships@cleancoast.org</p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">+91 98765 43210</p>
            <p className="text-gray-600">+91 87654 32109</p>
          </div>
          
          <div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">Marine Drive, Fort</p>
            <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Ready to join our mission? Let's work together to protect Mumbai's coastline!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-colors duration-200">
              Become a Volunteer
            </button>
            <button className="border-2 border-sky-500 text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors duration-200">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};