import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen, userEvent } from "./utils/test-utils";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByText("Vite Docs")).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<App />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("Click Me : 1")).toBeInTheDocument();
  });
});
