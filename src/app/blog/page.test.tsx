import { render, screen } from '@testing-library/react';
import Blog from './page';

describe('Blog Page', () => {
  it('renders the navigation component', () => {
    render(<Blog />);
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders the featured post section', () => {
    render(<Blog />);
    expect(screen.getByText('Getting Started with Next.js 15')).toBeInTheDocument();
    expect(screen.getByText(/Discover how to build modern web applications/i)).toBeInTheDocument();
  });

  it('renders the "Leer más" link for featured post', () => {
    render(<Blog />);
    const link = screen.getByText('Leer más');
    expect(link).toHaveAttribute('href', '/blog/1');
  });

  it('renders the blog posts grid', () => {
    render(<Blog />);
    expect(screen.getByText('TypeScript Best Practices')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design with Tailwind')).toBeInTheDocument();
    expect(screen.getByText('Modern React Hooks')).toBeInTheDocument();
    expect(screen.getByText('Building Scalable APIs')).toBeInTheDocument();
    expect(screen.getByText('Testing Strategies for React Apps')).toBeInTheDocument();
    expect(screen.getByText('Performance Optimization')).toBeInTheDocument();
  });

  it('renders "Leer" links for blog posts', () => {
    render(<Blog />);
    const readLinks = screen.getAllByText('Leer');
    expect(readLinks.length).toBeGreaterThan(0);
  });

  it('renders the footer with copyright', () => {
    render(<Blog />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} My Website. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders social media links in footer', () => {
    render(<Blog />);
    expect(screen.getByText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
