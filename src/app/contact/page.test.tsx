import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './page';

// Mock alert
global.alert = jest.fn();

describe('Contact Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the navigation component', () => {
    render(<Contact />);
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    render(<Contact />);
    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
    expect(screen.getByText('Enviar Mensaje')).toBeInTheDocument();
  });

  it('allows user to type in the name field', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText('Nombre');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');
  });

  it('allows user to type in the email field', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput).toHaveValue('john@example.com');
  });

  it('allows user to type in the message field', () => {
    render(<Contact />);
    const messageInput = screen.getByLabelText('Mensaje');
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
    expect(messageInput).toHaveValue('Hello, this is a test message.');
  });

  it('submits the form and shows alert', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText('Nombre');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Mensaje');
    const submitButton = screen.getByText('Enviar Mensaje');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
    
    fireEvent.click(submitButton);

    expect(global.alert).toHaveBeenCalledWith('Gracias por tu mensaje! Te responderé pronto.');
  });

  it('clears form after submission', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText('Nombre');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Mensaje');
    const submitButton = screen.getByText('Enviar Mensaje');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
    
    fireEvent.click(submitButton);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });

  it('renders the footer with copyright', () => {
    render(<Contact />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} My Website. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders social media links in footer', () => {
    render(<Contact />);
    expect(screen.getByText('Twitter/X')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
