import { render, screen } from '@testing-library/react';
import BlogPost from './page';

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
    excerpt: "Discover how to build modern web applications with the latest version of Next.js, including App Router and Server Components.",
    content: "<h2>Getting Started with Next.js 15</h2><p>Next.js 15 represents a significant evolution in the React ecosystem...</p>"
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    summary: "Essential TypeScript patterns for better code",
    excerpt: "Explore TypeScript patterns that will improve your code quality and developer experience.",
    content: "<h2>TypeScript Best Practices</h2><p>TypeScript has become an essential tool...</p>"
  },
  {
    id: 3,
    title: "Responsive Design with Tailwind",
    summary: "Creating beautiful responsive layouts",
    excerpt: "Master Tailwind CSS utilities to create stunning responsive designs that work on all devices.",
    content: "<h2>Responsive Design with Tailwind</h2><p>Tailwind CSS has revolutionized the way we style...</p>"
  }
];

describe('Blog Post Page', () => {
  beforeEach(() => {
    getBlogPosts.mockResolvedValue(mockBlogPosts);
  });

  it('renders the navigation component', async () => {
    render(await BlogPost({ params: Promise.resolve({ slug: '1' }) } as any));
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders the blog post title', async () => {
    render(await BlogPost({ params: Promise.resolve({ slug: '1' }) } as any));
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toHaveTextContent('Getting Started with Next.js 15');
  });

  it('renders the blog post content', async () => {
    render(await BlogPost({ params: Promise.resolve({ slug: '1' }) } as any));
    expect(screen.getByText(/Next.js 15 represents a significant evolution/i)).toBeInTheDocument();
  });

  it('renders the related posts section', async () => {
    render(await BlogPost({ params: Promise.resolve({ slug: '1' }) } as any));
    expect(screen.getByText('Related Posts')).toBeInTheDocument();
  });

  it('renders related posts excluding the current post', async () => {
    render(await BlogPost({ params: Promise.resolve({ slug: '1' }) } as any));
    expect(screen.getByText('TypeScript Best Practices')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design with Tailwind')).toBeInTheDocument();
  });

  it('renders "Leer" links for related posts', async () => {
    render(await BlogPost({ params: Promise.resolve({ slug: '1' }) } as any));
    const readLinks = screen.getAllByText('Leer');
    expect(readLinks.length).toBeGreaterThan(0);
  });

  it('renders the footer with copyright', async () => {
    render(await BlogPost({ params: Promise.resolve({ slug: '1' }) } as any));
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} My Website. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders social media links in footer', async () => {
    render(await BlogPost({ params: Promise.resolve({ slug: '1' }) } as any));
    expect(screen.getByText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
