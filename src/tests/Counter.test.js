// import necessary react testing library helpers here
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText("+");
  const count = screen.getByTestId("count");
  userEvent.click(incrementButton);
  expect(count).toHaveTextContent("1");
  
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText("-");
  const count = screen.getByTestId("count");
  userEvent.click(decrementButton);
  expect(count).toHaveTextContent("-1");
});
