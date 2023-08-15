export const getWordsWithEllipsis = function (str: string, maxWidth: number): string {
    const words: string[] = str.split(' ');
    const slice: string[] = [];
    let current: number   = 0;
    let full: boolean     = true;


    for (let i = 0; i < words.length; i++) {
        const len = words[i].length;
        if ((current + len) < maxWidth) {
            current += len;
            slice.push(words[i]);
            continue;
        }

        full = false;
        break;
    }

    return slice.join(' ') + (full ? '' : ' ...');
};

export const getFormattedTime = function (value: number): string {
    const str = value.toString();
    return str.length === 1 ? `0${ value }` : str;
};

export const gft = getFormattedTime;