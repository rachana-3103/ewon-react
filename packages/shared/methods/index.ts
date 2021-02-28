export const getSiblings = (elem: HTMLElement): HTMLElement[] => {
    const siblings = [];
    let sibling = elem?.parentNode?.firstChild as HTMLElement;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling as HTMLElement;
    }
    return siblings;
};

export const hexTorgb = (hex: string, opacity: number): string | undefined => {
    const h = hex.replace("#", "");
    // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
    const hh = h.match(new RegExp(`(.{${h.length / 3}})`, "g"));
    const rgba = [];
    if (!hh) return;
    for (let i = 0; i < hh.length; i += 1)
        rgba[i] = parseInt(hh[i].length === 1 ? hh[i] + hh[i] : hh[i], 16);

    if (typeof opacity !== "undefined") rgba.push(opacity);

    // eslint-disable-next-line consistent-return
    return `rgba(${rgba.join(",")})`;
};
