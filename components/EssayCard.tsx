import React from 'react';
import { ArrowRight, Clock, Eye } from 'lucide-react';

interface EssayCardProps {
  title: string;
  description: string;
  category: readonly ('physics' | 'biology' | 'meteorology' | 'acoustics' 
    | 'astronomy' |'fluid dynamics' |'computer science')[];
  status?: 'live' | 'coming-soon';
  readTime?: string;
  slug?: string;
  featured?: boolean;
}

export default function EssayCard({ 
  title, 
  description, 
  category, 
  status = "coming-soon", 
  readTime = "5 min",
  slug,
  featured = false 
}: EssayCardProps) {
  const categoryColors = {
    'physics': "bg-blue-500",
    'biology': "bg-green-500", 
    'meteorology': "bg-cyan-500",
    'computer science': "bg-purple-500",
    'acoustics': "bg-orange-500",
    'astronomy': "bg-indigo-500",
    'fluid dynamics': "bg-teal-500"
  };

  const statusColors = {
    live: "text-green-600",
    'coming-soon': "text-yellow-600"
  };

  const statusIcons = {
    live: "🟢",
    'coming-soon': "🟡"
  };

  return (
    <div
      className={`
        bg-white rounded-xl shadow-lg p-6 cursor-pointer border border-gray-100 
        hover:shadow-2xl transition-all duration-300 relative overflow-hidden
        ${featured ? 'ring-2 ring-indigo-500 ring-opacity-50' : ''}
      `}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-l 
        from-indigo-500 to-purple-500 text-white px-3 py-1 text-xs 
        font-bold rounded-bl-lg">
          FEATURED
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-wrap gap-2">
          {category.map((cat, index) => (
            <span key={index} className={`px-3 py-1 rounded-full text-white text-sm font-medium ${categoryColors[cat]}`}>
              {cat}
            </span>
          ))}
        </div>
        {readTime && (
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{description}</p>
      
      <div className="flex items-center justify-between">
        <span className={`text-sm font-medium flex items-center space-x-1 ${statusColors[status]}`}>
          <span>{statusIcons[status]}</span>
          <span>{status === 'live' ? 'Live' : 'Coming Soon'}</span>
        </span>
        
        <div className="flex items-center space-x-2">
          {status === 'live' && (
            <Eye className="w-4 h-4 text-gray-400" />
          )}
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
        </div>
      </div>
      
      {/* Subtle background pattern for visual interest */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent opacity-50 rounded-full -translate-y-16 translate-x-16"></div>
    </div>
  );
}