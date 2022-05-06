const icons = {
    'letter': (style) => {
        const letter = {
            heading: 'H',
            paragraph: 'P',
            span: 'T',
            div: 'C',
        }[style.type];
        const ident = style.ident;      
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" style="width: 24px;">
                <text text-anchor="middle" x="8.3" y="16" style="font-family: Times, serif; font-size: 23px;">${letter}</text>
                <text text-anchor="middle" x="20" y="12.5" style="font-size: 12px;" text-anchor="end">${ident}</text>
            </svg>
        `;
    },
    'square': (style) => {
        const ident = style.ident;      
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <rect width="15" height="15" x="0.5" y="0.5" rx="2" stroke-width="1" stroke="currentColor" fill="none" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" text-anchor="end">${ident}</text>
            </svg>
        `;
    },
    'square_filled': (style) => {
        const ident = style.ident;      
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <rect width="15" height="15" x="0.5" y="0.5" rx="2" stroke-width="1" stroke="currentColor" fill="black" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" fill="white" text-anchor="end">${ident}</text>
            </svg>
        `;
    },
    'circle': (style) => {
        const ident = style.ident;      
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="currentColor" fill="none" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" text-anchor="end">${ident}</text>
            </svg>
        `;
    },
    'circle_filled': (style) => {
        const ident = style.ident;      
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="currentColor" fill="black" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" fill="white" text-anchor="end">${ident}</text>
            </svg>
        `;
    },
};

export const styleToIcon = (style, type) => {
    const icon = style.icon
        ? style.icon
        : (style.type === 'div' ? 'square' : 'letter');
   return icons[icon]
        ? icons[icon](style)
        : icon;
}