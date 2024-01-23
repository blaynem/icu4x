// generated by diplomat-tool

// https://github.com/dart-lang/sdk/issues/53946
// ignore_for_file: non_native_function_type_argument_to_pointer

part of 'lib.g.dart';

/// See the [Rust documentation for `SentenceBreakIterator`](https://docs.rs/icu/latest/icu/segmenter/struct.SentenceBreakIterator.html) for more information.
final class SentenceBreakIteratorUtf16 implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _underlying;

  SentenceBreakIteratorUtf16._(this._underlying, bool isOwned) {
    if (isOwned) {
      _finalizer.attach(this, _underlying.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_ICU4XSentenceBreakIteratorUtf16_destroy));

  /// Finds the next breakpoint. Returns -1 if at the end of the string or if the index is
  /// out of range of a 32-bit signed integer.
  ///
  /// See the [Rust documentation for `next`](https://docs.rs/icu/latest/icu/segmenter/struct.SentenceBreakIterator.html#method.next) for more information.
  int next() {
    final result = _ICU4XSentenceBreakIteratorUtf16_next(_underlying);
    return result;
  }
}

@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'ICU4XSentenceBreakIteratorUtf16_destroy')
// ignore: non_constant_identifier_names
external void _ICU4XSentenceBreakIteratorUtf16_destroy(ffi.Pointer<ffi.Void> self);

@ffi.Native<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'ICU4XSentenceBreakIteratorUtf16_next')
// ignore: non_constant_identifier_names
external int _ICU4XSentenceBreakIteratorUtf16_next(ffi.Pointer<ffi.Opaque> self);
