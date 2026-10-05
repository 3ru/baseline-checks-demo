const selected = new Set(["first", "last"]);

const excluded = new Set(["first"]);

export const remaining = new Set([...selected].filter(value => !excluded.has(value)));
