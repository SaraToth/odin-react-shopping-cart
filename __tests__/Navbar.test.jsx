import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar";



describe('Navbar', () => {
    it("Renders navlinks to Home and Shop", () => {
        render(<Navbar cartNumber={3} />, {wrapper: MemoryRouter});
        expect(screen.getByRole('link', {name: /home/i})).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /shop/i})).toBeInTheDocument();
    })

    it("Displays cart image", () => {
        render(<Navbar />, { wrapper: MemoryRouter});
    })

    it("Cart badge reflects items in the cart", () => {
        render(<Navbar cartNumber={2} />, {wrapper: MemoryRouter});
        expect(screen.getByText(/2/i)).toBeInTheDocument();

        render(<Navbar cartNumber={5} />, {wrapper: MemoryRouter});
        expect(screen.getByText(/5/i)).toBeInTheDocument();
    })

    it("Empty cart does not display a 0 number", () => {
        render(<Navbar cartNumber={0} />, {wrapper: MemoryRouter});
        expect(screen.getByAltText(/cart/i)).toBeInTheDocument();
        expect(screen.queryByText(/0/i)).not.toBeInTheDocument();
    })

})