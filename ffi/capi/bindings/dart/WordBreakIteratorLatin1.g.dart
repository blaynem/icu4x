// generated by diplomat-tool

part of 'lib.g.dart';

/// See the [Rust documentation for `WordBreakIterator`](https://docs.rs/icu/latest/icu/segmenter/struct.WordBreakIterator.html) for more information.
final class WordBreakIteratorLatin1 implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _ffi;

  // These are "used" in the sense that they keep dependencies alive
  // ignore: unused_field
  final core.List<Object> _selfEdge;
  // ignore: unused_field
  final core.List<Object> _aEdge;

  // This takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  WordBreakIteratorLatin1._fromFfi(this._ffi, this._selfEdge, this._aEdge) {
    if (_selfEdge.isEmpty) {
      _finalizer.attach(this, _ffi.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_icu4x_WordBreakIteratorLatin1_destroy_mv1));

  /// Finds the next breakpoint. Returns -1 if at the end of the string or if the index is
  /// out of range of a 32-bit signed integer.
  ///
  /// See the [Rust documentation for `next`](https://docs.rs/icu/latest/icu/segmenter/struct.WordBreakIterator.html#method.next) for more information.
  int next() {
    final result = _icu4x_WordBreakIteratorLatin1_next_mv1(_ffi);
    return result;
  }

  /// Return the status value of break boundary.
  ///
  /// See the [Rust documentation for `word_type`](https://docs.rs/icu/latest/icu/segmenter/struct.WordBreakIterator.html#method.word_type) for more information.
  SegmenterWordType get wordType {
    final result = _icu4x_WordBreakIteratorLatin1_word_type_mv1(_ffi);
    return SegmenterWordType.values[result];
  }

  /// Return true when break boundary is word-like such as letter/number/CJK
  ///
  /// See the [Rust documentation for `is_word_like`](https://docs.rs/icu/latest/icu/segmenter/struct.WordBreakIterator.html#method.is_word_like) for more information.
  bool get isWordLike {
    final result = _icu4x_WordBreakIteratorLatin1_is_word_like_mv1(_ffi);
    return result;
  }
}

@meta.ResourceIdentifier('icu4x_WordBreakIteratorLatin1_destroy_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'icu4x_WordBreakIteratorLatin1_destroy_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_WordBreakIteratorLatin1_destroy_mv1(ffi.Pointer<ffi.Void> self);

@meta.ResourceIdentifier('icu4x_WordBreakIteratorLatin1_next_mv1')
@ffi.Native<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_WordBreakIteratorLatin1_next_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_WordBreakIteratorLatin1_next_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_WordBreakIteratorLatin1_word_type_mv1')
@ffi.Native<ffi.Int32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_WordBreakIteratorLatin1_word_type_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_WordBreakIteratorLatin1_word_type_mv1(ffi.Pointer<ffi.Opaque> self);

@meta.ResourceIdentifier('icu4x_WordBreakIteratorLatin1_is_word_like_mv1')
@ffi.Native<ffi.Bool Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_WordBreakIteratorLatin1_is_word_like_mv1')
// ignore: non_constant_identifier_names
external bool _icu4x_WordBreakIteratorLatin1_is_word_like_mv1(ffi.Pointer<ffi.Opaque> self);
