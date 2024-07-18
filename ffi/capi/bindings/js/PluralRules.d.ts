// generated by diplomat-tool
import type { DataProvider } from "./DataProvider"
import type { Locale } from "./Locale"
import type { PluralCategories } from "./PluralCategories"
import type { PluralCategory } from "./PluralCategory"
import type { PluralOperands } from "./PluralOperands"
import type { pointer, char } from "./diplomat-runtime.d.ts";


/** See the [Rust documentation for `PluralRules`](https://docs.rs/icu/latest/icu/plurals/struct.PluralRules.html) for more information.
*/
export class PluralRules {
    

    get ffiValue(): pointer;


    static createCardinal(provider: DataProvider, locale: Locale): PluralRules;

    static createOrdinal(provider: DataProvider, locale: Locale): PluralRules;

    categoryFor(op: PluralOperands): PluralCategory;

    get categories(): PluralCategories;

    

}