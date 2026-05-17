import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getBlogPosts } from '@/lib/api';

export default async function Blog() {
  const blogPosts = await getBlogPosts();
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
