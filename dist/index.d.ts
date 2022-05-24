export declare function watchInput(): void;
export declare function fixScroll(): void;
export { initFontSize } from "./wx-fontsize";
export interface Hwxjs {
    watchInput(): void;
    fixScroll(): void;
    initFontSize(): void;
}
declare const hwxjs: Hwxjs;
export default hwxjs;
