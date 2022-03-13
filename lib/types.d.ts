/**
 *
 */
export declare type options = {
    charset?: "alphanumeric" | "number" | "alphabet" | "hex" | "binary" | "octal";
    disableCapitalLetters?: boolean;
    char?: string;
    length: number;
    disableSmallLetters?: boolean;
    insertSymbol?: boolean;
};
export declare const hex = "0123456789ABCDEFabcdef";
export declare const symbols: string;
export declare const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
export declare const alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export declare const number = "0123456789";
