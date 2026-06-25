import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NexusToggle from './NexusToggle';
import { MODES } from '../utils/content';

// Mock framer-motion to avoid animation issues in jsdom tests
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: ({ children, layoutId, ...props }) => <div data-testid={`motion-div-${layoutId}`} {...props}>{children}</div>,
    },
  };
});

// Mock Lucide icons
vi.mock('lucide-react', () => ({
  Search: () => <div data-testid="icon-search" />,
  BarChart4: () => <div data-testid="icon-barchart" />,
  Cpu: () => <div data-testid="icon-cpu" />,
}));

describe('NexusToggle', () => {
  it('renders all mode buttons', () => {
    const setActiveMode = vi.fn();
    render(<NexusToggle activeMode={MODES.ANALYTICS} setActiveMode={setActiveMode} />);

    expect(screen.getByText('ANALYTICS')).toBeInTheDocument();
    expect(screen.getByText('ON-CHAIN')).toBeInTheDocument();
    expect(screen.getByText('AGENTIC')).toBeInTheDocument();
  });

  it('calls setActiveMode when a different mode is clicked', () => {
    const setActiveMode = vi.fn();
    render(<NexusToggle activeMode={MODES.ANALYTICS} setActiveMode={setActiveMode} />);

    const onChainButton = screen.getByText('ON-CHAIN').closest('button');
    fireEvent.click(onChainButton);

    expect(setActiveMode).toHaveBeenCalledWith(MODES.ON_CHAIN);
    expect(setActiveMode).toHaveBeenCalledTimes(1);
  });

  it('applies active styling to the currently active mode', () => {
    const setActiveMode = vi.fn();
    render(<NexusToggle activeMode={MODES.AGENTIC} setActiveMode={setActiveMode} />);

    const activeText = screen.getByText('AGENTIC');
    const activeContainer = activeText.closest('.flex-col');
    expect(activeContainer).toHaveClass('text-white');

    const inactiveText = screen.getByText('ANALYTICS');
    const inactiveContainer = inactiveText.closest('.flex-col');
    expect(inactiveContainer).toHaveClass('text-white/20');
  });

  it('renders the active indicators for the active mode', () => {
    const setActiveMode = vi.fn();
    render(<NexusToggle activeMode={MODES.ON_CHAIN} setActiveMode={setActiveMode} />);

    expect(screen.getByTestId('motion-div-nexus-bg')).toBeInTheDocument();
    expect(screen.getByTestId('motion-div-active-glint')).toBeInTheDocument();
  });
});
