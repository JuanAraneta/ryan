import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

// Mock the getInspector function
vi.mock("@/utils/inspectorMode", () => ({
  getInspector: vi.fn(() => vi.fn(() => ({}))),
}));

describe("Footer Component", () => {
  it("renders the name prop correctly", () => {
    const testName = "Test Footer";
    render(<Footer data={{ sys: { id: "123" }, title: testName }} />);
    expect(screen.getByText(testName)).toBeTruthy();
  });
});
