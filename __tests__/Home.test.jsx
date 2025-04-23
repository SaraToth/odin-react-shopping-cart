import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../src/pages/Home";

describe("Home Page", () => {
    it("Renders Home page content 'Home page content", () => {
        render(<Home />, { wrapper: MemoryRouter });
        expect(screen.getByRole('heading', { name: /daywish/i})).toBeInTheDocument();
    })
})