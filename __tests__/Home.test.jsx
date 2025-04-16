import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";

describe("Home Page", () => {
    it("Renders the Home page ", () => {
        render(<Home />, { wrapper: BrowserRouter});
        expect(screen.getByRole('heading')).toBeInTheDocument();
    })

    it("Renders Home page content 'Home page content", () => {
        render(<Home />, { wrapper: BrowserRouter });
        expect(screen.getByRole('heading', { name: /home page content/i})).toBeInTheDocument();
    })
})