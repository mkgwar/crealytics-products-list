import { act } from "react-dom/test-utils";
import App from "../src/App";
import { render, screen, fireEvent } from "@testing-library/react";
import * as useProductData from "../src/hooks/useProductsData";

describe("Product List app test cases", () => {
  const mockDataValue = {
    data: [
      {
        title: "Jeans",
        gtin: "2001007926858",
        gender: "female",
        sale_price: "39.95 EUR",
        price: "39.95 EUR",
        image_link: "",
      },
      {
        title: "Jeans",
        gtin: "2001007926858",
        gender: "male",
        sale_price: "20.95 EUR",
        price: "39.95 EUR",
        image_link: "",
      },
      {
        title: "Pants",
        gtin: "2001007926858",
        gender: "male",
        sale_price: "39.95 EUR",
        price: "39.95 EUR",
        image_link: "",
      },
      {
        title: "Pants",
        gtin: "2001007926858",
        gender: "female",
        sale_price: "20.95 EUR",
        price: "39.95 EUR",
        image_link: "",
      },
    ],
  };

  it("should display the search field", () => {
    render(<App />);

    const searchField = screen.getByTestId("search-field");

    expect(searchField).toBeInTheDocument();
  });

  it("should take user input in search field", () => {
    render(<App />);

    const searchField = screen.getByTestId("search-field");
    fireEvent.change(searchField, { target: { value: "abcde" } });

    expect(screen.getByDisplayValue("abcde")).toHaveAttribute(
      "data-testid",
      "search-field"
    );
  });

  it("should show correct results for search query", async () => {
    vi.spyOn(useProductData, "default").mockReturnValue(mockDataValue);
    render(<App />);

    const searchField = screen.getByTestId("search-field");
    await act(async () =>
      fireEvent.change(searchField, { target: { value: "jeans" } })
    );

    const allProductTitles = screen.getAllByTestId("product-title");

    allProductTitles.forEach((title) => {
      expect(title).toHaveTextContent(/jeans/i);
      expect(title).not.toHaveTextContent(/pants/i);
    });
  });

  it("should display same gender as selected in filter", async () => {
    vi.spyOn(useProductData, "default").mockReturnValue(mockDataValue);
    render(<App />);

    const genderSelect = screen.getByTestId("gender-select");
    await act(async () =>
      fireEvent.change(genderSelect, { target: { value: "male" } })
    );

    const allProductGender = screen.getAllByTestId("product-gender");

    allProductGender.forEach((gender) => {
      expect(gender).toHaveTextContent(/male/i);
      expect(gender).not.toHaveTextContent(/female/i);
    });
  });

  it("should display products on sale when selected On Sale checkbox", async () => {
    vi.spyOn(useProductData, "default").mockReturnValue(mockDataValue);
    render(<App />);

    const onSaleCheckbox = screen.getByTestId("onSale-check");
    await act(async () => fireEvent.click(onSaleCheckbox));

    let allProductOnSale = screen.getAllByTestId("product-onSale");
    let allProducts = screen.getAllByTestId("product-card");

    expect(allProducts.length).toEqual(allProductOnSale.length);

    await act(async () => fireEvent.click(onSaleCheckbox));

    allProductOnSale = screen.getAllByTestId("product-onSale");
    allProducts = screen.getAllByTestId("product-card");

    expect(allProducts.length).toBeGreaterThan(allProductOnSale.length);
  });
});
