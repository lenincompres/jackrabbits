
export const mixColor = (v, p = 15, b = "white") => `color-mix(in srgb, var(--${v}) ${p}%, ${b})`;

export const cMix = v => `color-mix(in srgb, var(--full) 90%, var(--${v}))`;