import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import resCardMock from  '../mocks/resCardMock.json';

it("should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={resCardMock} />);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
    
});