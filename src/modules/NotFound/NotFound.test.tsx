import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe("NotFound Component", () => {
  it("renders the name prop correctly", () => {
    const testName = "Test NotFound";
    render(<NotFound name={testName} />);
    expect(screen.getByText(testName)).toBeTruthy();
  });
});
