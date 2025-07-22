import { Children, ReactNode, JSX, ReactElement } from "react";

export function reactNodeIsSingleElement(
  node: ReactNode
): asserts node is ReactElement {
  if (Children.count(node) !== 1) {
    throw new Error(
      "Component with asChild prop must contain exactly one child element."
    );
  }
}
