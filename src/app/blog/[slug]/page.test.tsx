import { render, screen } from '@testing-library/react';
import BlogPost from './page';
import { blogPosts } from '@/lib/data';

// Mock React.use for Next.js 15+ params
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  use: jest.fn(),
}));

const { use } = require('react');

describe('Blog Post Page', () => {
  beforeEach(() => {
    use.mockResolvedValue({ slug: '1' });
  });

  it('renders the navigation component', async () => {
    render(<BlogPost params={Promise.resolve({ slug: '1' })} />);
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders the blog post title', async () => {
    render(<BlogPost params={Promise.resolve({ slug: '1' })} />);
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toHaveTextContent('Getting Started with Next.js 15');
  });

  it('renders the blog post content', async () => {
    render(<BlogPost params={Promise.resolve({ slug: '1' })} />);
    expect(screen.getByText(/Next.js 15 represents a significant evolution/i)).toBeInTheDocument();
  });

  it('renders the related posts section', async () => {
    render(<BlogPost params={Promise.resolve({ slug: '1' })} />);
    expect(screen.getByText('Related Posts')).toBeInTheDocument();
  });

  it('renders related posts excluding the current post', async () => {
    render(<BlogPost params={Promise.resolve({ slug: '1' })} />);
    expect(screen.getByText('TypeScript Best Practices')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design with Tailwind')).toBeInTheDocument();
  });

  it('renders "Leer" links for related posts', async () => {
    render(<BlogPost params={Promise.resolve({ slug: '1' })} />);
    const readLinks = screen.getAllByText('Leer');
    expect(readLinks.length).toBeGreaterThan(0);
  });

  it('renders the footer with copyright', async () => {
    render(<BlogPost params={Promise.resolve({ slug: '1' })} />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} My Website. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders social media links in footer', async () => {
    render(<BlogPost params={Promise.resolve({ slug: '1' })} />);
    expect(screen.getByText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
