import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero Component", () => {
  it("renders the name prop correctly", () => {
    const testName = "Test Hero";
    render(<Hero name={testName} />);
    expect(screen.getByText(testName)).toBeTruthy();
  });
});
