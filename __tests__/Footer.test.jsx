import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../src/components/Footer";

describe("Footer", () => {
    it("Renders Footer", () => {
        render(<Footer />, { wrapper: MemoryRouter});
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    })

    it("Renders Footer text content", () => {
        render(<Footer />, { wrapper: MemoryRouter });
        expect(screen.getByRole('contentinfo')).toHaveTextContent(/all rights reserved/i);
    })
})