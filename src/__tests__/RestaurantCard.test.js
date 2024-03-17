import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  WithLabelPromoted,
} from "../components/RestaurantCard";
import MOCK_DATA from "../components/mocks/ResCardMock";
import HOC_MOCK from "../components/mocks/HOCMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card Component with props data", () => {
  render(<RestaurantCard resName={MOCK_DATA} />);

  const resName = screen.getByText("McDonald's");

  expect(resName).toBeInTheDocument();
});

// Write a Test Case to render Restaurant Card Component with Veg or Non Veg
// Basically Test the Higher Order Component

it("Should render Restaurant Card Component with the Pure Veg Label with it", () => {
  const NewComponent = WithLabelPromoted(RestaurantCard);
  render(<NewComponent resName={HOC_MOCK} />);

  const vegLabel = screen.getByText("Pure Veg");

  expect(vegLabel).toBeInTheDocument();
});
