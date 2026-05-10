import Link from 'next/link';
import React from 'react';
import Navigation from '@/components/Navigation';

interface Talk {
  id: number;
  title: string;
  summary: string;
  image: string;
  content: string;
}

const talks: Talk[] = [
  {
    id: 1,
    title: "Modern Web Development Trends",
    summary: "Exploring the latest technologies and best practices in web development.",
    image: "https://picsum.photos/seed/talk1/200/150.jpg",
    content: `
      <h2>Modern Web Development Trends</h2>
      <p>In this comprehensive talk, we explore the cutting-edge technologies that are shaping the future of web development. From advanced frameworks to innovative tools, we cover everything you need to stay ahead in this rapidly evolving field.</p>
      
      <h3>Key Topics Covered:</h3>
      <ul>
        <li>Next.js 15 and Server Components</li>
        <li>TypeScript advanced patterns</li>
        <li>Performance optimization techniques</li>
        <li>Modern CSS frameworks and utilities</li>
      </ul>
      
      <p>Whether you're a beginner or an experienced developer, this talk provides valuable insights into the current and future state of web development.</p>
    `
  },
  {
    id: 2,
    title: "Building Scalable Applications",
    summary: "Architectural patterns and strategies for creating applications that can handle growth.",
    image: "https://picsum.photos/seed/talk2/200/150.jpg",
    content: `
      <h2>Building Scalable Applications</h2>
      <p>Learn the essential architectural patterns and strategies needed to build applications that can scale effectively. This talk covers both technical and organizational aspects of scalability.</p>
      
      <h3>Core Concepts:</h3>
      <ul>
        <li>Microservices architecture</li>
        <li>Database scaling strategies</li>
        <li>Load balancing and caching</li>
        <li>Performance monitoring</li>
      </ul>
      
      <p>We'll dive deep into real-world examples and case studies from companies that have successfully scaled their applications to millions of users.</p>
    `
  }
];

export default function TalkPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const talkId = parseInt(resolvedParams.id);
  const talk = talks.find(t => t.id === talkId);

  if (!talk) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Charla no encontrada</h1>
          <p className="text-gray-600 mb-6">La charla que buscas no existe o ha sido eliminada.</p>
          <Link 
            href="/about"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            Volver a About
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <img 
                src={talk.image} 
                alt={talk.title} 
                className="w-full h-auto rounded-lg shadow-lg max-w-4xl mx-auto"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {talk.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {talk.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: talk.content }}
            />
          </div>
        </section>
      </main>

      {/* Footer - Same as homepage */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} My Website. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Twitter/X
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                TikTok
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
