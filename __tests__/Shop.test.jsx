import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Shop from "../src/pages/Shop";

describe("Shop page", () => {
    it("Renders the shop page content", () => {
        render(<Shop />, {wrapper: BrowserRouter});
        expect(screen.getByRole('heading', { name: /shop page/i})).toBeInTheDocument();
    })
})