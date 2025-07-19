import React, { useState } from 'react';
import { Sparkles, Share2, Calendar, BarChart3, Edit3, Download, Copy, Twitter, Facebook, Instagram } from 'lucide-react';

interface ContentItem {
  id: string;
  type: 'post' | 'flyer' | 'report';
  title: string;
  content: string;
  platform?: string;
  scheduled?: string;
  engagement?: {
    likes: number;
    shares: number;
    comments: number;
  };
  status: 'draft' | 'scheduled' | 'published';
}

export const ContentCraft: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'generate' | 'manage' | 'analytics'>('generate');
  const [selectedContentType, setSelectedContentType] = useState<'post' | 'flyer' | 'report'>('post');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      type: 'post',
      title: 'Juhu Beach Cleanup Success',
      content: '🌊 Amazing turnout at today\'s Juhu Beach cleanup! 45 volunteers collected 25kg of plastic waste. Together we\'re making Mumbai\'s coastline cleaner! #CleanCoast #MumbaiCleanup #OceanConservation',
      platform: 'Twitter',
      scheduled: '2024-03-15T10:00:00',
      engagement: { likes: 247, shares: 89, comments: 34 },
      status: 'published'
    },
    {
      id: '2',
      type: 'flyer',
      title: 'Marine Drive Cleanup Event',
      content: 'Join us for a dawn cleanup at Marine Drive! March 20, 6:30 AM. Registration required. Bring your friends and family!',
      status: 'draft'
    },
    {
      id: '3',
      type: 'report',
      title: 'Monthly Impact Report - March',
      content: 'Comprehensive analysis of March cleanup activities, volunteer participation, and environmental impact metrics.',
      status: 'scheduled'
    }
  ];

  const renderGenerate = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">AI Content Generator</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { type: 'post', label: 'Social Media Post', icon: Share2, color: 'from-blue-500 to-cyan-500' },
            { type: 'flyer', label: 'Event Flyer', icon: Edit3, color: 'from-green-500 to-teal-500' },
            { type: 'report', label: 'Impact Report', icon: BarChart3, color: 'from-purple-500 to-pink-500' }
          ].map(({ type, label, icon: Icon, color }) => (
            <button
              key={type}
              onClick={() => setSelectedContentType(type as any)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedContentType === type
                  ? 'border-sky-500 bg-sky-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900">{label}</h4>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Data</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
              <option>Juhu Beach Cleanup - March 15</option>
              <option>Marine Drive Cleanup - March 20</option>
              <option>Versova Beach Cleanup - March 25</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
              <option>Twitter</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>LinkedIn</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Context</label>
          <textarea
            rows={3}
            placeholder="Add any specific details or tone preferences..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-3 rounded-lg hover:from-sky-600 hover:to-cyan-600 transition-colors duration-200 flex items-center justify-center space-x-2">
          <Sparkles className="w-5 h-5" />
          <span>Generate Content</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Generated Content Preview</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">CC</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">CleanCoast</h4>
              <p className="text-sm text-gray-600">@cleancoast_mumbai</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="text-gray-800 mb-3">
              🌊 Incredible results from today's Juhu Beach cleanup! Our amazing team of 45 volunteers collected 25kg of plastic waste in just 3 hours. Every piece of trash removed is a victory for our ocean! 🐠
            </p>
            <p className="text-sky-600 font-medium">
              #CleanCoast #MumbaiCleanup #OceanConservation #PlasticFree #CommunityAction
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>📱 Twitter • 278 characters</span>
              <span>🎯 Optimal posting time: 10:00 AM</span>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                <Copy className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                <Edit3 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderManage = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Content Management</h3>
        <div className="flex space-x-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>All Content</option>
            <option>Social Posts</option>
            <option>Flyers</option>
            <option>Reports</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>All Status</option>
            <option>Draft</option>
            <option>Scheduled</option>
            <option>Published</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {contentItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    item.type === 'post' ? 'bg-blue-100 text-blue-600' :
                    item.type === 'flyer' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {item.type === 'post' ? <Share2 className="w-4 h-4" /> :
                     item.type === 'flyer' ? <Edit3 className="w-4 h-4" /> :
                     <BarChart3 className="w-4 h-4" />}
                  </div>
                  <span className="text-xs font-medium text-gray-500 uppercase">{item.type}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'published' ? 'bg-green-100 text-green-800' :
                  item.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {item.status}
                </span>
              </div>

              <h4 className="font-semibold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.content}</p>

              {item.platform && (
                <div className="flex items-center space-x-2 mb-3">
                  {item.platform === 'Twitter' && <Twitter className="w-4 h-4 text-blue-400" />}
                  {item.platform === 'Facebook' && <Facebook className="w-4 h-4 text-blue-600" />}
                  {item.platform === 'Instagram' && <Instagram className="w-4 h-4 text-pink-500" />}
                  <span className="text-xs text-gray-500">{item.platform}</span>
                </div>
              )}

              {item.scheduled && (
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500">
                    {new Date(item.scheduled).toLocaleDateString()} at {new Date(item.scheduled).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              )}

              {item.engagement && (
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>❤️ {item.engagement.likes}</span>
                  <span>🔄 {item.engagement.shares}</span>
                  <span>💬 {item.engagement.comments}</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <button className="text-xs text-sky-600 hover:text-sky-700 font-medium transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Total Reach</p>
              <p className="text-3xl font-bold">45.2K</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Engagement Rate</p>
              <p className="text-3xl font-bold">8.4%</p>
            </div>
            <Share2 className="w-8 h-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Posts Published</p>
              <p className="text-3xl font-bold">127</p>
            </div>
            <Edit3 className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Growth Rate</p>
              <p className="text-3xl font-bold">+23%</p>
            </div>
            <Sparkles className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Platform Performance</h4>
          <div className="space-y-4">
            {[
              { platform: 'Twitter', reach: '18.5K', engagement: '9.2%', color: 'bg-blue-500' },
              { platform: 'Facebook', reach: '15.3K', engagement: '7.8%', color: 'bg-blue-600' },
              { platform: 'Instagram', reach: '11.4K', engagement: '12.1%', color: 'bg-pink-500' },
              { platform: 'LinkedIn', reach: '8.2K', engagement: '5.4%', color: 'bg-blue-700' }
            ].map((item) => (
              <div key={item.platform} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="font-medium text-gray-900">{item.platform}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Reach: {item.reach}</span>
                  <span>Engagement: {item.engagement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Content Performance</h4>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-sky-600 mx-auto mb-2" />
              <p className="text-gray-600">Engagement trends over time</p>
              <p className="text-sm text-gray-500">Interactive performance chart</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">AI Content Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h5 className="font-semibold text-blue-800 mb-2">📈 Best Performing Content</h5>
            <p className="text-blue-700 text-sm">Posts with cleanup photos get 34% more engagement</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h5 className="font-semibold text-green-800 mb-2">⏰ Optimal Timing</h5>
            <p className="text-green-700 text-sm">Post between 9-11 AM for maximum reach</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h5 className="font-semibold text-purple-800 mb-2">🎯 Audience Insight</h5>
            <p className="text-purple-700 text-sm">Environmental hashtags increase engagement by 28%</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ContentCraft AI</h1>
        <p className="text-xl text-gray-600">Auto-generate engaging social media content, flyers, and reports</p>
      </div>

      <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'generate', label: 'Generate', icon: Sparkles },
          { id: 'manage', label: 'Manage', icon: Edit3 },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 }
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

      {activeTab === 'generate' && renderGenerate()}
      {activeTab === 'manage' && renderManage()}
      {activeTab === 'analytics' && renderAnalytics()}
    </div>
  );
};