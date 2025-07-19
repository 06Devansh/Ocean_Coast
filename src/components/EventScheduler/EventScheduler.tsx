import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Plus, Search, Filter, ChevronRight } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  volunteers: number;
  maxVolunteers: number;
  tools: string[];
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export const EventScheduler: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('all');

  const events: Event[] = [
    {
      id: '1',
      title: 'Juhu Beach Cleanup Drive',
      date: '2024-03-15',
      time: '07:00',
      location: 'Juhu Beach, Mumbai',
      volunteers: 45,
      maxVolunteers: 60,
      tools: ['Gloves', 'Trash bags', 'Picker tools'],
      description: 'Join us for a morning cleanup at Juhu Beach. We\'ll focus on plastic waste and marine debris.',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Marine Drive Coastal Cleanup',
      date: '2024-03-20',
      time: '06:30',
      location: 'Marine Drive, Mumbai',
      volunteers: 78,
      maxVolunteers: 100,
      tools: ['Gloves', 'Trash bags', 'Data sheets'],
      description: 'Early morning cleanup along Marine Drive with waste categorization and data collection.',
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Versova Beach Community Drive',
      date: '2024-03-10',
      time: '08:00',
      location: 'Versova Beach, Mumbai',
      volunteers: 32,
      maxVolunteers: 40,
      tools: ['Gloves', 'Trash bags', 'Weighing scale'],
      description: 'Community-led cleanup focusing on microplastics and fishing nets.',
      status: 'completed'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || event.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Scheduler</h1>
        <p className="text-xl text-gray-600">Create and manage beach cleanup events with AI-powered volunteer matching</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          >
            <option value="all">All Events</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-sky-600 hover:to-cyan-600 transition-colors duration-200 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Create Event</span>
          </button>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-8 border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">🤖 AI Recommendations</h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-700">• <strong>Optimal timing:</strong> 6:30-8:30 AM for maximum volunteer participation</p>
          <p className="text-gray-700">• <strong>Weather forecast:</strong> Clear skies expected for next weekend - perfect for cleanup</p>
          <p className="text-gray-700">• <strong>High-impact locations:</strong> Bandra-Worli Sea Link area shows increased debris patterns</p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                  event.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {event.status}
                </span>
              </div>

              <div className="flex items-center space-x-1 text-gray-600 mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{event.location}</span>
              </div>

              <p className="text-gray-700 mb-4">{event.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {event.volunteers}/{event.maxVolunteers} volunteers
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs font-medium text-white">{i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {event.tools.map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-sky-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(event.volunteers / event.maxVolunteers) * 100}%` }}
                  ></div>
                </div>
                <button className="ml-4 text-sky-600 hover:text-sky-700 transition-colors duration-200">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Map Placeholder */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Event Map</h3>
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 h-64 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-sky-600 mx-auto mb-2" />
            <p className="text-gray-600">Interactive map showing all cleanup locations</p>
            <p className="text-sm text-gray-500">Real-time event markers and volunteer density</p>
          </div>
        </div>
      </div>

      {/* Create Event Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Create New Event</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Event title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <input
                type="time"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <textarea
                placeholder="Event description"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-lg hover:from-sky-600 hover:to-cyan-600 transition-colors duration-200"
                >
                  Create Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};