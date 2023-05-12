export const kebab = (value) => value.replaceAll('_', '-').replaceAll(/(.)(?=[A-Z])/g, '$1-').toLowerCase();

export const snake = (value) => value.replaceAll('-', '_').replaceAll(/(.)(?=[A-Z])/g, '$1_').toLowerCase();

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