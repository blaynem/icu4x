// generated by diplomat-tool
import { CustomTimeZone } from "./CustomTimeZone.mjs"
import { DataProvider } from "./DataProvider.mjs"
import { DateLength } from "./DateLength.mjs"
import { Error } from "./Error.mjs"
import { IsoDateTime } from "./IsoDateTime.mjs"
import { IsoTimeZoneOptions } from "./IsoTimeZoneOptions.mjs"
import { Locale } from "./Locale.mjs"
import { TimeLength } from "./TimeLength.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An object capable of formatting a date time with time zone to a string.
*
*See the [Rust documentation for `TypedZonedDateTimeFormatter`](https://docs.rs/icu/latest/icu/datetime/struct.TypedZonedDateTimeFormatter.html) for more information.
*/

const GregorianZonedDateTimeFormatter_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_GregorianZonedDateTimeFormatter_destroy_mv1(ptr);
});
export class GregorianZonedDateTimeFormatter {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        GregorianZonedDateTimeFormatter_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static createWithLengths(provider, locale, dateLength, timeLength) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_GregorianZonedDateTimeFormatter_create_with_lengths_mv1(diplomat_receive_buffer, provider.ffiValue, locale.ffiValue, dateLength.ffiValue, timeLength.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = (() => {for (let i of Error.values) { if(i[1] === diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)) return Error[i[0]]; } return null;})();
                throw new Error('Error: ' + cause.value, { cause });
            }
            return new GregorianZonedDateTimeFormatter(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    static createWithLengthsAndIso8601TimeZoneFallback(provider, locale, dateLength, timeLength, zoneOptions) {
        
        let slice_cleanup_callbacks = [];
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_GregorianZonedDateTimeFormatter_create_with_lengths_and_iso_8601_time_zone_fallback_mv1(diplomat_receive_buffer, provider.ffiValue, locale.ffiValue, dateLength.ffiValue, timeLength.ffiValue, ...zoneOptions._intoFFI(slice_cleanup_callbacks, {}));
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = (() => {for (let i of Error.values) { if(i[1] === diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)) return Error[i[0]]; } return null;})();
                throw new Error('Error: ' + cause.value, { cause });
            }
            return new GregorianZonedDateTimeFormatter(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            for (let cleanup of slice_cleanup_callbacks) {
                cleanup();
            }
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    formatIsoDatetimeWithCustomTimeZone(datetime, timeZone) {
        
        const write = wasm.diplomat_buffer_write_create(0);
        wasm.icu4x_GregorianZonedDateTimeFormatter_format_iso_datetime_with_custom_time_zone_mv1(this.ffiValue, datetime.ffiValue, timeZone.ffiValue, write);
    
        try {
    
            return diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    

}