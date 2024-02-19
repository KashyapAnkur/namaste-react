import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";


test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});