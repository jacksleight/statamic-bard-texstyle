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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
                <path d="M384 1408c0 53.33-18.667 98.67-56 136s-82.667 56-136 56-98.667-18.67-136-56-56-82.67-56-136 18.667-98.67 56-136 82.667-56 136-56 98.667 18.67 136 56 56 82.67 56 136Zm0-512c0 53.333-18.667 98.667-56 136-37.333 37.33-82.667 56-136 56s-98.667-18.67-136-56C18.667 994.667 0 949.333 0 896s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Zm0-512c0 53.333-18.667 98.667-56 136s-82.667 56-136 56-98.667-18.667-136-56S0 437.333 0 384s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Z" style="fill-rule:nonzero" transform="rotate(1.025) scale(.00893)"/>
                <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${ident}</text>
            </svg>
        `;
    },
    'ordered-list': (style) => {
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
                <path d="M381 1620c0 53.33-18.167 95.33-54.5 126s-81.5 46-135.5 46c-70.667 0-128-22-172-66l57-88c32.667 30 68 45 106 45 19.333 0 36.167-4.83 50.5-14.5 14.333-9.67 21.5-23.83 21.5-42.5 0-42.67-35-61.33-105-56l-26-56c5.333-6.67 16.167-21.17 32.5-43.5s30.5-40.33 42.5-54c12-13.67 24.333-26.5 37-38.5v-1c-10.667 0-26.833.33-48.5 1-21.667.67-37.833 1-48.5 1v53H32v-152h333v88l-95 115c34 8 61 24.33 81 49s30 54 30 88Zm2-627v159H21c-4-24-6-42-6-54 0-34 7.833-65 23.5-93S73 954.333 95 937s44-33.167 66-47.5c22-14.333 40.833-28.833 56.5-43.5 15.667-14.667 23.5-29.667 23.5-45 0-16.667-4.833-29.5-14.5-38.5S203.667 749 187 749c-30.667 0-57.667 19.333-81 58l-85-59c16-34 39.833-60.5 71.5-79.5S159.333 640 198 640c48.667 0 89.667 13.833 123 41.5s50 65.167 50 112.5c0 33.333-11.333 63.833-34 91.5s-47.667 49.167-75 64.5c-27.333 15.333-52.5 32.167-75.5 50.5-23 18.33-34.833 35.83-35.5 52.5h127v-60h105Zm1-580v99H49v-99h107c0-27.333.167-67.833.5-121.5.333-53.667.5-94.167.5-121.5v-12h-2c-5.333 11.333-22 29.333-50 54l-71-76L170 9h106v404h108Z" style="fill-rule:nonzero" transform="rotate(1.025) scale(.00893)"/>
                <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${ident}</text>
            </svg>
        `;
    },
    'link': (style) => {
        const ident = style.ident;
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
                <path d="M1520 1216c0-26.67-9.33-49.33-28-68l-208-208c-18.67-18.667-41.33-28-68-28-28 0-52 10.667-72 32 2 2 8.33 8.167 19 18.5s17.83 17.5 21.5 21.5c3.67 4 8.67 10.333 15 19 6.33 8.67 10.67 17.17 13 25.5 2.33 8.33 3.5 17.5 3.5 27.5 0 26.67-9.33 49.33-28 68s-41.33 28-68 28c-10 0-19.17-1.17-27.5-3.5-8.33-2.33-16.83-6.67-25.5-13-8.67-6.33-15-11.33-19-15s-11.17-10.83-21.5-21.5-16.5-17-18.5-19c-22 20.67-33 45-33 73 0 26.67 9.333 49.33 28 68l206 207c18 18 40.67 27 68 27 26.67 0 49.33-8.67 68-26l147-146c18.67-18.67 28-41 28-67ZM817 511c0-26.667-9.333-49.333-28-68L583 236c-18.667-18.667-41.333-28-68-28-26 0-48.667 9-68 27L300 381c-18.667 18.667-28 41-28 67 0 26.667 9.333 49.333 28 68l208 208c18 18 40.667 27 68 27 28 0 52-10.333 72-31-2-2-8.333-8.167-19-18.5S611.167 684 607.5 680c-3.667-4-8.667-10.333-15-19s-10.667-17.167-13-25.5c-2.333-8.333-3.5-17.5-3.5-27.5 0-26.667 9.333-49.333 28-68s41.333-28 68-28c10 0 19.167 1.167 27.5 3.5 8.333 2.333 16.833 6.667 25.5 13 8.667 6.333 15 11.333 19 15s11.167 10.833 21.5 21.5 16.5 17 18.5 19c22-20.667 33-45 33-73Zm895 705c0 80-28.33 147.67-85 203l-147 146c-55.33 55.33-123 83-203 83-80.67 0-148.67-28.33-204-85l-206-207c-55.333-55.33-83-123-83-203 0-82 29.333-151.67 88-209l-88-88c-57.333 58.667-126.667 88-208 88-80 0-148-28-204-84L164 652c-56-56-84-124-84-204s28.333-147.667 85-203L312 99c55.333-55.333 123-83 203-83 80.667 0 148.667 28.333 204 85l206 207c55.333 55.333 83 123 83 203 0 82-29.333 151.667-88 209l88 88c57.33-58.667 126.67-88 208-88 80 0 148 28 204 84l208 208c56 56 84 124 84 204Z" style="fill-rule:nonzero" transform="matrix(.00702 0 0 .00702 -.562 3.86)"/>
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
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
        <path d="M1615 0c46.67 0 87.5 15.5 122.5 46.5S1790 116.333 1790 163c0 42-15 92.333-45 151-221.33 419.333-376.33 670-465 752-64.67 60.67-137.33 91-218 91-84 0-156.167-30.83-216.5-92.5S755 929.667 755 845c0-85.333 30.667-156 92-212l638-579c39.33-36 82.67-54 130-54ZM706 1034c26 50.67 61.5 94 106.5 130s95.167 61.33 150.5 76l1 71c2.667 142-40.5 257.67-129.5 347-89 89.33-205.167 134-348.5 134-82 0-154.667-15.5-218-46.5S153.833 1672 115.5 1618 48.333 1503 29 1435 0 1293.67 0 1215c4.667 3.33 18.333 13.33 41 30s43.333 31.5 62 44.5 38.333 25.17 59 36.5c20.667 11.33 36 17 46 17 27.333 0 45.667-12.33 55-37 16.667-44 35.833-81.5 57.5-112.5s44.833-56.33 69.5-76 54-35.5 88-47.5 68.333-20.5 103-25.5 76.333-8.5 125-10.5Z" style="fill-rule:nonzero" transform="matrix(.0069 0 0 .0069 3.626 3.63)"/>
        <path d="M929.283 1157.03c-1.915-11.84-10.479-37.51-25.692-77.02-17.404-45.19-37.615-95.015-60.633-149.471-23.017-54.457-34.807-82.528-35.368-84.212l-378.953-1.684c-14.596 32.561-36.07 87.439-64.422 164.637-28.351 77.19-42.527 122.81-42.527 136.84 0 12.35 3.93 22.88 11.79 31.58 7.86 8.7 20.07 15.58 36.632 20.63 16.562 5.05 30.176 8.84 40.843 11.37 10.667 2.53 26.667 4.91 48 7.16 21.334 2.24 32.843 3.37 34.527 3.37.562 10.66.842 26.94.842 48.84 0 5.05-.561 12.63-1.684 22.74-32.562 0-81.545-2.81-146.949-8.43-65.405-5.61-114.388-8.42-146.95-8.42-4.491 0-11.93 1.13-22.316 3.37-10.386 2.25-16.421 3.37-18.105 3.37-44.913 7.86-97.686 11.79-158.318 11.79l1.684-66.53c12.913-3.93 28.632-7.43 47.159-10.52 18.526-3.09 34.527-6.04 48-8.84 13.474-2.81 27.369-6.88 41.685-12.22 14.316-5.33 26.808-13.47 37.474-24.42 10.667-10.94 19.369-25.12 26.106-42.52l199.581-518.748L637.482 0h107.791c4.491 7.86 7.579 13.755 9.263 17.684L927.17 421.9c18.527 43.79 48.281 116.072 89.26 216.845 26.86 66.026 49.85 121.869 68.99 167.531l-58.05 52.682c-.04.034-.07.068-.11.102-58.128 53.072-87.412 119.948-87.412 200.82 0 34.07 5.215 66.15 15.668 96.24a49.78 49.78 0 0 0-5.603-.08c-7.058.29-13.934.62-20.63.99Zm471.167 135.05c-.01.52-.01.99-.01 1.41h-1.86c.62-.47 1.25-.94 1.87-1.41ZM610.534 362.952 467.375 741.904c18.526 0 56.842.562 114.948 1.685 58.106 1.123 103.16 1.684 135.16 1.684 10.667 0 26.667-.561 48.001-1.684-48.843-142.037-100.493-268.916-154.95-380.637Z" style="fill-rule:nonzero" transform="rotate(1.025) scale(.00893)"/>
    </svg>
`;