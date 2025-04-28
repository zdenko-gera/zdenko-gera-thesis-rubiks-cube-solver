// *** CUBE TYPES ***
export const MIDDLE_CUBE = 0;
export const EDGE_CUBE = 1;
export const CORNER_CUBE = 2;

// *** CUBE TYPES END ***

// *** COLORS ***
export const WHITE = 'rgb(255, 255, 255)';
export const RED = 'rgb(219, 88, 86)';
export const GREEN = 'rgb(134, 213, 134)';
export const ORANGE = 'rgb(255, 150, 65)';
export const BLUE = 'rgb(50, 115, 255)';
export const YELLOW = 'rgb(255, 255, 153)';

// *** COLORS END ***

export const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));
