import { em } from "polished";

export const Breakpoints = {
  Small: em("767px"),
  Medium: em("768px"),
  Large: em("1028px"),
};

export const MediaQueries = {
  Small: `(max-width: ${Breakpoints.Small})`,
  Medium: `(min-width: ${Breakpoints.Medium})`,
  Large: `(min-width: ${Breakpoints.Large})`,
};
