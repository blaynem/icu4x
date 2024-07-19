// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An ICU4X Units Converter object, capable of converting between two [`MeasureUnit`]s.
*
*You can create an instance of this object using [`UnitsConverterFactory`] by calling the `converter` method.
*
*See the [Rust documentation for `UnitsConverter`](https://docs.rs/icu/latest/icu/experimental/units/converter/struct.UnitsConverter.html) for more information.
*/

const UnitsConverter_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_UnitsConverter_destroy_mv1(ptr);
});
export class UnitsConverter {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        UnitsConverter_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    convertNumber(value) {
        const result = wasm.icu4x_UnitsConverter_convert_double_mv1(this.ffiValue, value);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    clone() {
        const result = wasm.icu4x_UnitsConverter_clone_mv1(this.ffiValue);
    
        try {
    
            return new UnitsConverter(result, []);
        } finally {
        
        }
    }

    

}