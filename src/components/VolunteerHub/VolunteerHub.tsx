import React, { useState } from 'react';
import { Users, Trophy, Star, Award, Gamepad2, MapPin, Clock, Target } from 'lucide-react';

interface Volunteer {
  id: string;
  name: string;
  points: number;
  level: number;
  badges: string[];
  eventsAttended: number;
  wasteCollected: number;
  rank: number;
}

export const VolunteerHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'game' | 'leaderboard'>('dashboard');

  const volunteers: Volunteer[] = [
    { id: '1', name: 'Priya Sharma', points: 2450, level: 8, badges: ['Eco Warrior', 'Beach Guardian', 'Clean Streak'], eventsAttended: 15, wasteCollected: 125, rank: 1 },
    { id: '2', name: 'Rajesh Kumar', points: 2200, level: 7, badges: ['Eco Warrior', 'Waste Hunter'], eventsAttended: 12, wasteCollected: 98, rank: 2 },
    { id: '3', name: 'Anita Patel', points: 1980, level: 6, badges: ['Beach Guardian', 'Team Player'], eventsAttended: 10, wasteCollected: 87, rank: 3 },
    { id: '4', name: 'Mumbai Eco Club', points: 1750, level: 6, badges: ['Community Leader'], eventsAttended: 8, wasteCollected: 76, rank: 4 },
    { id: '5', name: 'Coastal Warriors', points: 1650, level: 5, badges: ['Eco Warrior'], eventsAttended: 9, wasteCollected: 65, rank: 5 },
  ];

  const currentUser = volunteers[0];

  const availableBadges = [
    { name: 'Eco Warrior', description: 'Attend 10+ cleanup events', icon: '🌱', unlocked: true },
    { name: 'Beach Guardian', description: 'Collect 100kg+ waste', icon: '🏖️', unlocked: true },
    { name: 'Clean Streak', description: '5 consecutive events', icon: '🔥', unlocked: true },
    { name: 'Waste Hunter', description: 'Log 50+ waste items', icon: '🎯', unlocked: false },
    { name: 'Community Leader', description: 'Organize 3+ events', icon: '👑', unlocked: false },
    { name: 'Ocean Protector', description: 'Remove 200kg+ waste', icon: '🌊', unlocked: false },
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-sky-500 to-cyan-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sky-100">Total Points</p>
              <p className="text-3xl font-bold">{currentUser.points.toLocaleString()}</p>
            </div>
            <Star className="w-8 h-8 text-sky-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Level</p>
              <p className="text-3xl font-bold">{currentUser.level}</p>
            </div>
            <Trophy className="w-8 h-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Events Attended</p>
              <p className="text-3xl font-bold">{currentUser.eventsAttended}</p>
            </div>
            <Users className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Waste Collected</p>
              <p className="text-3xl font-bold">{currentUser.wasteCollected}kg</p>
            </div>
            <Target className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Badges</h3>
          <div className="grid grid-cols-2 gap-4">
            {availableBadges.map((badge) => (
              <div key={badge.name} className={`p-4 rounded-lg border-2 ${
                badge.unlocked 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="text-center">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <h4 className={`font-semibold ${badge.unlocked ? 'text-green-800' : 'text-gray-500'}`}>
                    {badge.name}
                  </h4>
                  <p className={`text-xs ${badge.unlocked ? 'text-green-600' : 'text-gray-400'}`}>
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">AI Recommendations</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Suggested Events</h4>
              <p className="text-blue-700 text-sm">Marine Drive cleanup matches your availability and interests</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">🏆 Next Badge Goal</h4>
              <p className="text-green-700 text-sm">Attend 2 more events to unlock "Waste Hunter" badge</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">📍 Nearby Opportunities</h4>
              <p className="text-purple-700 text-sm">3 cleanup events within 5km this weekend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGame = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">ShoreSprint</h3>
            <p className="text-cyan-100">Your virtual beach cleanup game</p>
          </div>
          <Gamepad2 className="w-12 h-12 text-cyan-200" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">Beach Cleanliness</h4>
            <div className="w-full bg-white/30 rounded-full h-3">
              <div className="bg-green-400 h-3 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <p className="text-sm text-cyan-100 mt-1">78% Clean</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">Marine Life</h4>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🐠</span>
              <span className="text-2xl">🐢</span>
              <span className="text-2xl">🦀</span>
            </div>
            <p className="text-sm text-cyan-100 mt-1">Healthy ecosystem</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">Daily Streak</h4>
            <p className="text-2xl font-bold">7 days</p>
            <p className="text-sm text-cyan-100">Keep it up!</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Game Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Virtual Beach Status</h4>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 h-32 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🏖️</div>
                <p className="text-sm text-gray-600">Your cleanups are making a difference!</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Achievements</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                <span className="text-sm">Plastic Patrol</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Complete</span>
              </div>
              <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                <span className="text-sm">Ocean Guardian</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">In Progress</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <span className="text-sm">Eco Champion</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Locked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLeaderboard = () => (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">Community Leaderboard</h3>
        <p className="text-gray-600">Top performers this month</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {volunteers.map((volunteer, index) => (
            <div key={volunteer.id} className={`flex items-center justify-between p-4 rounded-lg ${
              index === 0 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' :
              index === 1 ? 'bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200' :
              index === 2 ? 'bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200' :
              'bg-gray-50'
            }`}>
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  index === 0 ? 'bg-yellow-500 text-white' :
                  index === 1 ? 'bg-gray-400 text-white' :
                  index === 2 ? 'bg-orange-500 text-white' :
                  'bg-gray-300 text-gray-700'
                }`}>
                  {volunteer.rank}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{volunteer.name}</h4>
                  <p className="text-sm text-gray-600">Level {volunteer.level}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{volunteer.points} pts</p>
                <p className="text-sm text-gray-600">{volunteer.wasteCollected}kg collected</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Hub</h1>
        <p className="text-xl text-gray-600">Track your impact, earn rewards, and compete with the community</p>
      </div>

      <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: Users },
          { id: 'game', label: 'ShoreSprint', icon: Gamepad2 },
          { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === id
                ? 'bg-white shadow-sm text-sky-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'dashboard' && renderDashboard()}
      {activeTab === 'game' && renderGame()}
      {activeTab === 'leaderboard' && renderLeaderboard()}
    </div>
  );
};