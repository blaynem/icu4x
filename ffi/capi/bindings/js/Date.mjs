// generated by diplomat-tool
import { Calendar } from "./Calendar.mjs"
import { CalendarError } from "./CalendarError.mjs"
import { CalendarParseError } from "./CalendarParseError.mjs"
import { IsoDate } from "./IsoDate.mjs"
import { IsoWeekday } from "./IsoWeekday.mjs"
import { WeekCalculator } from "./WeekCalculator.mjs"
import { WeekOf } from "./WeekOf.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


/** An ICU4X Date object capable of containing a date and time for any calendar.
*
*See the [Rust documentation for `Date`](https://docs.rs/icu/latest/icu/calendar/struct.Date.html) for more information.
*/

const Date_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.icu4x_Date_destroy_mv1(ptr);
});
export class Date {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        Date_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static fromIsoInCalendar(year, month, day, calendar) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_Date_from_iso_in_calendar_mv1(diplomat_receive_buffer, year, month, day, calendar.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = CalendarError[Array.from(CalendarError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('CalendarError: ' + cause.value, { cause });
            }
            return new Date(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    static fromCodesInCalendar(eraCode, year, monthCode, day, calendar) {
        
        const eraCodeSlice = diplomatRuntime.DiplomatBuf.str8(wasm, eraCode);
        
        const monthCodeSlice = diplomatRuntime.DiplomatBuf.str8(wasm, monthCode);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_Date_from_codes_in_calendar_mv1(diplomat_receive_buffer, eraCodeSlice.ptr, eraCodeSlice.size, year, monthCodeSlice.ptr, monthCodeSlice.size, day, calendar.ffiValue);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = CalendarError[Array.from(CalendarError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('CalendarError: ' + cause.value, { cause });
            }
            return new Date(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            eraCodeSlice.free();
        
            monthCodeSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    static fromString(v) {
        
        const vSlice = diplomatRuntime.DiplomatBuf.str8(wasm, v);
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.icu4x_Date_from_string_mv1(diplomat_receive_buffer, vSlice.ptr, vSlice.size);
    
        try {
    
            if (!diplomatRuntime.resultFlag(wasm, diplomat_receive_buffer, 4)) {
                const cause = CalendarParseError[Array.from(CalendarParseError.values.keys())[diplomatRuntime.enumDiscriminant(wasm, diplomat_receive_buffer)]];
                throw new Error('CalendarParseError: ' + cause.value, { cause });
            }
            return new Date(diplomatRuntime.ptrRead(wasm, diplomat_receive_buffer), []);
        } finally {
        
            vSlice.free();
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    toCalendar(calendar) {
        const result = wasm.icu4x_Date_to_calendar_mv1(this.ffiValue, calendar.ffiValue);
    
        try {
    
            return new Date(result, []);
        } finally {
        
        }
    }

    toIso() {
        const result = wasm.icu4x_Date_to_iso_mv1(this.ffiValue);
    
        try {
    
            return new IsoDate(result, []);
        } finally {
        
        }
    }

    get dayOfYear() {
        const result = wasm.icu4x_Date_day_of_year_mv1(this.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    get dayOfMonth() {
        const result = wasm.icu4x_Date_day_of_month_mv1(this.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    get dayOfWeek() {
        const result = wasm.icu4x_Date_day_of_week_mv1(this.ffiValue);
    
        try {
    
            return (() => {for (let i of IsoWeekday.values) { if(i[1] === result) return IsoWeekday[i[0]]; } return null;})();
        } finally {
        
        }
    }

    weekOfMonth(firstWeekday) {
        const result = wasm.icu4x_Date_week_of_month_mv1(this.ffiValue, firstWeekday.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    weekOfYear(calculator) {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(8, 4);
        const result = wasm.icu4x_Date_week_of_year_mv1(diplomat_receive_buffer, this.ffiValue, calculator.ffiValue);
    
        try {
    
            return new WeekOf(diplomat_receive_buffer);
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 8, 4);
        
        }
    }

    get ordinalMonth() {
        const result = wasm.icu4x_Date_ordinal_month_mv1(this.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    get monthCode() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        wasm.icu4x_Date_month_code_mv1(this.ffiValue, write);
    
        try {
    
            return diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    get yearInEra() {
        const result = wasm.icu4x_Date_year_in_era_mv1(this.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    get era() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        wasm.icu4x_Date_era_mv1(this.ffiValue, write);
    
        try {
    
            return diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    get monthsInYear() {
        const result = wasm.icu4x_Date_months_in_year_mv1(this.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    get daysInMonth() {
        const result = wasm.icu4x_Date_days_in_month_mv1(this.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    get daysInYear() {
        const result = wasm.icu4x_Date_days_in_year_mv1(this.ffiValue);
    
        try {
    
            return result;
        } finally {
        
        }
    }

    get calendar() {
        const result = wasm.icu4x_Date_calendar_mv1(this.ffiValue);
    
        try {
    
            return new Calendar(result, []);
        } finally {
        
        }
    }

    

}