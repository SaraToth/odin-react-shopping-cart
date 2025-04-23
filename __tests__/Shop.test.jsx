import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup} from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from "react-router-dom";
import Shop from "../src/pages/Shop";

const OutletContextProvider = () => {
    const cartNumber = 2;
    const setCartNumber = vi.fn();
    return <Outlet context={{ cartNumber, setCartNumber }} />;
};

afterEach(() => {
    cleanup(); // reset DOM
    vi.restoreAllMocks(); // reset mocks
    }
);

describe("Shop page", () => {
    it("Renders the shop page content", async () => {
        render(
            <MemoryRouter initialEntries={["/shop"]}>
            <Routes>
              <Route path="/" element={<OutletContextProvider />}>
                <Route path="shop" element={<Shop />} />
              </Route>
            </Routes>
          </MemoryRouter>
        )
        const heading = await screen.getByRole('heading', { name: /shop/i});
        expect(heading).toBeInTheDocument();
    })

    it("Fetches from the API", async () => {
      globalThis.fetch = vi.fn(() => (
        Promise.resolve({
            json: () => 
                Promise.resolve([
                {
                    id: 1,
                    title: "Test product",
                    price: 19.99,
                    image: "https://google.com",
                    description: "test description",
                },
            ]),
        })
      ));

      render(
        <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/" element={<OutletContextProvider />}>
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>
      )

        const productTitle = await screen.findByText(/test product/i);
        const price = await screen.findByText(/19.99/i);
        
        expect(productTitle).toBeInTheDocument();
        expect(price).toBeInTheDocument();

    })

    it("Catches an API fetch error correctly", async () => {
      globalThis.fetch = vi.fn(() =>
        Promise.reject(new Error("Network Error"))
      );

      render(
        <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/" element={<OutletContextProvider />}>
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>
      )
      
      const errorText = await screen.findByText(/network issue/i);
      expect(errorText).toBeInTheDocument();
    })
      
        
    })