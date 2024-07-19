// generated by diplomat-tool
import type { LocaleFallbacker } from "./LocaleFallbacker"
import type { pointer, char } from "./diplomat-runtime.d.ts";


/** An ICU4X data provider, capable of loading ICU4X data keys from some source.
*
*See the [Rust documentation for `icu_provider`](https://docs.rs/icu_provider/latest/icu_provider/index.html) for more information.
*/
export class DataProvider {
    

    get ffiValue(): pointer;


    static compiled(): DataProvider;

    static fromByteSlice(blob: Uint8Array): DataProvider;

    static empty(): DataProvider;

    forkByKey(other: DataProvider): void;

    forkByLocale(other: DataProvider): void;

    enableLocaleFallbackWith(fallbacker: LocaleFallbacker): void;

    

}