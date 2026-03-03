import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

// Mock the sound hook
const playSoundMock = vi.fn();
vi.mock('../../hooks/useSound', () => ({
  useSound: () => ({ playSound: playSoundMock })
}));

describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls playSound on hover and click', () => {
    render(<Button>Click me</Button>);
    
    // Test hover sound
    fireEvent.mouseEnter(screen.getByText('Click me'));
    expect(playSoundMock).toHaveBeenCalledWith('hover');
    
    // Test click sound
    fireEvent.click(screen.getByText('Click me'));
    expect(playSoundMock).toHaveBeenCalledWith('click');
  });
});
