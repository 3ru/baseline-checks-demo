const selected = new Set(["first", "last"]);

const excluded = new Set(["first"]);

export const remaining = selected.difference(excluded);
