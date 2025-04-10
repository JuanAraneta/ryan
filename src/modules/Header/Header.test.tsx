import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header Component", () => {
  it("renders the name prop correctly", () => {
    const testName = "Test Header";
    render(<Header name={testName} />);
    expect(screen.getByText(testName)).toBeTruthy();
  });
});
