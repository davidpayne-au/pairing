import { render, screen } from '@testing-library/react';
import { BangladeshFlag } from './BangladeshFlag';

describe('BangladeshFlag', () => {
  it('renders the Bangladesh flag with correct ARIA attributes', () => {
    render(<BangladeshFlag />);
    
    const flag = screen.getByLabelText('Bangladesh flag');
    expect(flag).toBeInTheDocument();
    expect(flag).toHaveAttribute('role', 'img');
  });

  it('applies custom size correctly', () => {
    render(<BangladeshFlag size={64} />);
    
    const flag = screen.getByLabelText('Bangladesh flag');
    expect(flag).toHaveAttribute('width', '64');
    expect(flag).toHaveAttribute('height', '38.4'); // 64 * 0.6
  });

  it('applies custom className', () => {
    render(<BangladeshFlag className="custom-class" />);
    
    const flag = screen.getByLabelText('Bangladesh flag');
    expect(flag).toHaveClass('custom-class');
  });
});