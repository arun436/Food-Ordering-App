import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenu";
import "@testing-library/react";
import CART_MOCK from "../components/mocks/CART_MOCK.json";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(CART_MOCK),
  })
);

describe("Should add food items to the card and render it", () => {
  let component;

  beforeEach(async () => {
    await act(
      async () =>
        (component = render(
          <BrowserRouter>
            <Provider store={appStore}>
              <Header />
              <RestaurantMenu />
              <Cart />
            </Provider>
          </BrowserRouter>
        ))
    );
  });

  afterEach(async () => {
    await act(async () =>
      component.rerender(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
  });

  it("Should load restaurant Menu Component", () => {
    // Checking whether Restaurant Menu Component is loaded with Recommended Section
    const accordianHeader = screen.getByText("Recommended (16)");
    expect(accordianHeader).toBeInTheDocument();
  });

  it("Should load Items List Component", () => {
    const accordianHeader = screen.getByText("Recommended (16)");
    fireEvent.click(accordianHeader);

    // Checking whether if all the 16 items got rendered or not in the UI
    const foodItems = screen.getAllByTestId("food-items");
    expect(foodItems.length).toBe(16);
  });

  it("Should be able to add 2 items to card and display in header", () => {
    const accordianHeader = screen.getByText("Recommended (16)");
    fireEvent.click(accordianHeader);

    const foodItems = screen.getAllByTestId("food-items");
    expect(foodItems.length).toBe(16);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    // Adding item in the cart
    fireEvent.click(addBtns[0]);

    const cart = screen.getByText("🛒 (1 items)");
    expect(cart).toBeInTheDocument();

    //   Adding another item in the cart
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("🛒 (2 items)")).toBeInTheDocument();

    //   checking whether 2 items got added or not in the cart
    expect(screen.getAllByTestId("food-items").length).toBe(18);
  });

  it("Should be able to clear the cart", () => {
    const accordianHeader = screen.getByText("Recommended (16)");
    // Opening the Accordian so that we can count total 18 = 16 old + 2 added
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("food-items").length).toBe(18);

    // Clearing the 2 items that we added in the cart
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    // After clearing 2 items from 18, recommended 16 should be there
    expect(screen.getAllByTestId("food-items").length).toBe(16);
    expect(
      screen.getByText("Please add items to your cart to see them here!")
    ).toBeInTheDocument();
  });
});
