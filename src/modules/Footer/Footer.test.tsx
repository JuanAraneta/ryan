import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer Component", () => {
  it("renders the name prop correctly", () => {
    const testName = "Test Footer";
    render(<Footer name={testName} />);
    expect(screen.getByText(testName)).toBeTruthy();
  });
});
