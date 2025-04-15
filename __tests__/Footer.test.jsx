import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../src/components/Footer";

describe("Footer", () => {
    it("Renders Footer content", () => {
        render(<Footer />, { wrapper: BrowserRouter});
        
        expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
    })
})