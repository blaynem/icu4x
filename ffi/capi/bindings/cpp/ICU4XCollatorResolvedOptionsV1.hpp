#ifndef ICU4XCollatorResolvedOptionsV1_HPP
#define ICU4XCollatorResolvedOptionsV1_HPP
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include <algorithm>
#include <memory>
#include <variant>
#include <optional>
#include "diplomat_runtime.hpp"

#include "ICU4XCollatorResolvedOptionsV1.h"

#include "ICU4XCollatorStrength.hpp"
#include "ICU4XCollatorAlternateHandling.hpp"
#include "ICU4XCollatorCaseFirst.hpp"
#include "ICU4XCollatorMaxVariable.hpp"
#include "ICU4XCollatorCaseLevel.hpp"
#include "ICU4XCollatorNumeric.hpp"
#include "ICU4XCollatorBackwardSecondLevel.hpp"


/**
 * See the [Rust documentation for `ResolvedCollatorOptions`](https://docs.rs/icu/latest/icu/collator/struct.ResolvedCollatorOptions.html) for more information.
 */
struct ICU4XCollatorResolvedOptionsV1 {
 public:
  ICU4XCollatorStrength strength;
  ICU4XCollatorAlternateHandling alternate_handling;
  ICU4XCollatorCaseFirst case_first;
  ICU4XCollatorMaxVariable max_variable;
  ICU4XCollatorCaseLevel case_level;
  ICU4XCollatorNumeric numeric;
  ICU4XCollatorBackwardSecondLevel backward_second_level;
};


#endif
