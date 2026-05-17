import { render, screen } from '@testing-library/react';
import Blog from './page';

// Mock the API module
jest.mock('@/lib/api', () => ({
  getBlogPosts: jest.fn(),
}));

const { getBlogPosts } = require('@/lib/api');

const mockBlogPosts = [
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
  },
  {
    id: 5,
    title: "Building Scalable APIs",
    summary: "RESTful design principles and implementation",
    excerpt: "Learn how to design and implement robust APIs that can scale with your application."
  },
  {
    id: 6,
    title: "Testing Strategies for React Apps",
    summary: "Comprehensive testing approach",
    excerpt: "From unit tests to integration tests, learn how to create a solid testing strategy for your React applications."
  },
  {
    id: 7,
    title: "Performance Optimization",
    summary: "Making your web apps lightning fast",
    excerpt: "Discover techniques to optimize your web application performance, including code splitting, lazy loading, and caching strategies."
  }
];

describe('Blog Page', () => {
  beforeEach(() => {
    getBlogPosts.mockResolvedValue(mockBlogPosts);
  });

  it('renders the navigation component', async () => {
    render(await Blog());
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders the featured post section', async () => {
    render(await Blog());
    expect(screen.getByText('Getting Started with Next.js 15')).toBeInTheDocument();
    expect(screen.getByText(/Discover how to build modern web applications/i)).toBeInTheDocument();
  });

  it('renders the "Leer más" link for featured post', async () => {
    render(await Blog());
    const link = screen.getByText('Leer más');
    expect(link).toHaveAttribute('href', '/blog/1');
  });

  it('renders the blog posts grid', async () => {
    render(await Blog());
    expect(screen.getByText('TypeScript Best Practices')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design with Tailwind')).toBeInTheDocument();
    expect(screen.getByText('Modern React Hooks')).toBeInTheDocument();
    expect(screen.getByText('Building Scalable APIs')).toBeInTheDocument();
    expect(screen.getByText('Testing Strategies for React Apps')).toBeInTheDocument();
    expect(screen.getByText('Performance Optimization')).toBeInTheDocument();
  });

  it('renders "Leer" links for blog posts', async () => {
    render(await Blog());
    const readLinks = screen.getAllByText('Leer');
    expect(readLinks.length).toBeGreaterThan(0);
  });

  it('renders the footer with copyright', async () => {
    render(await Blog());
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} My Website. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders social media links in footer', async () => {
    render(await Blog());
    expect(screen.getByText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
