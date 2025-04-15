import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar";



describe('Navbar', () => {
    it("Renders navlinks to Home and Shop", () => {
        render(<Navbar cartNumber={3} />, {wrapper: BrowserRouter});
        expect(screen.getByRole('link', {name: /home/i})).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /shop/i})).toBeInTheDocument();
    })

    it("Cart display reflects items in the cart", () => {
        render(<Navbar cartNumber={2} />, {wrapper: BrowserRouter});
        expect(screen.getByText(/2 items in cart/i)).toBeInTheDocument();

        render(<Navbar cartNumber={5} />, {wrapper: BrowserRouter});
        expect(screen.getByText(/5 items in cart/i)).toBeInTheDocument();
    })

    it("Cart is empty when cartNumber is 0", () => {
        render(<Navbar cartNumber={0} />, {wrapper: BrowserRouter});
        expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
    })

    it("Does not render cart info when no prop is passed", () => {
        render(<Navbar />, {wrapper: BrowserRouter});
        expect(screen.queryByText(/items in cart/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/cart is empty/i)).not.toBeInTheDocument();
    })

})