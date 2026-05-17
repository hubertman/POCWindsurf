import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('renders the navigation component', () => {
    render(<Home />);
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders the about section', () => {
    render(<Home />);
    expect(screen.getByText('About me')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to my personal website!/i)).toBeInTheDocument();
  });

  it('renders the "Ver más" link to about page', () => {
    render(<Home />);
    const link = screen.getByText('Ver más');
    expect(link).toHaveAttribute('href', '/about');
  });

  it('renders the featured blog post', () => {
    render(<Home />);
    expect(screen.getByText('Getting Started with Next.js 15')).toBeInTheDocument();
    expect(screen.getByText(/Discover how to build modern web applications/i)).toBeInTheDocument();
  });

  it('renders recent blog posts', () => {
    render(<Home />);
    expect(screen.getByText('TypeScript Best Practices')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design with Tailwind')).toBeInTheDocument();
    expect(screen.getByText('Modern React Hooks')).toBeInTheDocument();
  });

  it('renders the footer with copyright', () => {
    render(<Home />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} My Website. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders social media links in footer', () => {
    render(<Home />);
    expect(screen.getByText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
