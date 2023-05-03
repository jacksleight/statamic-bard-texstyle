export const kebab = (value) => value.replace('_', '-').replace(/(.)(?=[A-Z])/, '$1-').toLowerCase();

export const snake = (value) => value.replace('-', '_').replace(/(.)(?=[A-Z])/, '$1_').toLowerCase();

export const itemToType = (item) => {
    const typeMap = {
        btsSpan: 'span',
        btsDiv: 'div',
        bulletList: 'unordered_list',
    };
    return item.type === 'heading'
        ? `${item.type}_${item.attrs.level}`
        : (typeMap[item.type] || snake(item.type));
}