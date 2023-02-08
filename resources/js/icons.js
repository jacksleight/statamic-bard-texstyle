let maskCount = 0;

const icons = {
    'letter': (style) => {
        const letter = {
            heading: 'H',
            paragraph: 'P',
            btsSpan: 'T',
        }[style.type] ?? 'S';
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
    'bullet-list': (style) => {
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M384 1408c0 53.33-18.667 98.67-56 136s-82.667 56-136 56-98.667-18.67-136-56-56-82.67-56-136 18.667-98.67 56-136 82.667-56 136-56 98.667 18.67 136 56 56 82.67 56 136Zm0-512c0 53.333-18.667 98.667-56 136-37.333 37.33-82.667 56-136 56s-98.667-18.67-136-56C18.667 994.667 0 949.333 0 896s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Zm0-512c0 53.333-18.667 98.667-56 136s-82.667 56-136 56-98.667-18.667-136-56S0 437.333 0 384s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Z" transform="rotate(1.025) scale(.00893)"/>
                <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${ident}</text>
            </svg>
        `;
    },
    'ordered-list': (style) => {
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M381 1620c0 53.33-18.167 95.33-54.5 126s-81.5 46-135.5 46c-70.667 0-128-22-172-66l57-88c32.667 30 68 45 106 45 19.333 0 36.167-4.83 50.5-14.5 14.333-9.67 21.5-23.83 21.5-42.5 0-42.67-35-61.33-105-56l-26-56c5.333-6.67 16.167-21.17 32.5-43.5s30.5-40.33 42.5-54c12-13.67 24.333-26.5 37-38.5v-1c-10.667 0-26.833.33-48.5 1-21.667.67-37.833 1-48.5 1v53H32v-152h333v88l-95 115c34 8 61 24.33 81 49s30 54 30 88Zm2-627v159H21c-4-24-6-42-6-54 0-34 7.833-65 23.5-93S73 954.333 95 937s44-33.167 66-47.5c22-14.333 40.833-28.833 56.5-43.5 15.667-14.667 23.5-29.667 23.5-45 0-16.667-4.833-29.5-14.5-38.5S203.667 749 187 749c-30.667 0-57.667 19.333-81 58l-85-59c16-34 39.833-60.5 71.5-79.5S159.333 640 198 640c48.667 0 89.667 13.833 123 41.5s50 65.167 50 112.5c0 33.333-11.333 63.833-34 91.5s-47.667 49.167-75 64.5c-27.333 15.333-52.5 32.167-75.5 50.5-23 18.33-34.833 35.83-35.5 52.5h127v-60h105Zm1-580v99H49v-99h107c0-27.333.167-67.833.5-121.5.333-53.667.5-94.167.5-121.5v-12h-2c-5.333 11.333-22 29.333-50 54l-71-76L170 9h106v404h108Z" transform="rotate(1.025) scale(.00893)"/>
                <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${ident}</text>
            </svg>
        `;
    },
    'link': (style) => {
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M1520 1216c0-26.67-9.33-49.33-28-68l-208-208c-18.67-18.667-41.33-28-68-28-28 0-52 10.667-72 32 2 2 8.33 8.167 19 18.5s17.83 17.5 21.5 21.5c3.67 4 8.67 10.333 15 19 6.33 8.67 10.67 17.17 13 25.5 2.33 8.33 3.5 17.5 3.5 27.5 0 26.67-9.33 49.33-28 68s-41.33 28-68 28c-10 0-19.17-1.17-27.5-3.5-8.33-2.33-16.83-6.67-25.5-13-8.67-6.33-15-11.33-19-15s-11.17-10.83-21.5-21.5-16.5-17-18.5-19c-22 20.67-33 45-33 73 0 26.67 9.333 49.33 28 68l206 207c18 18 40.67 27 68 27 26.67 0 49.33-8.67 68-26l147-146c18.67-18.67 28-41 28-67ZM817 511c0-26.667-9.333-49.333-28-68L583 236c-18.667-18.667-41.333-28-68-28-26 0-48.667 9-68 27L300 381c-18.667 18.667-28 41-28 67 0 26.667 9.333 49.333 28 68l208 208c18 18 40.667 27 68 27 28 0 52-10.333 72-31-2-2-8.333-8.167-19-18.5S611.167 684 607.5 680c-3.667-4-8.667-10.333-15-19s-10.667-17.167-13-25.5c-2.333-8.333-3.5-17.5-3.5-27.5 0-26.667 9.333-49.333 28-68s41.333-28 68-28c10 0 19.167 1.167 27.5 3.5 8.333 2.333 16.833 6.667 25.5 13 8.667 6.333 15 11.333 19 15s11.167 10.833 21.5 21.5 16.5 17 18.5 19c22-20.667 33-45 33-73Zm895 705c0 80-28.33 147.67-85 203l-147 146c-55.33 55.33-123 83-203 83-80.67 0-148.67-28.33-204-85l-206-207c-55.333-55.33-83-123-83-203 0-82 29.333-151.67 88-209l-88-88c-57.333 58.667-126.667 88-208 88-80 0-148-28-204-84L164 652c-56-56-84-124-84-204s28.333-147.667 85-203L312 99c55.333-55.333 123-83 203-83 80.667 0 148.667 28.333 204 85l206 207c55.333 55.333 83 123 83 203 0 82-29.333 151.667-88 209l88 88c57.33-58.667 126.67-88 208-88 80 0 148 28 204 84l208 208c56 56 84 124 84 204Z" transform="matrix(.00702 0 0 .00702 -.562 3.86)"/>
                <text text-anchor="middle" x="11" y="8" style="font-size: 11px;">${ident}</text>
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
    } else if (style.type === 'link') {
        icon = 'link';
    } else if (style.type === 'bulletList') {
        icon = 'bullet-list';
    } else if (style.type === 'orderedList') {
        icon = 'ordered-list';
    } else if (style.type === 'btsDiv') {
        icon = 'square';
    } else {
        icon = 'letter';
    }
    return icons[icon]
        ? icons[icon](style)
        : icon;
}

export const menuIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
        <path d="m.304-.513-.079.221h.16L.304-.513ZM.278-.676h.144l.232.61.061.008V0H.391v-.058l.068-.005.008-.013-.053-.149H.201l-.05.148.01.012.064.007V0h-.241v-.058l.065-.004.229-.614Z" transform="matrix(20.36607 0 0 20.36607 .894 14.905)"/>
    </svg>
`;

export const attrsIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
        <path d="m491 1536 91-91-235-235-91 91v107h128v128h107Zm523-928c0-14.667-7.33-22-22-22-6.667 0-12.333 2.333-17 7l-542 542c-4.667 4.67-7 10.33-7 17 0 14.67 7.333 22 22 22 6.667 0 12.333-2.33 17-7l542-542c4.67-4.667 7-10.333 7-17Zm-54-192 416 416-832 832H128v-416l832-832Zm683 96c0 35.333-12.33 65.333-37 90l-166 166-416-416 166-165c24-25.333 54-38 90-38 35.33 0 65.67 12.667 91 38l235 234c24.67 26 37 56.333 37 91Z" transform="rotate(1.025) scale(.00893)"/>
    </svg>
`;