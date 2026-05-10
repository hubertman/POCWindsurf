import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    summary: "Learn the fundamentals of Next.js 15 and its new features",
    excerpt: "Discover how to build modern web applications with the latest version of Next.js, including App Router and Server Components."
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    summary: "Essential TypeScript patterns for better code",
    excerpt: "Explore TypeScript patterns that will improve your code quality and developer experience."
  },
  {
    id: 3,
    title: "Responsive Design with Tailwind",
    summary: "Creating beautiful responsive layouts",
    excerpt: "Master Tailwind CSS utilities to create stunning responsive designs that work on all devices."
  },
  {
    id: 4,
    title: "Modern React Hooks",
    summary: "Advanced patterns and use cases",
    excerpt: "Deep dive into React Hooks and learn advanced patterns for building complex applications."
  }
];

export default function Home() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://picsum.photos/seed/aboutme/500/400.jpg" 
                  alt="About me" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About me</h2>
                <p className="text-gray-600 mb-4">
                  Welcome to my personal website! I'm a passionate developer who loves creating 
                  beautiful and functional web applications. With expertise in modern web technologies, 
                  I bring ideas to life through clean code and thoughtful design.
                </p>
                <p className="text-gray-600 mb-6">
                  My journey in web development has been driven by curiosity and a constant desire 
                  to learn. I specialize in React, Next.js, and TypeScript, always staying up-to-date 
                  with the latest trends and best practices in the industry.
                </p>
                <Link 
                  href="/about" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Article */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                <Link 
                  href={`/blog/${featuredPost.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Leer más
                </Link>
              </div>

              {/* Recent Posts List */}
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md p-4 flex gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={`https://picsum.photos/seed/homepost${post.id}/100/100.jpg`}
                        alt={post.title}
                        className="w-20 h-20 rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Leer
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
