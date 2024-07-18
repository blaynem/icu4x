// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `GraphemeClusterBreakIterator`](https://docs.rs/icu/latest/icu/segmenter/struct.GraphemeClusterBreakIterator.html) for more information.
*/

const GraphemeClusterBreakIteratorUtf16_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_GraphemeClusterBreakIteratorUtf16_destroy_mv1(ptr);
});
export class GraphemeClusterBreakIteratorUtf16 {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    #aEdge = [];
    
    
    constructor(ptr, selfEdge, aEdge) {
        
        
        this.#aEdge = aEdge;
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        GraphemeClusterBreakIteratorUtf16_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    next() {
        const result = wasm.icu4x_GraphemeClusterBreakIteratorUtf16_next_mv1(this.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    

}