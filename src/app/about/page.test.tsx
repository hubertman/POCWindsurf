import { render, screen } from '@testing-library/react';
import About from './page';

describe('About Page', () => {
  it('renders the navigation component', () => {
    render(<About />);
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders the about me section', () => {
    render(<About />);
    expect(screen.getByText('About me')).toBeInTheDocument();
    expect(screen.getByText(/I'm a passionate full-stack developer/i)).toBeInTheDocument();
  });

  it('renders the "Contactar" link to contact page', () => {
    render(<About />);
    const link = screen.getByText('Contactar');
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('renders the projects section', () => {
    render(<About />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
    expect(screen.getByText('Weather Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Social Media Analytics')).toBeInTheDocument();
  });

  it('renders the talks section', () => {
    render(<About />);
    expect(screen.getByText('Talks')).toBeInTheDocument();
    expect(screen.getByText('Modern Web Development Trends')).toBeInTheDocument();
    expect(screen.getByText('Building Scalable Applications')).toBeInTheDocument();
  });

  it('renders "Ver charla" links for talks', () => {
    render(<About />);
    const talkLinks = screen.getAllByText('Ver charla');
    expect(talkLinks).toHaveLength(2);
    expect(talkLinks[0]).toHaveAttribute('href', '/talks/1');
    expect(talkLinks[1]).toHaveAttribute('href', '/talks/2');
  });

  it('renders the footer with copyright', () => {
    render(<About />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} My Website. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders social media links in footer', () => {
    render(<About />);
    expect(screen.getByText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
