// generated by diplomat-tool
import type { Locale } from "./Locale"
import type { pointer, char } from "./diplomat-runtime.d.ts";


/** An iterator over the locale under fallback.
*
*See the [Rust documentation for `LocaleFallbackIterator`](https://docs.rs/icu/latest/icu/locale/fallback/struct.LocaleFallbackIterator.html) for more information.
*/
export class LocaleFallbackIterator {
    

    get ffiValue(): pointer;


    #iteratorNext(): Locale | null;

    
    get value(): Locale;
    
    get done(): bool;
    
    next() : Locale;

}