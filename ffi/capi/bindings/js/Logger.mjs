// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An object allowing control over the logging used
*/

const Logger_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.ICU4XLogger_destroy(ptr);
});
export class Logger {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        Logger_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static initSimpleLogger() {
        const result = wasm.ICU4XLogger_init_simple_logger();
    
        try {
    
            return result;
        } finally {
        
        }
    }

    

}