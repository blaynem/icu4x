// generated by diplomat-tool
import { IsoDateTime } from "./IsoDateTime.mjs"
import { MetazoneCalculator } from "./MetazoneCalculator.mjs"
import { TimeZoneIdMapper } from "./TimeZoneIdMapper.mjs"
import { TimeZoneInvalidIdError } from "./TimeZoneInvalidIdError.mjs"
import { TimeZoneInvalidOffsetError } from "./TimeZoneInvalidOffsetError.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** See the [Rust documentation for `CustomTimeZone`](https://docs.rs/icu/latest/icu/timezone/struct.CustomTimeZone.html) for more information.
*/

const CustomTimeZone_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_CustomTimeZone_destroy_mv1(ptr);
});
export class CustomTimeZone {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        CustomTimeZone_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static createFromString(s) {
        
        const sSlice = diplomatRuntime.DiplomatBuf.str8(wasm, s);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_CustomTimeZone_create_from_string_mv1(diplomat_receive_buffer, sSlice.ptr, sSlice.size);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = TimeZoneInvalidOffsetError[Array.from(TimeZoneInvalidOffsetError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('TimeZoneInvalidOffsetError: ' + cause.value, { cause });
            }
            return new CustomTimeZone(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            sSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    static createEmpty() {
        const result = wasm.icu4x_CustomTimeZone_create_empty_mv1();
    
        try {
    
            return new CustomTimeZone(result, []);
        } finally {
        
        }
    }

    static createUtc() {
        const result = wasm.icu4x_CustomTimeZone_create_utc_mv1();
    
        try {
    
            return new CustomTimeZone(result, []);
        } finally {
        
        }
    }

    static createGmt() {
        const result = wasm.icu4x_CustomTimeZone_create_gmt_mv1();
    
        try {
    
            return new CustomTimeZone(result, []);
        } finally {
        
        }
    }

    static createBst() {
        const result = wasm.icu4x_CustomTimeZone_create_bst_mv1();
    
        try {
    
            return new CustomTimeZone(result, []);
        } finally {
        
        }
    }

    trySetGmtOffsetSeconds(offsetSeconds) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_CustomTimeZone_try_set_gmt_offset_seconds_mv1(diplomat_receive_buffer, this.ffiValue, offsetSeconds);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = TimeZoneInvalidOffsetError[Array.from(TimeZoneInvalidOffsetError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('TimeZoneInvalidOffsetError: ' + cause.value, { cause });
            }
    
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    setGmtOffsetEighthsOfHour(offsetEighthsOfHour) {
        wasm.icu4x_CustomTimeZone_set_gmt_offset_eighths_of_hour_mv1(this.ffiValue, offsetEighthsOfHour);
    
        try {
    
        } finally {
        
        }
    }

    clearGmtOffset() {
        wasm.icu4x_CustomTimeZone_clear_gmt_offset_mv1(this.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    get gmtOffsetSeconds() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_CustomTimeZone_gmt_offset_seconds_mv1(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                return null;
            }
            return (new Int32Array(wasm.memory.buffer, diplomat_receive_buffer, 1))[0];
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    get isGmtOffsetPositive() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(2, 1);
        const result = wasm.icu4x_CustomTimeZone_is_gmt_offset_positive_mv1(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 1)) {
                return null;
            }
            return (new Uint8Array(wasm.memory.buffer, diplomat_receive_buffer, 1))[0] == 1;
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 2, 1);
        
        }
    }

    get isGmtOffsetZero() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(2, 1);
        const result = wasm.icu4x_CustomTimeZone_is_gmt_offset_zero_mv1(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 1)) {
                return null;
            }
            return (new Uint8Array(wasm.memory.buffer, diplomat_receive_buffer, 1))[0] == 1;
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 2, 1);
        
        }
    }

    get gmtOffsetHasMinutes() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(2, 1);
        const result = wasm.icu4x_CustomTimeZone_gmt_offset_has_minutes_mv1(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 1)) {
                return null;
            }
            return (new Uint8Array(wasm.memory.buffer, diplomat_receive_buffer, 1))[0] == 1;
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 2, 1);
        
        }
    }

    get gmtOffsetHasSeconds() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(2, 1);
        const result = wasm.icu4x_CustomTimeZone_gmt_offset_has_seconds_mv1(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 1)) {
                return null;
            }
            return (new Uint8Array(wasm.memory.buffer, diplomat_receive_buffer, 1))[0] == 1;
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 2, 1);
        
        }
    }

    trySetTimeZoneId(id) {
        
        const idSlice = diplomatRuntime.DiplomatBuf.str8(wasm, id);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_CustomTimeZone_try_set_time_zone_id_mv1(diplomat_receive_buffer, this.ffiValue, idSlice.ptr, idSlice.size);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = TimeZoneInvalidIdError[Array.from(TimeZoneInvalidIdError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('TimeZoneInvalidIdError: ' + cause.value, { cause });
            }
    
        } finally {
        
            idSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    trySetIanaTimeZoneId(mapper, id) {
        
        const idSlice = diplomatRuntime.DiplomatBuf.str8(wasm, id);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_CustomTimeZone_try_set_iana_time_zone_id_mv1(diplomat_receive_buffer, this.ffiValue, mapper.ffiValue, idSlice.ptr, idSlice.size);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = TimeZoneInvalidIdError[Array.from(TimeZoneInvalidIdError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('TimeZoneInvalidIdError: ' + cause.value, { cause });
            }
    
        } finally {
        
            idSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    clearTimeZoneId() {
        wasm.icu4x_CustomTimeZone_clear_time_zone_id_mv1(this.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    get timeZoneId() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        const result = wasm.icu4x_CustomTimeZone_time_zone_id_mv1(this.ffiValue, write);
    
        try {
    
            return result == 0 ? null : diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    trySetMetazoneId(id) {
        
        const idSlice = diplomatRuntime.DiplomatBuf.str8(wasm, id);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_CustomTimeZone_try_set_metazone_id_mv1(diplomat_receive_buffer, this.ffiValue, idSlice.ptr, idSlice.size);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = TimeZoneInvalidIdError[Array.from(TimeZoneInvalidIdError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('TimeZoneInvalidIdError: ' + cause.value, { cause });
            }
    
        } finally {
        
            idSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    clearMetazoneId() {
        wasm.icu4x_CustomTimeZone_clear_metazone_id_mv1(this.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    get metazoneId() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        const result = wasm.icu4x_CustomTimeZone_metazone_id_mv1(this.ffiValue, write);
    
        try {
    
            return result == 0 ? null : diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    trySetZoneVariant(id) {
        
        const idSlice = diplomatRuntime.DiplomatBuf.str8(wasm, id);
        const result = wasm.icu4x_CustomTimeZone_try_set_zone_variant_mv1(this.ffiValue, idSlice.ptr, idSlice.size);
    
        try {
    
            return result == 1;
        } finally {
        
            idSlice.free();
        
        }
    }

    clearZoneVariant() {
        wasm.icu4x_CustomTimeZone_clear_zone_variant_mv1(this.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    get zoneVariant() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        const result = wasm.icu4x_CustomTimeZone_zone_variant_mv1(this.ffiValue, write);
    
        try {
    
            return result == 0 ? null : diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    setStandardTime() {
        wasm.icu4x_CustomTimeZone_set_standard_time_mv1(this.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    setDaylightTime() {
        wasm.icu4x_CustomTimeZone_set_daylight_time_mv1(this.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    get isStandardTime() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(2, 1);
        const result = wasm.icu4x_CustomTimeZone_is_standard_time_mv1(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 1)) {
                return null;
            }
            return (new Uint8Array(wasm.memory.buffer, diplomat_receive_buffer, 1))[0] == 1;
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 2, 1);
        
        }
    }

    get isDaylightTime() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(2, 1);
        const result = wasm.icu4x_CustomTimeZone_is_daylight_time_mv1(diplomat_receive_buffer, this.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 1)) {
                return null;
            }
            return (new Uint8Array(wasm.memory.buffer, diplomat_receive_buffer, 1))[0] == 1;
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 2, 1);
        
        }
    }

    maybeCalculateMetazone(metazoneCalculator, localDatetime) {
        wasm.icu4x_CustomTimeZone_maybe_calculate_metazone_mv1(this.ffiValue, metazoneCalculator.ffiValue, localDatetime.ffiValue);
    
        try {
    
        } finally {
        
        }
    }

    

}