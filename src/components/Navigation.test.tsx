import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  it('renders the logo', () => {
    render(<Navigation />);
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders mobile menu button', () => {
    render(<Navigation />);
    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Navigation />);
    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    
    // Initially mobile menu panel should not be in the document
    expect(screen.queryByText('Home')).toBeInTheDocument(); // Desktop nav is always visible
    
    // Click to open menu
    fireEvent.click(menuButton);
    // After clicking, the mobile menu should be visible (we can check by finding the mobile menu links)
    const mobileMenuLinks = screen.getAllByText('Home');
    expect(mobileMenuLinks.length).toBeGreaterThan(1); // Both desktop and mobile should be visible
    
    // Click to close menu
    fireEvent.click(menuButton);
    // After closing, only desktop nav should be visible
    const homeLinksAfterClose = screen.getAllByText('Home');
    expect(homeLinksAfterClose.length).toBe(1); // Only desktop nav
  });

  it('renders navigation links with correct href attributes', () => {
    render(<Navigation />);
    const homeLink = screen.getByText('Home').closest('a');
    const aboutLink = screen.getByText('About').closest('a');
    const blogLink = screen.getByText('Blog').closest('a');
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(blogLink).toHaveAttribute('href', '/blog');
  });
});
