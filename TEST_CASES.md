# Test Cases Documentation - Mystery Number Game

## Overview
This document describes all test cases for the Mystery Number Guessing Game. The game uses Jest with jsdom environment for testing.

**Total Tests: 26 ✅ All Passing**

---

## Unit Tests - Game Logic (6 tests)

### 1. Random Number Generation
**Test Name:** `Random number should be between 1 and 10`
- **Purpose:** Verify the secret number is always within valid range
- **Test Method:** Generate 100 random numbers and check each is 1-10
- **Expected Result:** All numbers fall between 1 and 10 inclusive
- **Status:** ✅ PASS

### 2. parseInt String Conversion
**Test Name:** `parseInt should convert string to number`
- **Purpose:** Verify user input is properly converted to numbers
- **Test Cases:**
  - `parseInt('5')` → `5`
  - `parseInt('10')` → `10`
  - `parseInt('1')` → `1`
- **Expected Result:** All strings convert to correct numbers
- **Status:** ✅ PASS

### 3. Invalid Input Handling
**Test Name:** `parseInt with invalid input should return NaN`
- **Purpose:** Verify invalid inputs are detected
- **Test Cases:**
  - `parseInt('abc')` → `NaN`
  - `parseInt('')` → `NaN`
- **Expected Result:** Invalid inputs produce NaN
- **Status:** ✅ PASS
- **Note:** HTML validation prevents this in practice

### 4. Correct Guess Detection
**Test Name:** `Guess comparison: Should detect correct guess`
- **Purpose:** Verify correct guesses are identified
- **Test Case:** secretNumber = 7, guess = 7
- **Expected Result:** `7 === 7` is TRUE
- **Status:** ✅ PASS

### 5. Too High Detection
**Test Name:** `Guess comparison: Should detect too high`
- **Purpose:** Verify when guess exceeds secret number
- **Test Case:** secretNumber = 5, guess = 8
- **Expected Result:** `8 > 5` is TRUE
- **Status:** ✅ PASS

### 6. Too Low Detection
**Test Name:** `Guess comparison: Should detect too low`
- **Purpose:** Verify when guess is below secret number
- **Test Case:** secretNumber = 7, guess = 3
- **Expected Result:** `3 < 7` is TRUE
- **Status:** ✅ PASS

---

## Integration Tests - Game Flow (6 tests)

### 7. Message Element Accessibility
**Test Name:** `Message element should exist and be accessible`
- **Purpose:** Verify message display element exists in DOM
- **Checks:**
  - Element exists in DOM
  - Initial text is "Solve the mystery number!"
- **Expected Result:** Message element found and accessible
- **Status:** ✅ PASS

### 8. Input Element Validation
**Test Name:** `Input element should exist and accept numbers`
- **Purpose:** Verify input field has correct HTML attributes
- **Checks:**
  - Element exists
  - `type="number"`
  - `min="1"`
  - `max="10"`
- **Expected Result:** Input element properly configured
- **Status:** ✅ PASS

### 9. Button Element Functionality
**Test Name:** `Submit button should exist and be clickable`
- **Purpose:** Verify button exists and has correct text
- **Checks:**
  - Button element exists
  - Button text is "Make a Guess"
- **Expected Result:** Button ready for clicks
- **Status:** ✅ PASS

### 10. Input Value Setting
**Test Name:** `Should be able to set input value`
- **Purpose:** Verify input can accept and store values
- **Test:** Set input value to '5' and verify it's stored
- **Expected Result:** Value persists
- **Status:** ✅ PASS

### 11. Correct Guess Message Display
**Test Name:** `Message class should update on correct guess`
- **Purpose:** Verify correct guess message displays with right class
- **Checks:**
  - Message text: '✅ CASE CLOSED! You found it!'
  - CSS class: 'correct' (triggers green color + pulse animation)
- **Expected Result:** Message and styling applied correctly
- **Status:** ✅ PASS

### 12. Too High Message Display
**Test Name:** `Message class should update on too high guess`
- **Purpose:** Verify too high message displays with right class
- **Checks:**
  - Message text: '❌ Too high!'
  - CSS class: 'too-high' (triggers red color)
- **Expected Result:** Message and styling applied correctly
- **Status:** ✅ PASS

### 13. Too Low Message Display
**Test Name:** `Message class should update on too low guess`
- **Purpose:** Verify too low message displays with right class
- **Checks:**
  - Message text: '❌ Too low!'
  - CSS class: 'too-low' (triggers blue color)
- **Expected Result:** Message and styling applied correctly
- **Status:** ✅ PASS

---

## Game Simulation - Full Gameplay (4 tests)

### 14. Complete Flow - Correct Guess
**Test Name:** `Complete game flow: User guesses correctly`
- **Scenario:** Player guesses the correct number on first try
- **Steps:**
  1. Set secret number to 7
  2. Player enters 7
  3. Game compares
- **Expected Result:**
  - Message: '✅ CASE CLOSED! You found it!'
  - Class: 'correct'
- **Status:** ✅ PASS

### 15. Complete Flow - Too High
**Test Name:** `Complete game flow: User guesses too high`
- **Scenario:** Player guesses a number higher than secret
- **Steps:**
  1. Set secret number to 5
  2. Player enters 8
  3. Game compares
- **Expected Result:**
  - Message: '❌ Too high!'
  - Class: 'too-high'
- **Status:** ✅ PASS

### 16. Complete Flow - Too Low
**Test Name:** `Complete game flow: User guesses too low`
- **Scenario:** Player guesses a number lower than secret
- **Steps:**
  1. Set secret number to 8
  2. Player enters 3
  3. Game compares
- **Expected Result:**
  - Message: '❌ Too low!'
  - Class: 'too-low'
- **Status:** ✅ PASS

### 17. Multiple Consecutive Guesses
**Test Name:** `Multiple consecutive guesses`
- **Scenario:** Player makes 3 guesses in sequence
- **Steps:**
  1. Secret number = 6
  2. First guess: 3 (too low)
  3. Second guess: 9 (too high)
  4. Third guess: 6 (correct)
- **Expected Result:**
  - Message updates with each guess
  - Final message shows correct
- **Status:** ✅ PASS

---

## Edge Cases & Error Handling (6 tests)

### 18. Boundary - Minimum Value
**Test Name:** `Boundary: Guess 1 (minimum)`
- **Purpose:** Test lowest valid value
- **Test Case:** secretNumber = 1, guess = 1
- **Expected Result:** `1 === 1` is TRUE
- **Status:** ✅ PASS

### 19. Boundary - Maximum Value
**Test Name:** `Boundary: Guess 10 (maximum)`
- **Purpose:** Test highest valid value
- **Test Case:** secretNumber = 10, guess = 10
- **Expected Result:** `10 === 10` is TRUE
- **Status:** ✅ PASS

### 20. Empty Input Handling
**Test Name:** `Empty input should result in NaN when parsed`
- **Purpose:** Verify empty input is detected
- **Test:** `parseInt('')` → `NaN`
- **Expected Result:** Returns NaN (prevented by HTML required attribute)
- **Status:** ✅ PASS

### 21. Non-Numeric Input
**Test Name:** `Non-numeric input should result in NaN when parsed`
- **Purpose:** Verify non-numbers are rejected
- **Test:** `parseInt('abc')` → `NaN`
- **Expected Result:** Returns NaN (prevented by HTML type="number")
- **Status:** ✅ PASS

### 22. Whitespace Input
**Test Name:** `Whitespace input should result in NaN when parsed`
- **Purpose:** Verify whitespace-only input is rejected
- **Test:** `parseInt('   ')` → `NaN`
- **Expected Result:** Returns NaN
- **Status:** ✅ PASS

### 23. Decimal Number Handling
**Test Name:** `Decimal numbers should be converted to integers`
- **Purpose:** Test parseInt rounds down decimals
- **Test:** `parseInt('5.9')` → `5`
- **Expected Result:** Decimal is converted to integer
- **Status:** ✅ PASS

---

## Message Verification (3 tests)

### 24. Correct Message Format
**Test Name:** `Correct message has emoji and text`
- **Purpose:** Verify correct message contains expected content
- **Checks:**
  - Contains '✅' emoji
  - Contains 'CASE CLOSED' text
- **Expected Result:** Both present
- **Status:** ✅ PASS

### 25. Too High Message Format
**Test Name:** `Too high message has correct emoji`
- **Purpose:** Verify too high message contains expected content
- **Checks:**
  - Contains '❌' emoji
  - Contains 'Too high' text
- **Expected Result:** Both present
- **Status:** ✅ PASS

### 26. Too Low Message Format
**Test Name:** `Too low message has correct emoji`
- **Purpose:** Verify too low message contains expected content
- **Checks:**
  - Contains '❌' emoji
  - Contains 'Too low' text
- **Expected Result:** Both present
- **Status:** ✅ PASS

---

## Test Execution Summary

```
Test Suites: 1 passed, 1 total
Tests:       26 passed, 26 total
Snapshots:   0 total
Time:        ~0.4s
```

## Running Tests

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run with coverage
npm test -- --coverage
```

## Test Structure

- **Framework:** Jest
- **Environment:** jsdom (browser simulation)
- **Test File:** `script.test.js`
- **Config File:** `jest.config.js`

## What's NOT Tested (By Design)

1. **Attempt Tracking** - Game doesn't track attempts
2. **Game Reset** - No reset functionality
3. **Accessibility** - ARIA labels not implemented
4. **Mobile UI** - Not tested (responsive CSS exists)
5. **Browser Compatibility** - Tests run in jsdom

## Future Test Enhancements

- Add performance tests
- Test CSS animations
- Test localStorage for high scores
- Accessibility (WCAG) testing
- Visual regression testing
