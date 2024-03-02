import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

/*
    - test cases have:-
        render
        querying
        assertion

    - nesting describe also can be there
        describe("this is describe1", () => {
            describe("this is describe2", () => {
                test("test case inside describe 2", () => {
                    ...
                });
            });
        });

    - you can write "it" in case of "test" also
        - "it" is the alias to "test".
*/

describe("Contact us page test cases", () => {

    beforeAll(() => {
        console.log("Before All");
    });

    beforeEach(() => {
        console.log("Before Each");
    });

    afterAll(() => {
        console.log("After All");
    });

    afterEach(() => {
        console.log("After Each");
    });

    it("Should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes on the contact component load", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });
});