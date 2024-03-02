// Integration testing
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            const mockData = MOCK_DATA;
            return Promise.resolve(mockData);
        }
    });
});


it("should render the body component with search button" ,async() => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "bu" } });
    fireEvent.click(searchBtn);
    
    await waitFor(() => {
        const card = screen.getByTestId("resCard");
        expect(card).toBeInTheDocument();
    });
});

// it("should filter top rated restaurant", async() => {
//     await act(async () => {
//         render(
//             <BrowserRouter>
//                 <Body />
//             </BrowserRouter>
//         )
//     })
//     const cardsBeforeFilter = screen.getAllByTestId("resCard");
//     expect(cardsBeforeFilter.length).toBe(20);
//     const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
//     fireEvent.click(topRatedBtn);
//     const cardsAfterFilter = screen.getAllByTestId("resCard");
//     expect(cardsAfterFilter.length).toBe(4);
// })