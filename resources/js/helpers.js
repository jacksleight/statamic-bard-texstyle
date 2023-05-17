export const kebab = (value) => value.replaceAll('_', '-').replaceAll(/(.)(?=[A-Z])/g, '$1-').toLowerCase();

export const snake = (value) => value.replaceAll('-', '_').replaceAll(/(.)(?=[A-Z])/g, '$1_').toLowerCase();