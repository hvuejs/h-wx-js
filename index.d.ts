declare function initFontSize(): void;

declare function watchInput(): void;
declare function fixScroll(): void;

interface Hwxjs {
    watchInput(): void;
    fixScroll(): void;
    initFontSize(): void;
}
declare const hwxjs: Hwxjs;

export { Hwxjs, hwxjs as default, fixScroll, initFontSize, watchInput };
