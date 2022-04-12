export const styleToIcon = (style, type) => {
    if (style.icon) {
        return style.icon;
    }
    if (style.type === 'div') {
        return `
            <div class="bts-icon bts-icon-square">
                <span class="bts-icon-ident">${style.ident}</span>
            </div>
        `;
    }
    return `
        <div class="bts-icon bts-icon-alpha">
            <span class="bts-icon-char">${type.char}</span>
            <span class="bts-icon-ident">${style.ident}</span>
        </div>
    `;
}