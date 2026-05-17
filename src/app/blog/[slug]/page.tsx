import Link from 'next/link';
import React from 'react';
import Navigation from '@/components/Navigation';
import { getBlogPosts } from '@/lib/api';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.slug);
  const blogPosts = await getBlogPosts();
  const currentPost = blogPosts.find(post => post.id === postId) || blogPosts[0];
  
  // Get related posts (exclude current post, limit to 6)
  const relatedPosts = blogPosts
    .filter(post => post.id !== currentPost.id)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section - Full Width */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <img 
                src={`https://picsum.photos/seed/blog${currentPost.id}/1200/400.jpg`}
                alt={currentPost.title} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {currentPost.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
            />
          </div>
        </section>

        {/* Related Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={`https://picsum.photos/seed/related${post.id}/150/150.jpg`}
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
