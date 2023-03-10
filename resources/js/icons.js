let maskCount = 0;

const icons = {
    // @deprecated: Icons for Statamic v3, drop when v3 is dropped
    classic: {
        'letter': (style) => {
            const letter = {
                heading: 'H',
                paragraph: 'P',
                btsSpan: 'T',
            }[style.type] ?? 'S';
            const ident = style.ident;
            return `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="currentColor" style="width: 24px;">
                    <text text-anchor="middle" x="8.3" y="15" style="font-family: Times, Times New Roman, serif; font-size: 21px;">${letter}</text>
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
                    <path d="M384 1408c0 53.33-18.667 98.67-56 136s-82.667 56-136 56-98.667-18.67-136-56-56-82.67-56-136 18.667-98.67 56-136 82.667-56 136-56 98.667 18.67 136 56 56 82.67 56 136Zm0-512c0 53.333-18.667 98.667-56 136-37.333 37.33-82.667 56-136 56s-98.667-18.67-136-56C18.667 994.667 0 949.333 0 896s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Zm0-512c0 53.333-18.667 98.667-56 136s-82.667 56-136 56-98.667-18.667-136-56S0 437.333 0 384s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Z" transform="scale(.00893)"/>
                    <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${ident}</text>
                </svg>
            `;
        },
        'ordered-list': (style) => {
            const ident = style.ident;
            return `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M381 1620c0 53.33-18.167 95.33-54.5 126s-81.5 46-135.5 46c-70.667 0-128-22-172-66l57-88c32.667 30 68 45 106 45 19.333 0 36.167-4.83 50.5-14.5 14.333-9.67 21.5-23.83 21.5-42.5 0-42.67-35-61.33-105-56l-26-56c5.333-6.67 16.167-21.17 32.5-43.5s30.5-40.33 42.5-54c12-13.67 24.333-26.5 37-38.5v-1c-10.667 0-26.833.33-48.5 1-21.667.67-37.833 1-48.5 1v53H32v-152h333v88l-95 115c34 8 61 24.33 81 49s30 54 30 88Zm2-627v159H21c-4-24-6-42-6-54 0-34 7.833-65 23.5-93S73 954.333 95 937s44-33.167 66-47.5c22-14.333 40.833-28.833 56.5-43.5 15.667-14.667 23.5-29.667 23.5-45 0-16.667-4.833-29.5-14.5-38.5S203.667 749 187 749c-30.667 0-57.667 19.333-81 58l-85-59c16-34 39.833-60.5 71.5-79.5S159.333 640 198 640c48.667 0 89.667 13.833 123 41.5s50 65.167 50 112.5c0 33.333-11.333 63.833-34 91.5s-47.667 49.167-75 64.5c-27.333 15.333-52.5 32.167-75.5 50.5-23 18.33-34.833 35.83-35.5 52.5h127v-60h105Zm1-580v99H49v-99h107c0-27.333.167-67.833.5-121.5.333-53.667.5-94.167.5-121.5v-12h-2c-5.333 11.333-22 29.333-50 54l-71-76L170 9h106v404h108Z" transform="scale(.00893)"/>
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
    },
    modern: {
        'letter': (style) => {
            const letter = {
                heading: 'H',
                paragraph: 'P',
                btsSpan: 'T',
            }[style.type] ?? 'S';
            const letterPath = {
                H: '<path d="M9.506,6.921L1.719,6.921L1.719,0.921C1.719,0.404 1.335,0 0.87,0C0.384,0 -0,0.404 -0,0.921L-0,15.056C-0,15.573 0.384,16 0.87,16C1.335,16 1.719,15.573 1.719,15.056L1.719,8.719L9.506,8.719L9.506,15.056C9.506,15.573 9.89,16 10.375,16C10.84,16 11.225,15.573 11.225,15.056L11.225,0.921C11.225,0.404 10.84,0 10.375,0C9.89,0 9.506,0.404 9.506,0.921L9.506,6.921Z" />',
                P: '<path d="M0.948,0.045C0.429,0.045 0,0.474 0,0.993L0,15.052C0,15.571 0.429,16 0.97,16C1.489,16 1.918,15.571 1.918,15.052L1.918,9.772C2.618,9.839 3.408,9.862 4.288,9.862C6.116,9.862 7.515,9.388 8.508,8.417C9.478,7.447 9.975,6.274 9.975,4.897C9.975,3.475 9.523,2.302 8.621,1.377C7.695,0.451 6.206,-0 4.13,-0C3.385,-0 2.324,0.023 0.948,0.045ZM1.918,1.85C2.911,1.828 3.701,1.805 4.31,1.805C6.748,1.805 7.944,2.956 7.944,4.874C7.944,6.86 6.544,8.056 4.22,8.056C3.543,8.056 2.776,8.011 1.918,7.944L1.918,1.85Z" />',
                T: '<path d="M10.917,1.81C11.345,1.81 11.711,1.38 11.711,0.905C11.711,0.43 11.345,0 10.917,0L0.794,0C0.367,0 0,0.43 0,0.905C0,1.38 0.367,1.81 0.794,1.81L4.99,1.81L4.99,15.05C4.99,15.57 5.377,16 5.866,16C6.334,16 6.721,15.57 6.721,15.05L6.721,1.81L10.917,1.81Z" />',
                S: '<path d="M4.578,16C6.022,16 7.222,15.6 8.2,14.822C9.156,14.044 9.644,13.044 9.644,11.778C9.644,6.467 2.044,7.911 2.044,4.067C2.044,2.667 3.133,1.778 4.844,1.778C5.711,1.778 6.556,2.022 7.333,2.489C7.533,2.6 7.711,2.644 7.844,2.644C8.133,2.644 8.378,2.511 8.578,2.222C8.689,2.111 8.733,1.956 8.733,1.756C8.733,1.444 8.622,1.2 8.378,1.044C7.289,0.356 6.067,0 4.733,0C3.289,0 2.156,0.378 1.311,1.156C0.467,1.933 0.044,2.911 0.044,4.067C0.044,9.222 7.644,8 7.644,11.8C7.644,13.311 6.311,14.222 4.6,14.222C3.689,14.222 2.622,13.778 1.4,12.867C1.244,12.756 1.089,12.711 0.889,12.711C0.6,12.711 0.378,12.822 0.2,13.044C0.067,13.2 0,13.4 0,13.6C0,13.867 0.089,14.067 0.267,14.222C1.667,15.4 3.111,16 4.578,16Z" />',
            }[letter];
            const ident = style.ident;
            return `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="currentColor" style="width: 20px;">
                    ${letterPath}
                    <text text-anchor="start" x="15" y="15.8" style="font-size: 15px; transform: scaleX(0.8)">${ident}</text>
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
                    <path d="M2.333,1C2.882,1 3.333,1.451 3.333,2L3.333,3.333C3.333,3.882 2.882,4.333 2.333,4.333L1,4.333C0.451,4.333 0,3.882 0,3.333L0,2C-0,1.451 0.451,1 1,1L2.333,1ZM2.333,6.333C2.882,6.333 3.333,6.785 3.333,7.333L3.333,8.667C3.333,9.215 2.882,9.667 2.333,9.667L1,9.667C0.451,9.667 0,9.215 0,8.667L0,7.333C-0,6.785 0.451,6.333 1,6.333L2.333,6.333ZM2.333,11.667C2.882,11.667 3.333,12.118 3.333,12.667L3.333,14C3.333,14.549 2.882,15 2.333,15L1,15C0.451,15 0,14.549 0,14L0,12.667C-0,12.118 0.451,11.667 1,11.667L2.333,11.667Z" />
                    <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${ident}</text>
                </svg>
            `;
        },
        'ordered-list': (style) => {
            const ident = style.ident;
            return `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M1.473,11.5C0.873,11.5 0.343,11.907 0.187,12.487C0.175,12.529 0.169,12.573 0.169,12.617C0.169,12.891 0.395,13.117 0.67,13.117C0.896,13.117 1.095,12.965 1.153,12.747C1.192,12.602 1.324,12.501 1.473,12.5C1.656,12.5 1.807,12.65 1.807,12.833C1.807,13.016 1.656,13.167 1.473,13.167C1.199,13.167 0.973,13.392 0.973,13.667C0.973,13.941 1.199,14.167 1.473,14.167C1.656,14.167 1.807,14.317 1.807,14.5C1.809,14.514 1.809,14.529 1.809,14.543C1.809,14.728 1.658,14.879 1.473,14.879C1.305,14.879 1.162,14.753 1.14,14.587C1.09,14.358 0.886,14.194 0.652,14.194C0.377,14.194 0.152,14.42 0.152,14.694C0.152,14.751 0.161,14.807 0.18,14.86C0.345,15.427 0.869,15.82 1.46,15.82C2.187,15.82 2.786,15.226 2.793,14.5C2.795,14.236 2.716,13.978 2.567,13.76C2.533,13.702 2.533,13.631 2.567,13.573C2.716,13.356 2.795,13.097 2.793,12.833C2.793,12.107 2.2,11.507 1.473,11.5ZM2.833,7.167C2.833,6.435 2.231,5.833 1.5,5.833C0.769,5.833 0.167,6.435 0.167,7.167C0.17,7.44 0.394,7.663 0.667,7.667C0.94,7.663 1.163,7.44 1.167,7.167C1.167,6.984 1.317,6.833 1.5,6.833C1.683,6.833 1.833,6.984 1.833,7.167C1.834,7.322 1.779,7.473 1.68,7.593L0.273,9.333C0.156,9.483 0.133,9.687 0.213,9.86C0.297,10.034 0.474,10.145 0.667,10.147L2.333,10.147C2.608,10.147 2.833,9.921 2.833,9.647C2.833,9.372 2.608,9.147 2.333,9.147L2.053,9.147C1.991,9.146 1.934,9.109 1.907,9.053C1.87,8.999 1.87,8.928 1.907,8.873L2.447,8.207C2.686,7.912 2.822,7.546 2.833,7.167ZM2.667,3.5L2.5,3.5C2.409,3.5 2.333,3.425 2.333,3.333L2.333,1.08C2.33,0.578 1.916,0.167 1.413,0.167L1,0.167C0.726,0.167 0.5,0.392 0.5,0.667C0.5,0.941 0.726,1.167 1,1.167L1.167,1.167C1.258,1.167 1.333,1.242 1.333,1.333L1.333,3.333C1.333,3.425 1.258,3.5 1.167,3.5L1,3.5C0.726,3.5 0.5,3.726 0.5,4C0.5,4.274 0.726,4.5 1,4.5L2.667,4.5C2.941,4.5 3.167,4.274 3.167,4C3.167,3.726 2.941,3.5 2.667,3.5Z" />
                    <text text-anchor="middle" x="11" y="12" style="font-size: 11px;">${ident}</text>
                </svg>
            `;
        },
        'link': (style) => {
            const ident = style.ident;
            return `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M10.031,7.51C9.534,8.211 9.615,9.178 10.223,9.786L10.562,10.125L10.126,10.562L9.786,10.222C9.178,9.614 8.211,9.533 7.51,10.031L7.3,10.18C6.802,10.534 6.365,10.967 6.007,11.463C5.419,12.28 5.51,13.413 6.222,14.125L7.351,15.254C8.063,15.966 9.196,16.057 10.013,15.469C10.509,15.111 10.943,14.674 11.298,14.175L11.461,13.945C11.951,13.256 11.87,12.305 11.272,11.707L10.915,11.35L11.351,10.914L11.709,11.271C12.306,11.869 13.257,11.949 13.947,11.46L14.177,11.296C14.675,10.942 15.112,10.508 15.47,10.012C16.058,9.195 15.967,8.062 15.255,7.35L14.126,6.221C13.414,5.51 12.281,5.419 11.464,6.007C10.968,6.364 10.534,6.801 10.179,7.3L10.031,7.51L10.031,7.51ZM12.141,10.125L12.499,10.483C12.713,10.696 13.053,10.725 13.3,10.55L13.53,10.386C13.929,10.103 14.278,9.756 14.564,9.359C14.833,8.985 14.791,8.466 14.466,8.141L13.336,7.011C13.01,6.686 12.491,6.644 12.117,6.913C11.721,7.199 11.373,7.548 11.09,7.947L10.941,8.156C10.757,8.415 10.787,8.772 11.012,8.996L11.351,9.335L11.729,8.957C11.835,8.848 11.98,8.787 12.131,8.787C12.438,8.787 12.69,9.039 12.69,9.345C12.69,9.496 12.628,9.641 12.519,9.746L12.141,10.125ZM9.336,11.351L8.964,11.723C8.859,11.828 8.8,11.97 8.8,12.118C8.8,12.424 9.053,12.676 9.359,12.676C9.507,12.676 9.65,12.617 9.754,12.512L10.126,12.141L10.483,12.498C10.697,12.712 10.725,13.053 10.55,13.299L10.386,13.53C10.103,13.929 9.756,14.278 9.36,14.563C8.986,14.833 8.467,14.791 8.141,14.465L7.012,13.336C6.686,13.011 6.644,12.492 6.913,12.118C7.199,11.721 7.548,11.373 7.947,11.09L8.157,10.941C8.415,10.758 8.772,10.788 8.996,11.013L9.336,11.352L9.336,11.351Z" style="fill-rule:evenodd" />
                    <text text-anchor="middle" x="5" y="8" style="font-size: 11px;">${ident}</text>
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
    },
};

export const styleToIcon = (style, set) => {
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
    return icons[set][icon]
        ? icons[set][icon](style)
        : icon;
}

const coreIcons = {
    classic: {
        styles: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="currentColor" style="width: 24px;">
                <text text-anchor="middle" x="12" y="15" style="font-family: Times, Times New Roman, serif; font-size: 21px; letter-spacing: -1px;">Aa</text>
            </svg>
        `,
        attributes: `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="m491 1536 91-91-235-235-91 91v107h128v128h107Zm523-928c0-14.667-7.33-22-22-22-6.667 0-12.333 2.333-17 7l-542 542c-4.667 4.67-7 10.33-7 17 0 14.67 7.333 22 22 22 6.667 0 12.333-2.33 17-7l542-542c4.67-4.667 7-10.333 7-17Zm-54-192 416 416-832 832H128v-416l832-832Zm683 96c0 35.333-12.33 65.333-37 90l-166 166-416-416 166-165c24-25.333 54-38 90-38 35.33 0 65.67 12.667 91 38l235 234c24.67 26 37 56.333 37 91Z" transform="scale(.00893)"/>
            </svg>
        `,
    },
    modern: {
        styles: `
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="currentColor" style="width: 23px;">
                <path d="M12.539 15.371c.18.427.472.629.899.629.562 0 .922-.449.922-.966 0-.113-.023-.247-.068-.382l-6-13.888C8.09.247 7.73 0 7.213 0c-.516 0-.876.247-1.101.764L.09 14.719c-.068.18-.09.315-.09.405 0 .472.337.876.899.876.404 0 .697-.202.854-.629l1.798-4.292h7.168l1.82 4.292Zm-8.224-6.09 2.831-6.719 2.832 6.719H4.315ZM14.809 12.876c0 1.911 1.236 3.124 3.101 3.124 1.371 0 2.45-.494 3.236-1.461v.674c0 .427.382.787.854.787s.854-.36.854-.787V9.64c0-2.764-1.101-4.134-3.888-4.134-.876 0-1.82.202-2.786.606-.292.113-.45.36-.45.719 0 .113.023.203.068.315.135.292.359.45.696.45a.897.897 0 0 0 .337-.068c.697-.27 1.371-.404 2.023-.404 1.865 0 2.292 1.033 2.292 3.191-.607-.427-1.438-.652-2.517-.652-2.247 0-3.82 1.213-3.82 3.213Zm6.337.203c-.742.876-1.595 1.303-2.607 1.303-1.146 0-1.82-.607-1.82-1.595 0-1.079.966-1.663 2.157-1.663.877 0 1.641.224 2.27.674v1.281Z" />
            </svg>
        `,
        attributes: `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="m5.452 14.502 10.3-10.3A.872.872 0 0 0 16 3.594a.82.82 0 0 0-.249-.589L12.982.246a.844.844 0 0 0-1.194 0L1.471 10.527a489.262 489.262 0 0 0-1.445 4.517.755.755 0 0 0-.026.199c0 .409.31.753.68.753.454 0 .881-.168 4.772-1.494Zm-2.906-2.97 1.899 1.899-2.816.93.917-2.829Zm.849-1.037 8.99-8.959 2.075 2.068-8.976 8.979-2.089-2.088Z" />
            </svg>
        `,
    },
}

export const coreIcon = (name, set) => {
    return coreIcons[set][name];
}