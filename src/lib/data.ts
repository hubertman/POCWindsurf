export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  excerpt: string;
  content: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Talk {
  id: number;
  title: string;
  summary: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    summary: "Learn fundamentals of Next.js 15 and its new features",
    excerpt: "Discover how to build modern web applications with latest version of Next.js, including App Router and Server Components. This comprehensive guide covers everything from setup to deployment.",
    content: `<h2>Getting Started with Next.js 15</h2>
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
    content: `<h2>TypeScript Best Practices</h2><p>TypeScript has become an essential tool in modern web development, providing type safety and enhanced developer experience. However, to truly leverage its power, developers need to understand and implement best practices that go beyond basic type annotations.</p><p>One of the fundamental principles is to prefer explicit types over inferred ones when clarity is important. While TypeScript's type inference is powerful, explicit type annotations serve as documentation and make the codebase more maintainable.</p><p>Interface vs type choice is another consideration. While they're often interchangeable, interfaces are generally preferred for object shapes that might be extended, while types are better suited for unions, intersections, and more complex type manipulations.</p><p>Generic types provide incredible flexibility when used correctly. They allow you to write reusable components and functions that maintain type safety while working with different data types.</p>`
  },
  {
    id: 3,
    title: "Responsive Design with Tailwind",
    summary: "Creating beautiful responsive layouts",
    excerpt: "Master Tailwind CSS utilities to create stunning responsive designs that work on all devices. From mobile-first approach to complex grid systems.",
    content: `<h2>Responsive Design with Tailwind</h2><p>Tailwind CSS has revolutionized the way we approach styling in web development. Its utility-first philosophy allows developers to create custom designs without writing custom CSS, while maintaining consistency and scalability.</p><p>The mobile-first approach is at the core of responsive design with Tailwind. By starting with mobile styles and progressively enhancing for larger screens, you ensure your application works well on all devices.</p><p>Understanding the responsive prefixes (sm:, md:, lg:, xl:) is crucial. These modifiers allow you to apply different styles at different breakpoints, creating truly responsive layouts without media queries.</p><p>The grid system in Tailwind is particularly powerful. With utilities like grid-cols-{n}, gap-{size}, and col-span-{n}, you can create complex layouts that adapt beautifully to different screen sizes.</p>`
  },
  {
    id: 4,
    title: "Modern React Hooks",
    summary: "Advanced patterns and use cases",
    excerpt: "Deep dive into React Hooks and learn advanced patterns for building complex applications. Custom hooks, performance optimization, and state management.",
    content: `<h2>Modern React Hooks</h2><p>React Hooks have transformed how we write React components, enabling functional components to have state and lifecycle features. Understanding hooks deeply is essential for modern React development.</p><p>Custom hooks are where the real power lies. They allow you to extract component logic into reusable functions, promoting code reuse and separation of concerns. A well-designed custom hook can simplify complex components significantly.</p><p>Performance optimization with hooks requires understanding useEffect dependency arrays, useMemo, and useCallback. These tools help prevent unnecessary re-renders and optimize your application's performance.</p><p>State management patterns have evolved with hooks. While useState is great for simple state, useReducer provides more predictable state updates for complex scenarios. Context API combined with hooks offers a lightweight alternative to external state management libraries.</p>`
  },
  {
    id: 5,
    title: "Building Scalable APIs",
    summary: "RESTful design principles and implementation",
    excerpt: "Learn how to design and implement robust APIs that can scale with your application. Best practices for authentication, error handling, and documentation.",
    content: `<h2>Building Scalable APIs</h2><p>Building scalable APIs requires careful planning and adherence to established principles. RESTful design provides a solid foundation for creating APIs that are intuitive, maintainable, and scalable.</p><p>Resource identification and URI design are fundamental aspects of REST. Using nouns instead of verbs in your endpoints, maintaining consistency in naming conventions, and properly structuring your resource hierarchy are key considerations.</p><p>HTTP methods should be used according to their intended purpose: GET for retrieving data, POST for creating resources, PUT/PATCH for updating, and DELETE for removal. Proper status codes complement these methods to provide clear communication about request outcomes.</p><p>Authentication and authorization are critical for API security. JWT tokens, OAuth 2.0, and API keys each have their use cases, and implementing proper rate limiting and input validation protects your API from abuse.</p>`
  },
  {
    id: 6,
    title: "Testing Strategies for React Apps",
    summary: "Comprehensive testing approach",
    excerpt: "From unit tests to integration tests, learn how to create a solid testing strategy for your React applications using modern testing tools and frameworks.",
    content: `<h2>Testing Strategies for React Apps</h2><p>A comprehensive testing strategy is essential for maintaining code quality and preventing regressions in React applications. Understanding the different types of tests and when to use each one is crucial.</p><p>Unit tests focus on individual components or functions in isolation. They're fast, reliable, and help ensure that each piece of your application works correctly on its own. React Testing Library provides excellent tools for testing React components from a user's perspective.</p><p>Integration tests verify that different parts of your application work together correctly. They're particularly important for testing user flows that span multiple components or involve API interactions.</p><p>End-to-end tests simulate real user interactions with your application. While they're slower and more brittle, they provide confidence that your entire application works as expected from the user's perspective.</p>`
  },
  {
    id: 7,
    title: "Performance Optimization",
    summary: "Making your web apps lightning fast",
    excerpt: "Discover techniques to optimize your web application performance, including code splitting, lazy loading, and caching strategies.",
    content: `<h2>Performance Optimization</h2><p>Performance optimization is crucial for user experience and SEO. Modern web applications can become slow if not properly optimized, but there are many techniques available to ensure fast load times and smooth interactions.</p><p>Code splitting is one of the most effective optimization techniques. By splitting your application into smaller chunks that are loaded on demand, you can significantly reduce the initial bundle size and improve load times.</p><p>Lazy loading helps defer loading of non-critical resources. Images, components, and routes can be loaded only when needed, reducing the initial page load time and saving bandwidth.</p><p>Caching strategies play a vital role in performance. Browser caching, service workers, and CDN caching all contribute to faster subsequent visits and reduced server load.</p>`
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern online shopping experience with React and Node.js",
    image: "https://picsum.photos/seed/ecommerce/300/200.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    image: "https://picsum.photos/seed/taskapp/300/200.jpg"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather tracking with interactive maps",
    image: "https://picsum.photos/seed/weather/300/200.jpg"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Data visualization platform for social media metrics",
    image: "https://picsum.photos/seed/analytics/300/200.jpg"
  }
];

export const talks: Talk[] = [
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
      <p>Learn essential architectural patterns and strategies needed to build applications that can scale effectively. This talk covers both technical and organizational aspects of scalability.</p>
      
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
