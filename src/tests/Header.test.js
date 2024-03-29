import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header component test cases", () => {
    it("should change login button to Logout button on click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const loginBtn = screen.getByRole("button", { name: "Login" });
        fireEvent.click(loginBtn);
        const logoutBtn = screen.getByRole("button", { name: "Logout" });

        expect(logoutBtn).toBeInTheDocument();
    });
});