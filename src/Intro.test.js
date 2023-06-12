import { render, screen } from '@testing-library/react';
import Intro from './Intro';

test('renders introduction to AI tool', () => {
  render(<Intro />);
  const title = screen.getByText("Simple Neural Network Math Visualizer");
  const paragraph = screen.getByText("When I started learning neural networks, I had trouble understanding the math so I made these examples");
  const note = screen.getByText("Note: one neuron for each layer for ease of visualization");
  expect(title).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
  expect(note).toBeInTheDocument();
});
