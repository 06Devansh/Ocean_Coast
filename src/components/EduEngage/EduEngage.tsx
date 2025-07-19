import React, { useState } from 'react';
import { MessageCircle, Send, BookOpen, Award, HelpCircle, Lightbulb, Star } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'quiz' | 'tip';
}

interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
}

export const EduEngage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m EduBot, your AI assistant for beach cleanup education. I can help you with safety tips, waste handling guidelines, and fun quizzes. What would you like to learn about today?',
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [activeTab, setActiveTab] = useState<'chat' | 'quiz' | 'tips'>('chat');

  const quizzes: Quiz[] = [
    {
      id: '1',
      question: 'What is the most common type of plastic waste found on beaches?',
      options: ['Plastic bags', 'Bottle caps', 'Straws', 'Cigarette butts'],
      correctAnswer: 3,
      explanation: 'Cigarette butts are the most common form of litter found on beaches worldwide, containing plastic filters that don\'t biodegrade.',
      points: 50
    },
    {
      id: '2',
      question: 'How long does it take for a plastic bottle to decompose in the ocean?',
      options: ['50 years', '100 years', '450 years', '1000 years'],
      correctAnswer: 2,
      explanation: 'Plastic bottles can take up to 450 years to decompose in marine environments, making them a long-term threat to ocean health.',
      points: 75
    },
    {
      id: '3',
      question: 'Which tool is most effective for picking up small debris?',
      options: ['Grabber tool', 'Rake', 'Shovel', 'Hands with gloves'],
      correctAnswer: 0,
      explanation: 'Grabber tools allow you to pick up small debris without bending and provide better reach for hard-to-access areas.',
      points: 25
    }
  ];

  const tips = [
    {
      id: '1',
      title: 'Safety First',
      content: 'Always wear gloves and closed-toe shoes. Be aware of sharp objects and hazardous materials.',
      icon: '🦺'
    },
    {
      id: '2',
      title: 'Proper Sorting',
      content: 'Separate recyclables from non-recyclables. Use different bags for different types of waste.',
      icon: '♻️'
    },
    {
      id: '3',
      title: 'Hydration',
      content: 'Bring plenty of water and take regular breaks, especially during hot weather.',
      icon: '💧'
    },
    {
      id: '4',
      title: 'Wildlife Protection',
      content: 'Don\'t disturb nesting birds or marine life. Report any injured animals to authorities.',
      icon: '🐢'
    },
    {
      id: '5',
      title: 'Sun Protection',
      content: 'Use sunscreen, wear a hat, and protective clothing. Early morning cleanups are ideal.',
      icon: '☀️'
    },
    {
      id: '6',
      title: 'Data Collection',
      content: 'Log the types and quantities of waste collected to help track pollution patterns.',
      icon: '📊'
    }
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    let response = '';

    if (input.includes('safety') || input.includes('safe')) {
      response = 'Here are some key safety tips for beach cleanups:\n\n• Always wear gloves and closed-toe shoes\n• Be cautious of sharp objects like glass or metal\n• Stay hydrated and take breaks\n• Apply sunscreen regularly\n• Never handle hazardous materials directly\n• Work in pairs when possible\n\nWould you like more specific safety information?';
    } else if (input.includes('waste') || input.includes('sorting')) {
      response = 'Proper waste sorting is crucial for effective cleanups:\n\n• Separate recyclables (plastic bottles, cans, paper)\n• Collect non-recyclables in different bags\n• Handle hazardous items with extra care\n• Note unusual or dangerous items for authorities\n• Weigh and log different waste types\n\nWant to take a quiz about waste sorting?';
    } else if (input.includes('quiz') || input.includes('test')) {
      response = 'Great! I have some educational quizzes that can help you learn while earning points. Check out the Quiz tab to test your knowledge about beach conservation, marine life, and cleanup best practices. Each correct answer earns you points for your gamification profile!';
    } else if (input.includes('plastic') || input.includes('pollution')) {
      response = 'Plastic pollution is a major threat to our oceans:\n\n• 8 million tons of plastic enter oceans annually\n• Microplastics are found in marine food chains\n• Plastic takes 450+ years to decompose\n• It harms marine life through ingestion and entanglement\n• Prevention through cleanups and reduction is key\n\nWould you like to learn about specific types of plastic waste?';
    } else {
      response = 'I can help you with:\n\n🦺 Safety guidelines for beach cleanups\n♻️ Waste sorting and handling tips\n🌊 Marine conservation facts\n🎯 Quiz questions to test your knowledge\n📊 Data collection best practices\n\nWhat would you like to explore?';
    }

    return {
      id: Date.now().toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    };
  };

  const renderChat = () => (
    <div className="flex flex-col h-96">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.sender === 'user'
                ? 'bg-sky-500 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}>
              <p className="text-sm whitespace-pre-line">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me about beach cleanup safety, waste handling, or marine conservation..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-200"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderQuiz = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Quiz</h3>
        <p className="text-gray-600">Test your beach cleanup and marine conservation knowledge</p>
      </div>
      
      {quizzes.map((quiz, index) => (
        <div key={quiz.id} className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-md font-semibold text-gray-900">Question {index + 1}</h4>
            <div className="flex items-center space-x-1 text-sm text-orange-600">
              <Star className="w-4 h-4" />
              <span>{quiz.points} points</span>
            </div>
          </div>
          
          <p className="text-gray-800 mb-4">{quiz.question}</p>
          
          <div className="space-y-2 mb-4">
            {quiz.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-gray-700">{String.fromCharCode(65 + optionIndex)}.</span> {option}
              </button>
            ))}
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Answer:</strong> {String.fromCharCode(65 + quiz.correctAnswer)}. {quiz.options[quiz.correctAnswer]}
            </p>
            <p className="text-sm text-blue-700 mt-2">{quiz.explanation}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTips = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Tips</h3>
        <p className="text-gray-600">Essential knowledge for effective beach cleanups</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip) => (
          <div key={tip.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{tip.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-600">{tip.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">EduEngage Chatbot</h1>
        <p className="text-xl text-gray-600">AI assistant for beach cleanup education, safety tips, and interactive learning</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex space-x-1 p-1 bg-gray-50">
            {[
              { id: 'chat', label: 'Chat Assistant', icon: MessageCircle },
              { id: 'quiz', label: 'Knowledge Quiz', icon: HelpCircle },
              { id: 'tips', label: 'Expert Tips', icon: Lightbulb }
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
        </div>

        <div className="p-6">
          {activeTab === 'chat' && renderChat()}
          {activeTab === 'quiz' && renderQuiz()}
          {activeTab === 'tips' && renderTips()}
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-lg p-6 border border-sky-200">
        <div className="flex items-center space-x-3 mb-3">
          <Award className="w-6 h-6 text-sky-600" />
          <h3 className="text-lg font-semibold text-sky-800">Gamification Integration</h3>
        </div>
        <p className="text-sky-700">
          Earn points through quiz completion and interactive learning! Your progress contributes to your overall CleanCoast score and unlocks new badges in the Volunteer Hub.
        </p>
      </div>
    </div>
  );
};