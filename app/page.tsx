import React from 'react';
import { ArrowRight, Beaker, Calculator, Zap } from 'lucide-react';
import EssayCard from '@/components/EssayCard';

export default function HomePage() {
  const essays = [
    {
      title: "🚇 Train Tunnel Air Displacement Analysis",
      description: "Traingo through tunnel. Air go whoosh",
      category: ["physics", "meteorology"] as const,
      status: "coming-soon" as const,
      slug: "train-tunnel-airflow",
      featured: true
    },
    {
      title: "🐢 Turtle Shell Acoustics",
      description: "Turtle shell acoustics.",
      category: ["biology"] as const,
      status: "coming-soon" as const,
      slug: "turtle-acoustics"
    },
    {
      title: "Something to do with stick bugs.",
      description: "Stick bug + leaves = ?",
      category: ["physics", "biology"] as const, 
      status: "coming-soon" as const,
      slug: "stick-bug-leaves"
    },
    {
      title: "Place Holder 1",
      description: "Place Holder?HUHHH?",
      category: ["meteorology", "physics"] as const,
      status: "coming-soon" as const,
      slug: "place-holder-1",
      featured: false
    },
    {
      title: "Place Holder 2",
      description: "Holding the place. But number 2",
      category: ["computer science", "physics"] as const,
      status: "coming-soon" as const,
      slug: "place-holder-2",
      featured: false
    },
    {
      title: "Checking Live Edits on Local Host",
      description: "PLace Holder 3 you sayyyy? MMMMMMmmmm.",
      category: ["meteorology", "biology"] as const,
      status: "coming-soon" as const,
      slug: "place-holder-3",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="font-bold text-2xl text-gray-900">
              WellOkDen.xyz
            </div>
            <div className="flex items-center space-x-6">
              <a href="#essays" className="text-gray-600 hover:text-gray-900 transition-colors">Essays</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Suggest a Question
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Absurd Questions.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                Serious Simulations.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A place where curiosity meets rigorous science. We tackle the questions nobody asked 
              but everyone secretly wondered about, using real physics, biology, and engineering to find surprisingly serious answers.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Beaker className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">Scientific Method</span>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Calculator className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-medium">Real Mathematics</span>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Zap className="w-5 h-5 text-purple-500" />
              <span className="text-gray-700 font-medium">Interactive Results</span>
            </div>
          </div>

          <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore the Absurdity
          </button>
        </div>
      </section>

      {/* Essays Section */}
      <section id="essays" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Investigations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each essay combines rigorous scientific methodology with questions that make you go "wait, what?" 
            Click to explore our interactive simulations and surprising findings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essays.map((essay, index) => (
            <div key={index}>
              <EssayCard {...essay} />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Philosophy</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Why should serious science only tackle serious questions? Some of the most interesting discoveries 
              come from asking "what if?" about seemingly silly things. Every investigation here uses real scientific 
              methods, peer-reviewed sources, and rigorous mathematical modeling—we just happen to apply them to 
              train tunnel air displacement and turtle shell acoustics.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Think of it as <strong>The Mythbusters meets Nature</strong>, with interactive visualizations 
              that let you explore the results yourself. Because the best way to understand science is to play with it.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © 2024 WellOkDen.xyz - Where absurdity meets methodology
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}