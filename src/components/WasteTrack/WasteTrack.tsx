import React, { useState } from 'react';
import { BarChart3, Mic, Plus, Trash2, Map, TrendingUp, PieChart, Download } from 'lucide-react';

interface WasteData {
  id: string;
  type: string;
  quantity: number;
  weight: number;
  location: string;
  date: string;
  volunteerId: string;
}

export const WasteTrack: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [activeView, setActiveView] = useState<'overview' | 'log' | 'analytics'>('overview');

  const wasteData: WasteData[] = [
    { id: '1', type: 'Plastic Bottles', quantity: 45, weight: 2.3, location: 'Juhu Beach', date: '2024-03-10', volunteerId: '1' },
    { id: '2', type: 'Cigarette Butts', quantity: 120, weight: 0.5, location: 'Marine Drive', date: '2024-03-11', volunteerId: '2' },
    { id: '3', type: 'Food Wrappers', quantity: 78, weight: 1.2, location: 'Versova Beach', date: '2024-03-12', volunteerId: '3' },
    { id: '4', type: 'Fishing Nets', quantity: 3, weight: 8.5, location: 'Worli Seaface', date: '2024-03-13', volunteerId: '4' },
  ];

  const wasteTypes = [
    { name: 'Plastic Bottles', count: 245, percentage: 35, color: 'bg-blue-500' },
    { name: 'Cigarette Butts', count: 180, percentage: 25, color: 'bg-red-500' },
    { name: 'Food Wrappers', count: 120, percentage: 18, color: 'bg-yellow-500' },
    { name: 'Fishing Nets', count: 85, percentage: 12, color: 'bg-green-500' },
    { name: 'Others', count: 70, percentage: 10, color: 'bg-gray-500' },
  ];

  const handleVoiceLogging = () => {
    setIsRecording(!isRecording);
    // Voice logging functionality would be implemented here
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
      }, 3000);
    }
  };

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Total Items</p>
              <p className="text-3xl font-bold">1,247</p>
            </div>
            <Trash2 className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Total Weight</p>
              <p className="text-3xl font-bold">87.5kg</p>
            </div>
            <BarChart3 className="w-8 h-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Locations</p>
              <p className="text-3xl font-bold">12</p>
            </div>
            <Map className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">This Month</p>
              <p className="text-3xl font-bold">+23%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Waste Composition</h3>
          <div className="space-y-4">
            {wasteTypes.map((type) => (
              <div key={type.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{type.name}</span>
                  <span className="text-sm text-gray-500">{type.count} items ({type.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${type.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${type.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">AI Insights</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Hotspot Alert</h4>
              <p className="text-blue-700 text-sm">Juhu Beach shows 40% increase in plastic bottle waste</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">📈 Trend Analysis</h4>
              <p className="text-green-700 text-sm">Cigarette butt collection improved by 25% this month</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">🔍 Recommendation</h4>
              <p className="text-purple-700 text-sm">Focus next cleanup on Marine Drive fishing net debris</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Waste Heatmap</h3>
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 h-64 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Map className="w-12 h-12 text-sky-600 mx-auto mb-2" />
            <p className="text-gray-600">Interactive heatmap showing waste density</p>
            <p className="text-sm text-gray-500">AI-powered visualization of cleanup patterns</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLogging = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Voice Logging</h3>
          <button
            onClick={handleVoiceLogging}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              isRecording 
                ? 'bg-red-500 text-white' 
                : 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-600 hover:to-cyan-600'
            }`}
          >
            <Mic className={`w-5 h-5 ${isRecording ? 'animate-pulse' : ''}`} />
            <span>{isRecording ? 'Recording...' : 'Start Recording'}</span>
          </button>
        </div>
        
        {isRecording && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-700 font-medium">Listening... Say something like "15 plastic bottles, 2 kilograms"</span>
            </div>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-700 mb-2">Voice Commands</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>• "10 plastic bottles"</div>
            <div>• "5 kilograms of fishing nets"</div>
            <div>• "50 cigarette butts at Marine Drive"</div>
            <div>• "3 food wrappers, 200 grams"</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Manual Entry</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            <Plus className="w-4 h-4" />
            <span>Add Entry</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Waste type"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Quantity"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            step="0.1"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Location"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Logs</h3>
        <div className="space-y-4">
          {wasteData.map((entry) => (
            <div key={entry.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">{entry.type}</h4>
                <p className="text-sm text-gray-600">{entry.location} • {entry.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{entry.quantity} items</p>
                <p className="text-sm text-gray-600">{entry.weight} kg</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Analytics Dashboard</h3>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Waste Trends</h4>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-sky-600 mx-auto mb-2" />
              <p className="text-gray-600">Interactive trend chart</p>
              <p className="text-sm text-gray-500">Showing waste collection over time</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Location Analysis</h4>
          <div className="h-64 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-teal-600 mx-auto mb-2" />
              <p className="text-gray-600">Distribution by location</p>
              <p className="text-sm text-gray-500">AI-powered location insights</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Auto-Generated Report</h4>
        <div className="bg-gray-50 rounded-lg p-6">
          <h5 className="font-semibold text-gray-800 mb-3">Monthly Cleanup Summary - March 2024</h5>
          <div className="prose prose-sm text-gray-700">
            <p className="mb-3">
              This month's cleanup operations showed significant improvements across all key metrics. 
              Our AI analysis reveals that plastic bottle collection increased by 23% compared to last month, 
              primarily driven by enhanced volunteer participation at Juhu Beach.
            </p>
            <p className="mb-3">
              <strong>Key Highlights:</strong>
            </p>
            <ul className="list-disc list-inside mb-3">
              <li>Total waste collected: 87.5kg across 12 locations</li>
              <li>Most impactful location: Marine Drive (35% of total collection)</li>
              <li>Volunteer efficiency improved by 18%</li>
              <li>New hotspot identified: Worli Seaface fishing debris</li>
            </ul>
            <p>
              Recommendations for next month include increasing focus on cigarette butt collection 
              and deploying additional resources to newly identified hotspots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">WasteTrack Analytics</h1>
        <p className="text-xl text-gray-600">Voice-powered logging with AI insights and comprehensive analytics</p>
      </div>

      <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'log', label: 'Data Logging', icon: Mic },
          { id: 'analytics', label: 'Analytics', icon: TrendingUp }
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

      {activeView === 'overview' && renderOverview()}
      {activeView === 'log' && renderLogging()}
      {activeView === 'analytics' && renderAnalytics()}
    </div>
  );
};