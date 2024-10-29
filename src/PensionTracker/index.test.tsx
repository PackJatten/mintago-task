import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PensionTracker from './index';
import { describe, expect, it, vi } from 'vitest';

vi.mock('./PensionDataEntry', () => ({
  __esModule: true,
  default: ({ toggleSection }: { toggleSection: () => void }) => (
    <div>
      <p>Pension Data Entry</p>
      <button onClick={toggleSection}>Go to Summary</button>
    </div>
  ),
}));

vi.mock('./PensionSummary', () => ({
  __esModule: true,
  default: ({ toggleSection }: { toggleSection: () => void }) => (
    <div>
      <p>Pension Summary</p>
      <button onClick={toggleSection}>Back to Data Entry</button>
    </div>
  ),
}));

describe('PensionTracker', () => {
  it('renders PensionDataEntry by default', () => {
    render(<PensionTracker />);
    expect(screen.getByText('Pension Data Entry')).toBeInTheDocument();
  });

  it('switches to PensionSummary when the toggle button is clicked', async () => {
    render(<PensionTracker />);

    const toggleButton = screen.getByText('Go to Summary');
    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(screen.queryByText('Pension Data Entry')).not.toBeInTheDocument();
      expect(screen.getByText('Pension Summary')).toBeInTheDocument();
    });
  });

  it('switches back to PensionDataEntry from PensionSummary', async () => {
    render(<PensionTracker />);

    fireEvent.click(screen.getByText('Go to Summary'));
    await waitFor(() => screen.getByText('Pension Summary'));

    fireEvent.click(screen.getByText('Back to Data Entry'));
    await waitFor(() => {
      expect(screen.getByText('Pension Data Entry')).toBeInTheDocument();
    });
  });

  it('applies motion animation properties correctly', async () => {
    render(<PensionTracker />);

    const dataEntryContainer = screen.getByTestId('data-entry-container');
    expect(dataEntryContainer).toHaveStyle('opacity: 1');
    expect(dataEntryContainer).toHaveStyle('transform: translateY(0)');

    fireEvent.click(screen.getByText('Go to Summary'));
    await waitFor(() => {
      const summaryContainer = screen.getByTestId('summary-container');
      expect(summaryContainer).toHaveStyle('opacity: 1');
      expect(summaryContainer).toHaveStyle('transform: translateY(0)');
    });
  });
});
