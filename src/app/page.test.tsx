import { render, screen } from '@testing-library/react';
import Home from './page';

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
  }
];

describe('Home Page', () => {
  beforeEach(() => {
    getBlogPosts.mockResolvedValue(mockBlogPosts);
  });

  it('renders the navigation component', async () => {
    render(await Home());
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders the about section', async () => {
    render(await Home());
    expect(screen.getByText('About me')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to my personal website!/i)).toBeInTheDocument();
  });

  it('renders the "Ver más" link to about page', async () => {
    render(await Home());
    const link = screen.getByText('Ver más');
    expect(link).toHaveAttribute('href', '/about');
  });

  it('renders the featured blog post', async () => {
    render(await Home());
    expect(screen.getByText('Getting Started with Next.js 15')).toBeInTheDocument();
    expect(screen.getByText(/Discover how to build modern web applications/i)).toBeInTheDocument();
  });

  it('renders recent blog posts', async () => {
    render(await Home());
    expect(screen.getByText('TypeScript Best Practices')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design with Tailwind')).toBeInTheDocument();
    expect(screen.getByText('Modern React Hooks')).toBeInTheDocument();
  });

  it('renders the footer with copyright', async () => {
    render(await Home());
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} My Website. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders social media links in footer', async () => {
    render(await Home());
    expect(screen.getByText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
