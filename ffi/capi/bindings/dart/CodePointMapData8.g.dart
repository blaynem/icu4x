// generated by diplomat-tool

part of 'lib.g.dart';

/// An ICU4X Unicode Map Property object, capable of querying whether a code point (key) to obtain the Unicode property value, for a specific Unicode property.
///
/// For properties whose values fit into 8 bits.
///
/// See the [Rust documentation for `properties`](https://docs.rs/icu/latest/icu/properties/index.html) for more information.
///
/// See the [Rust documentation for `CodePointMapData`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapData.html) for more information.
///
/// See the [Rust documentation for `CodePointMapDataBorrowed`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapDataBorrowed.html) for more information.
final class CodePointMapData8 implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _ffi;

  // These are "used" in the sense that they keep dependencies alive
  // ignore: unused_field
  final core.List<Object> _selfEdge;

  // This takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  CodePointMapData8._fromFfi(this._ffi, this._selfEdge) {
    if (_selfEdge.isEmpty) {
      _finalizer.attach(this, _ffi.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_icu4x_CodePointMapData8_destroy_mv1));

  /// Gets the value for a code point.
  ///
  /// See the [Rust documentation for `get`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapDataBorrowed.html#method.get) for more information.
  int operator [](Rune cp) {
    final result = _icu4x_CodePointMapData8_get_mv1(_ffi, cp);
    return result;
  }

  /// Converts a general category to its corresponding mask value
  ///
  /// Nonexistent general categories will map to the empty mask
  ///
  /// See the [Rust documentation for `GeneralCategoryGroup`](https://docs.rs/icu/latest/icu/properties/struct.GeneralCategoryGroup.html) for more information.
  static int generalCategoryToMask(int gc) {
    final result = _icu4x_CodePointMapData8_general_category_to_mask_mv1(gc);
    return result;
  }

  /// Produces an iterator over ranges of code points that map to `value`
  ///
  /// See the [Rust documentation for `iter_ranges_for_value`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapDataBorrowed.html#method.iter_ranges_for_value) for more information.
  CodePointRangeIterator iterRangesForValue(int value) {
    // This lifetime edge depends on lifetimes: 'a
    core.List<Object> aEdges = [this];
    final result = _icu4x_CodePointMapData8_iter_ranges_for_value_mv1(_ffi, value);
    return CodePointRangeIterator._fromFfi(result, [], aEdges);
  }

  /// Produces an iterator over ranges of code points that do not map to `value`
  ///
  /// See the [Rust documentation for `iter_ranges_for_value_complemented`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapDataBorrowed.html#method.iter_ranges_for_value_complemented) for more information.
  CodePointRangeIterator iterRangesForValueComplemented(int value) {
    // This lifetime edge depends on lifetimes: 'a
    core.List<Object> aEdges = [this];
    final result = _icu4x_CodePointMapData8_iter_ranges_for_value_complemented_mv1(_ffi, value);
    return CodePointRangeIterator._fromFfi(result, [], aEdges);
  }

  /// Given a mask value (the nth bit marks property value = n), produce an iterator over ranges of code points
  /// whose property values are contained in the mask.
  ///
  /// The main mask property supported is that for General_Category, which can be obtained via `general_category_to_mask()` or
  /// by using `GeneralCategoryNameToMaskMapper`
  ///
  /// Should only be used on maps for properties with values less than 32 (like Generak_Category),
  /// other maps will have unpredictable results
  ///
  /// See the [Rust documentation for `iter_ranges_for_group`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapDataBorrowed.html#method.iter_ranges_for_group) for more information.
  CodePointRangeIterator iterRangesForMask(int mask) {
    // This lifetime edge depends on lifetimes: 'a
    core.List<Object> aEdges = [this];
    final result = _icu4x_CodePointMapData8_iter_ranges_for_mask_mv1(_ffi, mask);
    return CodePointRangeIterator._fromFfi(result, [], aEdges);
  }

  /// Gets a [`CodePointSetData`] representing all entries in this map that map to the given value
  ///
  /// See the [Rust documentation for `get_set_for_value`](https://docs.rs/icu/latest/icu/properties/maps/struct.CodePointMapDataBorrowed.html#method.get_set_for_value) for more information.
  CodePointSetData getSetForValue(int value) {
    final result = _icu4x_CodePointMapData8_get_set_for_value_mv1(_ffi, value);
    return CodePointSetData._fromFfi(result, []);
  }

  /// See the [Rust documentation for `general_category`](https://docs.rs/icu/latest/icu/properties/maps/fn.general_category.html) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CodePointMapData8.generalCategory(DataProvider provider) {
    final result = _icu4x_CodePointMapData8_load_general_category_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CodePointMapData8._fromFfi(result.union.ok, []);
  }

  /// See the [Rust documentation for `bidi_class`](https://docs.rs/icu/latest/icu/properties/maps/fn.bidi_class.html) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CodePointMapData8.bidiClass(DataProvider provider) {
    final result = _icu4x_CodePointMapData8_load_bidi_class_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CodePointMapData8._fromFfi(result.union.ok, []);
  }

  /// See the [Rust documentation for `east_asian_width`](https://docs.rs/icu/latest/icu/properties/maps/fn.east_asian_width.html) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CodePointMapData8.eastAsianWidth(DataProvider provider) {
    final result = _icu4x_CodePointMapData8_load_east_asian_width_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CodePointMapData8._fromFfi(result.union.ok, []);
  }

  /// See the [Rust documentation for `hangul_syllable_type`](https://docs.rs/icu/latest/icu/properties/maps/fn.hangul_syllable_type.html) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CodePointMapData8.hangulSyllableType(DataProvider provider) {
    final result = _icu4x_CodePointMapData8_load_hangul_syllable_type_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CodePointMapData8._fromFfi(result.union.ok, []);
  }

  /// See the [Rust documentation for `indic_syllabic_category`](https://docs.rs/icu/latest/icu/properties/maps/fn.indic_syllabic_category.html) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CodePointMapData8.indicSyllabicCategory(DataProvider provider) {
    final result = _icu4x_CodePointMapData8_load_indic_syllabic_category_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CodePointMapData8._fromFfi(result.union.ok, []);
  }

  /// See the [Rust documentation for `line_break`](https://docs.rs/icu/latest/icu/properties/maps/fn.line_break.html) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CodePointMapData8.lineBreak(DataProvider provider) {
    final result = _icu4x_CodePointMapData8_load_line_break_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CodePointMapData8._fromFfi(result.union.ok, []);
  }

  /// See the [Rust documentation for `grapheme_cluster_break`](https://docs.rs/icu/latest/icu/properties/maps/fn.grapheme_cluster_break.html) for more information.
  ///
  /// Throws [DataError] on failure.
  static CodePointMapData8 tryGraphemeClusterBreak(DataProvider provider) {
    final result = _icu4x_CodePointMapData8_try_grapheme_cluster_break_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CodePointMapData8._fromFfi(result.union.ok, []);
  }

  /// See the [Rust documentation for `word_break`](https://docs.rs/icu/latest/icu/properties/maps/fn.word_break.html) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CodePointMapData8.wordBreak(DataProvider provider) {
    final result = _icu4x_CodePointMapData8_load_word_break_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CodePointMapData8._fromFfi(result.union.ok, []);
  }

  /// See the [Rust documentation for `sentence_break`](https://docs.rs/icu/latest/icu/properties/maps/fn.sentence_break.html) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CodePointMapData8.sentenceBreak(DataProvider provider) {
    final result = _icu4x_CodePointMapData8_load_sentence_break_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CodePointMapData8._fromFfi(result.union.ok, []);
  }

  /// See the [Rust documentation for `joining_type`](https://docs.rs/icu/latest/icu/properties/maps/fn.joining_type.html) for more information.
  ///
  /// Throws [DataError] on failure.
  factory CodePointMapData8.joiningType(DataProvider provider) {
    final result = _icu4x_CodePointMapData8_load_joining_type_mv1(provider._ffi);
    if (!result.isOk) {
      throw DataError.values[result.union.err];
    }
    return CodePointMapData8._fromFfi(result.union.ok, []);
  }
}

@meta.ResourceIdentifier('icu4x_CodePointMapData8_destroy_mv1')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_destroy_mv1')
// ignore: non_constant_identifier_names
external void _icu4x_CodePointMapData8_destroy_mv1(ffi.Pointer<ffi.Void> self);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_get_mv1')
@ffi.Native<ffi.Uint8 Function(ffi.Pointer<ffi.Opaque>, ffi.Uint32)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_get_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_CodePointMapData8_get_mv1(ffi.Pointer<ffi.Opaque> self, Rune cp);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_general_category_to_mask_mv1')
@ffi.Native<ffi.Uint32 Function(ffi.Uint8)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_general_category_to_mask_mv1')
// ignore: non_constant_identifier_names
external int _icu4x_CodePointMapData8_general_category_to_mask_mv1(int gc);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_iter_ranges_for_value_mv1')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>, ffi.Uint8)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_iter_ranges_for_value_mv1')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _icu4x_CodePointMapData8_iter_ranges_for_value_mv1(ffi.Pointer<ffi.Opaque> self, int value);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_iter_ranges_for_value_complemented_mv1')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>, ffi.Uint8)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_iter_ranges_for_value_complemented_mv1')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _icu4x_CodePointMapData8_iter_ranges_for_value_complemented_mv1(ffi.Pointer<ffi.Opaque> self, int value);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_iter_ranges_for_mask_mv1')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>, ffi.Uint32)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_iter_ranges_for_mask_mv1')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _icu4x_CodePointMapData8_iter_ranges_for_mask_mv1(ffi.Pointer<ffi.Opaque> self, int mask);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_get_set_for_value_mv1')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Opaque>, ffi.Uint8)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_get_set_for_value_mv1')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _icu4x_CodePointMapData8_get_set_for_value_mv1(ffi.Pointer<ffi.Opaque> self, int value);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_load_general_category_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_load_general_category_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CodePointMapData8_load_general_category_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_load_bidi_class_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_load_bidi_class_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CodePointMapData8_load_bidi_class_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_load_east_asian_width_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_load_east_asian_width_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CodePointMapData8_load_east_asian_width_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_load_hangul_syllable_type_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_load_hangul_syllable_type_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CodePointMapData8_load_hangul_syllable_type_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_load_indic_syllabic_category_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_load_indic_syllabic_category_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CodePointMapData8_load_indic_syllabic_category_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_load_line_break_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_load_line_break_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CodePointMapData8_load_line_break_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_try_grapheme_cluster_break_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_try_grapheme_cluster_break_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CodePointMapData8_try_grapheme_cluster_break_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_load_word_break_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_load_word_break_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CodePointMapData8_load_word_break_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_load_sentence_break_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_load_sentence_break_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CodePointMapData8_load_sentence_break_mv1(ffi.Pointer<ffi.Opaque> provider);

@meta.ResourceIdentifier('icu4x_CodePointMapData8_load_joining_type_mv1')
@ffi.Native<_ResultOpaqueInt32 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'icu4x_CodePointMapData8_load_joining_type_mv1')
// ignore: non_constant_identifier_names
external _ResultOpaqueInt32 _icu4x_CodePointMapData8_load_joining_type_mv1(ffi.Pointer<ffi.Opaque> provider);
