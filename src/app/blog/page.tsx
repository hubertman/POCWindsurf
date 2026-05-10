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
    excerpt: "Discover how to build modern web applications with the latest version of Next.js, including App Router and Server Components. This comprehensive guide covers everything from setup to deployment."
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    summary: "Essential TypeScript patterns for better code",
    excerpt: "Explore TypeScript patterns that will improve your code quality and developer experience. Learn advanced typing techniques and common pitfalls to avoid."
  },
  {
    id: 3,
    title: "Responsive Design with Tailwind",
    summary: "Creating beautiful responsive layouts",
    excerpt: "Master Tailwind CSS utilities to create stunning responsive designs that work on all devices. From mobile-first approach to complex grid systems."
  },
  {
    id: 4,
    title: "Modern React Hooks",
    summary: "Advanced patterns and use cases",
    excerpt: "Deep dive into React Hooks and learn advanced patterns for building complex applications. Custom hooks, performance optimization, and state management."
  },
  {
    id: 5,
    title: "Building Scalable APIs",
    summary: "RESTful design principles and implementation",
    excerpt: "Learn how to design and implement robust APIs that can scale with your application. Best practices for authentication, error handling, and documentation."
  },
  {
    id: 6,
    title: "Testing Strategies for React Apps",
    summary: "Comprehensive testing approach",
    excerpt: "From unit tests to integration tests, learn how to create a solid testing strategy for your React applications using modern testing tools and frameworks."
  },
  {
    id: 7,
    title: "Performance Optimization",
    summary: "Making your web apps lightning fast",
    excerpt: "Discover techniques to optimize your web application performance, including code splitting, lazy loading, and caching strategies."
  }
];

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1, 7);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section - Featured Post */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://picsum.photos/seed/nextjs15/600/400.jpg" 
                  alt={featuredPost.title} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{featuredPost.title}</h1>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Link 
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gridPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={`https://picsum.photos/seed/post${post.id}/150/150.jpg`}
                        alt={post.title}
                        className="w-24 h-24 rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                      >
                        Leer
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
