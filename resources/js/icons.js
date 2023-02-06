let maskCount = 0;

const icons = {
    'letter': (style) => {
        const letter = {
            heading: 'H',
            paragraph: 'P',
            span: 'T',
            link: 'L',
            bulletList: 'L',
            orderedList: 'L',
            div: 'C',
        }[style.type];
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="currentColor" style="width: 24px;">
                <text text-anchor="middle" x="8.3" y="15" style="font-family: Times, serif; font-size: 21px;">${letter}</text>
                <text text-anchor="middle" x="20" y="12.5" style="font-size: 12px;">${ident}</text>
            </svg>
        `;
    },
    'square': (style) => {
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect width="15" height="15" x="0.5" y="0.5" rx="2" stroke-width="1" stroke="currentColor" fill="none" />
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;">${ident}</text>
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
                    <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" fill="black">${ident}</text>
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
                <text text-anchor="middle" x="8" y="12" style="font-size: 11px;">${ident}</text>
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
                    <text text-anchor="middle" x="8" y="12" style="font-size: 11px;" fill="black">${ident}</text>
                </mask>
                <circle cx="8" cy="8" r="7.5" stroke-width="1" stroke="currentColor" mask="url(#${maskId})" />
            </svg>
        `;
    },
    'dashes': (style) => {
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect width="4" height="2" x="0" y="2" rx="1" fill="currentColor" />
                <rect width="4" height="2" x="0" y="7" rx="1" fill="currentColor" />
                <rect width="4" height="2" x="0" y="12" rx="1" fill="currentColor" />
                <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${ident}</text>
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
    let icon;
    if (style.icon) {
        icon = style.icon;
    } else if (style.type === 'bulletList' || style.type === 'orderedList') {
        icon = 'dashes';
    } else if (style.type === 'div') {
        icon = 'square';
    } else {
        icon = 'letter';
    }
    return icons[icon]
        ? icons[icon](style)
        : icon;
}

export const menuIcon = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path fill="currentColor" d="M12 17.989V16h.532a.67.67 0 0 0 .633-.887L12.349 13H6.117l-.815 2.113a.67.67 0 0 0 .633.887H7v2H0v-2h.43a1.4 1.4 0 0 0 1.32-.935L7.257 0h3.952l4.768 13.042-.346.319c-1.407 1.317-1.454 1.899-1.909 4.069a.865.865 0 0 0-.016.258 1.074 1.074 0 0 0-.114-.006c-.648.007-1.166.12-1.592.307ZM7.114 10h4.238L9.093 3.801 7.114 10Z" style="fill-rule:nonzero"/><path fill="currentColor" d="M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604Zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373Z" style="fill-rule:nonzero" transform="translate(7.766 7.766) scale(.6764)"/></svg>`;