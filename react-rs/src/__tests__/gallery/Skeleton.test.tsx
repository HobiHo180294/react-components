import React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '../../components/Gallery/Skeleton/Skeleton';

describe('Skeleton', () => {
  it('should render correct number of skeleton items', () => {
    const { container } = render(<Skeleton item={3} />);
    const items = container.querySelectorAll('.pulse-animation');
    expect(items.length).toBe(3);
  });

  it('should render skeleton items with correct class names', () => {
    const { container } = render(<Skeleton item={2} />);
    const items = container.querySelectorAll('.pulse-animation');
    expect(items[0]).toHaveClass('pulse-animation');
    expect(items[1]).toHaveClass('pulse-animation');
  });

  it('should render skeleton items with trigger element', () => {
    const { container } = render(<Skeleton item={1} />);
    const trigger = container.querySelector('.pulse-animation__trigger');
    expect(trigger).toBeInTheDocument();
  });
});
