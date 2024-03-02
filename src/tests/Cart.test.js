import RestaurantCard from "../components/RestaurantCard";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { act } from "react-dom/test-utils";
import { fireEvent, render, waitFor } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

it("Should load restaurant menu component", async() => {
    await act(async () => {
        render(
            <Provider store={appStore}>
            <RestaurantMenu />
            </Provider>
        );
    });

    const accordionHeader = screen.getByText("Biryani (5)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("fiidItems").length).toBe(5);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    console.log(addBtns.length);
    fireEvent.click(addBtns[0]);
})