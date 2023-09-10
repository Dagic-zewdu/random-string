/**
 *
 */
export declare type options = {
    charset?: 'alphanumeric' | 'number' | 'alphabet' | 'hex' | 'binary' | 'octal';
    lowerCaseOnly?: boolean;
    range?: string;
    length: number;
    upperCaseOnly?: boolean;
    insertSymbol?: boolean;
    symbolsOnly?: boolean;
    prefix?: string;
    suffix?: string;
};
export declare const hex = "0123456789ABCDEFabcdef";
export declare const symbols: string;
export declare const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
export declare const alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export declare const number = "0123456789";
export declare const alphabetSymbol: string;
export declare const numberSymbol: string;
export declare const alphabetNumericSymbol: string;
export declare const binary = "01";
export declare const octal = "01234567";
