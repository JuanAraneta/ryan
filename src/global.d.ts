import "@total-typescript/ts-reset";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
