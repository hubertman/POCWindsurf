import Link from 'next/link';
import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  excerpt: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    summary: "Learn the fundamentals of Next.js 15 and its new features",
    excerpt: "Discover how to build modern web applications with the latest version of Next.js, including App Router and Server Components. This comprehensive guide covers everything from setup to deployment.",
    content: `
      <p>Next.js 15 represents a significant evolution in the React ecosystem, introducing powerful new features that streamline development and enhance performance. The App Router, one of the most notable additions, provides a more intuitive way to structure applications while offering improved server-side rendering capabilities.</p>
      
      <p>At the heart of Next.js 15 lies the concept of Server Components, which allows developers to build applications that render partially or entirely on the server. This approach reduces the JavaScript bundle size sent to the client, resulting in faster load times and better user experience.</p>
      
      <p>The new routing system introduces several conventions that make building complex applications more straightforward. Nested layouts, parallel routes, and intercepting routes provide developers with the flexibility needed to create sophisticated user interfaces without sacrificing maintainability.</p>
      
      <p>Another significant improvement is the enhanced data fetching mechanisms. The introduction of async/await patterns directly within components simplifies data management, while the new caching strategies ensure optimal performance without manual optimization.</p>
      
      <p>Whether you're building a simple blog or a complex enterprise application, Next.js 15 provides the tools and conventions needed to create fast, scalable, and maintainable web applications.</p>
    `
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    summary: "Essential TypeScript patterns for better code",
    excerpt: "Explore TypeScript patterns that will improve your code quality and developer experience. Learn advanced typing techniques and common pitfalls to avoid.",
    content: `
      <p>TypeScript has become an essential tool in modern web development, providing type safety and enhanced developer experience. However, to truly leverage its power, developers need to understand and implement best practices that go beyond basic type annotations.</p>
      
      <p>One of the fundamental principles is to prefer explicit types over inferred ones when clarity is important. While TypeScript's type inference is powerful, explicit type annotations serve as documentation and make the codebase more maintainable.</p>
      
      <p>Interface vs type choice is another consideration. While they're often interchangeable, interfaces are generally preferred for object shapes that might be extended, while types are better suited for unions, intersections, and more complex type manipulations.</p>
      
      <p>Generic types provide incredible flexibility when used correctly. They allow you to write reusable components and functions that maintain type safety while working with different data types.</p>
    `
  },
  {
    id: 3,
    title: "Responsive Design with Tailwind",
    summary: "Creating beautiful responsive layouts",
    excerpt: "Master Tailwind CSS utilities to create stunning responsive designs that work on all devices. From mobile-first approach to complex grid systems.",
    content: `
      <p>Tailwind CSS has revolutionized the way we approach styling in web development. Its utility-first philosophy allows developers to create custom designs without writing custom CSS, while maintaining consistency and scalability.</p>
      
      <p>The mobile-first approach is at the core of responsive design with Tailwind. By starting with mobile styles and progressively enhancing for larger screens, you ensure your application works well on all devices.</p>
      
      <p>Understanding the responsive prefixes (sm:, md:, lg:, xl:) is crucial. These modifiers allow you to apply different styles at different breakpoints, creating truly responsive layouts without media queries.</p>
      
      <p>The grid system in Tailwind is particularly powerful. With utilities like grid-cols-{n}, gap-{size}, and col-span-{n}, you can create complex layouts that adapt beautifully to different screen sizes.</p>
    `
  },
  {
    id: 4,
    title: "Modern React Hooks",
    summary: "Advanced patterns and use cases",
    excerpt: "Deep dive into React Hooks and learn advanced patterns for building complex applications. Custom hooks, performance optimization, and state management.",
    content: `
      <p>React Hooks have transformed how we write React components, enabling functional components to have state and lifecycle features. Understanding hooks deeply is essential for modern React development.</p>
      
      <p>Custom hooks are where the real power lies. They allow you to extract component logic into reusable functions, promoting code reuse and separation of concerns. A well-designed custom hook can simplify complex components significantly.</p>
      
      <p>Performance optimization with hooks requires understanding useEffect dependency arrays, useMemo, and useCallback. These tools help prevent unnecessary re-renders and optimize your application's performance.</p>
      
      <p>State management patterns have evolved with hooks. While useState is great for simple state, useReducer provides more predictable state updates for complex scenarios. Context API combined with hooks offers a lightweight alternative to external state management libraries.</p>
    `
  },
  {
    id: 5,
    title: "Building Scalable APIs",
    summary: "RESTful design principles and implementation",
    excerpt: "Learn how to design and implement robust APIs that can scale with your application. Best practices for authentication, error handling, and documentation.",
    content: `
      <p>Building scalable APIs requires careful planning and adherence to established principles. RESTful design provides a solid foundation for creating APIs that are intuitive, maintainable, and scalable.</p>
      
      <p>Resource identification and URI design are fundamental aspects of REST. Using nouns instead of verbs in your endpoints, maintaining consistency in naming conventions, and properly structuring your resource hierarchy are key considerations.</p>
      
      <p>HTTP methods should be used according to their intended purpose: GET for retrieving data, POST for creating resources, PUT/PATCH for updating, and DELETE for removal. Proper status codes complement these methods to provide clear communication about request outcomes.</p>
      
      <p>Authentication and authorization are critical for API security. JWT tokens, OAuth 2.0, and API keys each have their use cases, and implementing proper rate limiting and input validation protects your API from abuse.</p>
    `
  },
  {
    id: 6,
    title: "Testing Strategies for React Apps",
    summary: "Comprehensive testing approach",
    excerpt: "From unit tests to integration tests, learn how to create a solid testing strategy for your React applications using modern testing tools and frameworks.",
    content: `
      <p>A comprehensive testing strategy is essential for maintaining code quality and preventing regressions in React applications. Understanding the different types of tests and when to use each one is crucial.</p>
      
      <p>Unit tests focus on individual components or functions in isolation. They're fast, reliable, and help ensure that each piece of your application works correctly on its own. React Testing Library provides excellent tools for testing React components from a user's perspective.</p>
      
      <p>Integration tests verify that different parts of your application work together correctly. They're particularly important for testing user flows that span multiple components or involve API interactions.</p>
      
      <p>End-to-end tests simulate real user interactions with your application. While they're slower and more brittle, they provide confidence that your entire application works as expected from the user's perspective.</p>
    `
  },
  {
    id: 7,
    title: "Performance Optimization",
    summary: "Making your web apps lightning fast",
    excerpt: "Discover techniques to optimize your web application performance, including code splitting, lazy loading, and caching strategies.",
    content: `
      <p>Performance optimization is crucial for user experience and SEO. Modern web applications can become slow if not properly optimized, but there are many techniques available to ensure fast load times and smooth interactions.</p>
      
      <p>Code splitting is one of the most effective optimization techniques. By splitting your application into smaller chunks that are loaded on demand, you can significantly reduce the initial bundle size and improve load times.</p>
      
      <p>Lazy loading helps defer loading of non-critical resources. Images, components, and routes can be loaded only when needed, reducing the initial page load time and saving bandwidth.</p>
      
      <p>Caching strategies play a vital role in performance. Browser caching, service workers, and CDN caching all contribute to faster subsequent visits and reduced server load.</p>
    `
  }
];

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Find the post by ID (convert slug to number)
  const resolvedParams = React.use(params);
  const postId = parseInt(resolvedParams.slug);
  const currentPost = blogPosts.find(post => post.id === postId) || blogPosts[0];
  
  // Get related posts (exclude current post, limit to 6)
  const relatedPosts = blogPosts
    .filter(post => post.id !== currentPost.id)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as homepage */}
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">MyLogo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

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
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-lg">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
              <p className="text-lg">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
            </div>
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
