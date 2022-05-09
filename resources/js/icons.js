let maskCount = 0;

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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="currentColor" style="width: 24px;">
                <text text-anchor="middle" x="8.3" y="16" style="font-family: Times, serif; font-size: 23px;">${letter}</text>
                <text text-anchor="middle" x="20" y="12.5" style="font-size: 12px;" text-anchor="end">${ident}</text>
            </svg>
        `;
    },
    'square': (style) => {
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect width="15" height="15" x="0.5" y="0.5" rx="2" stroke-width="1" stroke="currentColor" fill="none" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" text-anchor="end">${ident}</text>
            </svg>
        `;
    },
    'square-solid': (style) => {
        const ident = style.ident;
        const maskId = `bts-mask-${maskCount++}`;
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <mask id="${maskId}">
                    <rect width="16" height="16" fill="white" />
                    <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" text-anchor="end" fill="black">${ident}</text>
                </mask>
                <rect width="15" height="15" x="0.5" y="0.5" rx="2" stroke-width="1" stroke="currentColor" mask="url(#${maskId})" />
            </svg>
        `;
    },
    'circle': (style) => {
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="currentColor" fill="none" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" text-anchor="end">${ident}</text>
            </svg>
        `;
    },
    'circle-solid': (style) => {
        const ident = style.ident;
        const maskId = `bts-mask-${maskCount++}`;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <mask id="${maskId}">
                    <rect width="16" height="16" fill="white" />
                    <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" text-anchor="end" fill="black">${ident}</text>
                </mask>
                <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="currentColor" mask="url(#${maskId})" />
            </svg>
        `;
    },
    'symbol': (style) => {
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <text text-anchor="middle" x="8" y="16" style="font-size: 23px;">${ident}</text>
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