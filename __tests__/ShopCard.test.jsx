import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from "react-router-dom";
import Shop from "../src/pages/Shop";
import ShopCard from "../src/components/ShopCard";
import userEvent from "@testing-library/user-event";

// Mock Outlet Context values
const cartNumber = 2;
const setCartNumber = vi.fn();

// Mocks Outlet Context Wrapper
const MockOutletContentWrapper = ({children}) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet context={{cartNumber, setCartNumber}}/>}>
          <Route index element={children} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
};

// Mock shopItem prop
const item = {
  imageURL: "https://google.com",
  price: 10.99,
  title: "my item Test title",
  id: 82,
  description: "my item test description",
};


describe("shop card", ()=> {
  it("Renders shop item info", () => {

  render(
    <MockOutletContentWrapper>
      <ShopCard shopItem={item}/>
    </MockOutletContentWrapper>
  )

  expect(screen.getByText(/item test title/i)).toBeInTheDocument();
  expect(screen.getByText(/10.99/)).toBeInTheDocument();
  })

  it("Renders an Add to Cart button", () => {
    render(
      <MockOutletContentWrapper>
        <ShopCard shopItem={item} />
      </MockOutletContentWrapper>
    )

    expect(screen.getByRole("button", { name: /add to cart/i})).toBeInTheDocument();
  })

  it("Calls setCartNumber when Add to Cart button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <MockOutletContentWrapper>
        <ShopCard shopItem={item} />
      </MockOutletContentWrapper>
    )

    const button = screen.getByRole("button", { name: /add to cart/i});
    await user.click(button);
    
    expect(setCartNumber).toHaveBeenCalled();


  })
})