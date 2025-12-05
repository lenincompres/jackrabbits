import CardFloating from "../CardFloating.js";

export const mixColor = (v, p = 20, b = "white") => `color-mix(in srgb, var(--${v}) ${p}%, ${b})`;

export const cMix = v => `color-mix(in srgb, var(--full) 90%, var(--${v}))`;

const bkColor = (val, suit) => !suit ? undefined : val === suit ? mixColor(suit.symbol, 34, "black") : mixColor(suit.symbol);

const txColor = (val, suit) => !suit ? undefined : val === suit ? mixColor(suit.symbol, 34) : "initial";

export const suitStyle = (suit) => ({
  transition: "0.2s ease-in-out",
  backgroundColor: CardFloating._forcedSuit.as(val => bkColor(val, suit)),
  color: CardFloating._forcedSuit.as(val => txColor(val, suit)),
  boxShadow: CardFloating._forcedSuit.as(val => val != suit ? `0 0 2.5rem var(--${suit.symbol}) inset, 1px 1px 3px black` : ''),
});

export const suitColor = (key, suit, match) => (match && match != key) ? `transparent` : suit ? mixColor(suit.symbol, 30) : `var(--${key})`;