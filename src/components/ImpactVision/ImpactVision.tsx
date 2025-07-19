import React, { useState } from 'react';
import { Trophy, TrendingUp, Users, Target, Download, Filter, Star, Award, Crown } from 'lucide-react';

interface ImpactMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface LeaderboardEntry {
  id: string;
  name: string;
  type: 'individual' | 'organization';
  score: number;
  wasteCollected: number;
  eventsOrganized: number;
  volunteersRecruited: number;
  rank: number;
}

export const ImpactVision: React.FC = () => {
  const [activeView, setActiveView] = useState<'overview' | 'personal' | 'leaderboard'>('overview');
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');

  const impactMetrics: ImpactMetric[] = [
    {
      id: '1',
      title: 'Total Waste Removed',
      value: '2,847 kg',
      change: '+23%',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2',
      title: 'Volunteer Hours',
      value: '15,420 hrs',
      change: '+18%',
      icon: Users,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: '3',
      title: 'CO2 Prevented',
      value: '1,234 kg',
      change: '+31%',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '4',
      title: 'Beach Area Cleaned',
      value: '45.2 km²',
      change: '+15%',
      icon: Trophy,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const leaderboard: LeaderboardEntry[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      type: 'individual',
      score: 2450,
      wasteCollected: 125,
      eventsOrganized: 8,
      volunteersRecruited: 23,
      rank: 1
    },
    {
      id: '2',
      name: 'Mumbai Eco Warriors',
      type: 'organization',
      score: 2200,
      wasteCollected: 340,
      eventsOrganized: 15,
      volunteersRecruited: 89,
      rank: 2
    },
    {
      id: '3',
      name: 'Rajesh Kumar',
      type: 'individual',
      score: 1980,
      wasteCollected: 98,
      eventsOrganized: 5,
      volunteersRecruited: 12,
      rank: 3
    },
    {
      id: '4',
      name: 'Coastal Guardians',
      type: 'organization',
      score: 1850,
      wasteCollected: 210,
      eventsOrganized: 12,
      volunteersRecruited: 45,
      rank: 4
    },
    {
      id: '5',
      name: 'Anita Patel',
      type: 'individual',
      score: 1720,
      wasteCollected: 87,
      eventsOrganized: 4,
      volunteersRecruited: 18,
      rank: 5
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.id} className={`bg-gradient-to-br ${metric.color} text-white rounded-lg p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">{metric.title}</p>
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <p className="text-white/80 text-sm mt-1">{metric.change} from last month</p>
                </div>
                <Icon className="w-8 h-8 text-white/80" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Impact</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Marine Life Protected</span>
                <span className="text-2xl">🐠</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Estimated 2,340 marine animals saved</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Plastic Pollution Reduced</span>
                <span className="text-2xl">♻️</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">1,890 kg plastic diverted from ocean</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Carbon Footprint Reduction</span>
                <span className="text-2xl">🌱</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">1,234 kg CO2 emissions prevented</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Community Growth</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-blue-800">Active Volunteers</h4>
                <p className="text-2xl font-bold text-blue-900">1,247</p>
              </div>
              <div className="text-blue-600">
                <Users className="w-8 h-8" />
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-green-800">Organizations Joined</h4>
                <p className="text-2xl font-bold text-green-900">89</p>
              </div>
              <div className="text-green-600">
                <Trophy className="w-8 h-8" />
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-purple-800">Events Completed</h4>
                <p className="text-2xl font-bold text-purple-900">156</p>
              </div>
              <div className="text-purple-600">
                <Target className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Impact Visualization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-sky-600 mx-auto mb-2" />
              <p className="text-gray-600">Waste Collection Trends</p>
              <p className="text-sm text-gray-500">Monthly progress tracking</p>
            </div>
          </div>
          
          <div className="h-64 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Target className="w-12 h-12 text-teal-600 mx-auto mb-2" />
              <p className="text-gray-600">Geographic Impact Map</p>
              <p className="text-sm text-gray-500">Cleanup coverage visualization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPersonal = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-sky-500 to-cyan-600 text-white rounded-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-2">Your Impact Scorecard</h3>
            <p className="text-sky-100">Personal environmental contribution summary</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">2,450</div>
            <div className="text-sky-100">Total Impact Points</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Waste Collected</h4>
            <Target className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">125 kg</div>
          <div className="text-sm text-gray-600">Across 15 cleanup events</div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">78% of annual goal</div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Volunteer Hours</h4>
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">89 hrs</div>
          <div className="text-sm text-gray-600">Time contributed to cleanups</div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">65% of annual goal</div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-900">CO2 Prevented</h4>
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">45 kg</div>
          <div className="text-sm text-gray-600">Carbon emissions prevented</div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">92% of annual goal</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Achievement Badges</h4>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Eco Warrior', level: 'Gold', icon: '🌱', unlocked: true },
              { name: 'Beach Guardian', level: 'Silver', icon: '🏖️', unlocked: true },
              { name: 'Ocean Protector', level: 'Bronze', icon: '🌊', unlocked: true },
              { name: 'Waste Hunter', level: 'Gold', icon: '🎯', unlocked: false },
              { name: 'Community Leader', level: 'Silver', icon: '👑', unlocked: false },
              { name: 'Green Champion', level: 'Platinum', icon: '🏆', unlocked: false }
            ].map((badge) => (
              <div key={badge.name} className={`p-4 rounded-lg border-2 ${
                badge.unlocked 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="text-center">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <h5 className={`font-semibold text-sm ${badge.unlocked ? 'text-green-800' : 'text-gray-500'}`}>
                    {badge.name}
                  </h5>
                  <p className={`text-xs ${badge.unlocked ? 'text-green-600' : 'text-gray-400'}`}>
                    {badge.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Monthly Progress</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Events Attended</span>
              <span className="text-lg font-bold text-blue-900">5 / 6</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Waste Collected</span>
              <span className="text-lg font-bold text-green-900">28 kg</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">New Volunteers</span>
              <span className="text-lg font-bold text-purple-900">3</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span className="text-sm font-medium text-orange-800">Points Earned</span>
              <span className="text-lg font-bold text-orange-900">340</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLeaderboard = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Global Leaderboard</h3>
        <div className="flex space-x-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>All Categories</option>
            <option>Individuals</option>
            <option>Organizations</option>
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-200">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white">
          <h4 className="text-lg font-semibold">Top Performers</h4>
          <p className="text-sky-100">Making the biggest impact in beach conservation</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {leaderboard.map((entry, index) => (
              <div key={entry.id} className={`flex items-center justify-between p-4 rounded-lg ${
                index === 0 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200' :
                index === 1 ? 'bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200' :
                index === 2 ? 'bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200' :
                'bg-gray-50 border border-gray-100'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                    index === 0 ? 'bg-yellow-500 text-white' :
                    index === 1 ? 'bg-gray-400 text-white' :
                    index === 2 ? 'bg-orange-500 text-white' :
                    'bg-gray-300 text-gray-700'
                  }`}>
                    {index === 0 ? <Crown className="w-6 h-6" /> :
                     index === 1 ? <Award className="w-6 h-6" /> :
                     index === 2 ? <Star className="w-6 h-6" /> :
                     entry.rank}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{entry.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        entry.type === 'organization' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {entry.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {entry.wasteCollected}kg • {entry.eventsOrganized} events • {entry.volunteersRecruited} volunteers
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-lg">{entry.score}</p>
                  <p className="text-sm text-gray-600">impact points</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-sky-500 to-cyan-600 text-white rounded-lg p-6">
        <h4 className="text-lg font-semibold mb-3">Your Ranking</h4>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">#1</p>
            <p className="text-sky-100">Individual Category</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">2,450 pts</p>
            <p className="text-sky-100">125 pts ahead of #2</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ImpactVision Dashboard</h1>
        <p className="text-xl text-gray-600">Comprehensive metrics, scorecards, and community leaderboards</p>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'overview', label: 'Overview', icon: TrendingUp },
            { id: 'personal', label: 'Personal', icon: Users },
            { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveView(id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                activeView === id
                  ? 'bg-white shadow-sm text-sky-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      {activeView === 'overview' && renderOverview()}
      {activeView === 'personal' && renderPersonal()}
      {activeView === 'leaderboard' && renderLeaderboard()}
    </div>
  );
};