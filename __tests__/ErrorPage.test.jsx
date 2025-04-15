import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes/Routes";

describe('ErrorPage', () => {
    it("Renders on non-existant links", () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ["/cart"], // This route doesn't exist
        });

        render(<RouterProvider router={router} />);
        expect(screen.getByText(/network issue/i)).toBeInTheDocument();
    })

    it("Renders link to home page", () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ["/nonexistent"], // This route doesn't exist
        });

        render(<RouterProvider router={router} />);
        expect(screen.getByRole('link', { name: /return to the main page/i})).toBeInTheDocument();
    })
})

// expect(screen.getByRole('link', {name: /home/i})).toBeInTheDocument();