// generated by diplomat-tool
import { DataError } from "./DataError.mjs"
import { DataProvider } from "./DataProvider.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** The raw canonical composition operation.
*
*Callers should generally use ComposingNormalizer unless they specifically need raw composition operations
*
*See the [Rust documentation for `CanonicalComposition`](https://docs.rs/icu/latest/icu/normalizer/properties/struct.CanonicalComposition.html) for more information.
*/

const CanonicalComposition_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_CanonicalComposition_destroy_mv1(ptr);
});
export class CanonicalComposition {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        CanonicalComposition_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static create(provider) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_CanonicalComposition_create_mv1(diplomat_receive_buffer, provider.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = DataError[Array.from(DataError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('DataError: ' + cause.value, { cause });
            }
            return new CanonicalComposition(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    compose(starter, second) {
        const result = wasm.icu4x_CanonicalComposition_compose_mv1(this.ffiValue, diplomatRuntime.extractCodePoint(starter, 'starter'), diplomatRuntime.extractCodePoint(second, 'second'));
    
        try {
    
            return result;
        } finally {
        
        }
    }

    

}