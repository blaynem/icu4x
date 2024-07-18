// generated by diplomat-tool
import { DataError } from "./DataError.mjs"
import { DataProvider } from "./DataProvider.mjs"
import { Locale } from "./Locale.mjs"
import { LocaleParseError } from "./LocaleParseError.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `RegionDisplayNames`](https://docs.rs/icu/latest/icu/displaynames/struct.RegionDisplayNames.html) for more information.
*/

const RegionDisplayNames_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_RegionDisplayNames_destroy_mv1(ptr);
});
export class RegionDisplayNames {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        RegionDisplayNames_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static create(provider, locale) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_RegionDisplayNames_create_mv1(diplomat_receive_buffer, provider.ffiValue, locale.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = DataError[Array.from(DataError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('DataError: ' + cause.value, { cause });
            }
            return new RegionDisplayNames(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    of(region) {
        
        const regionSlice = diplomatRuntime.DiplomatBuf.str8(wasm, region);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        
        const write = wasm.diplomat_buffer_write_create(0);
        const result = wasm.icu4x_RegionDisplayNames_of_mv1(diplomat_receive_buffer, this.ffiValue, regionSlice.ptr, regionSlice.size, write);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = LocaleParseError[Array.from(LocaleParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('LocaleParseError: ' + cause.value, { cause });
            }
            return diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            regionSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    

}