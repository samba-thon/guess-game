# JavaScript Fundamentals - Learning Notes

## What is JavaScript?

JavaScript is a programming language that is commonly used to create interactive effects within web browsers. It allows developers to implement complex features on web pages, such as dynamic content updates, form validations, animations, and more.

## What's a Variable?

A variable is a container for storing data values. In JavaScript, you can create a variable using the `var`, `let`, or `const` keywords. For example:

```javascript
var age = 25; // Here, age is the variable name and 25 is the value assigned to it.
```

## Naming Conventions for Variables

1. Variable names must begin with a letter, underscore (`_`), or dollar sign (`$`).
2. Subsequent characters can also include digits (0-9).
3. Variable names are case-sensitive (e.g., `myVar` and `myvar` are different).
4. Avoid using reserved keywords (like `var`, `let`, `const`, `function`, etc.) as variable names.
5. Use camelCase for multi-word variable names (e.g., `firstName`, `totalAmount`).

## Immutable Data Types in JavaScript

### Primitive Data Types

Primitive data types include string, number, boolean, null, undefined, symbol, and bigint. Primitive values are immutable, meaning they cannot be changed once created. For example, if you have a string variable, you cannot change a specific character in that string; instead, you create a new string with the desired changes.

Examples of primitive data types:

```javascript
var num = 5;
var string = "Hello, World!"; // meaning text
var boolean = true; // Or false
var undef = undefined; // meaning no value assigned, not being defined
var nul = null; // this does not have any value, no object
var bigInt = 1234567890123456789012345678901234567890n; // for very large numbers
var sym = Symbol("This is a symbol"); // used to create unique identifiers
```

### Objects

While objects themselves are mutable (you can change their properties), the reference to the object is immutable. This means that if you assign an object to a variable, you cannot change that variable to reference a different object without creating a new variable.

## Mutable Data Types in JavaScript

1. **Arrays**: Arrays are mutable, meaning you can change their elements, add new elements, or remove existing ones.
2. **Functions**: Functions are also mutable; you can modify their properties or even reassign them to different functions.

## Key Concepts from Mystery Number Game

### 1. Random Number Generation
```javascript
var secretNumber = Math.floor(Math.random() * 10) + 1;
```
- `Math.random()` generates 0-0.999
- Multiply by 10 to get 0-9.999
- `Math.floor()` rounds down to integer
- Add 1 to get 1-10 range

### 2. DOM Manipulation
```javascript
document.getElementById('message').textContent = 'New message';
```
- Access HTML elements via JavaScript
- Update content dynamically
- Change CSS classes for styling

### 3. Event Listeners
```javascript
element.addEventListener('click', function() {
    // Code runs when element is clicked
});
```
- React to user interactions
- Click, keypress, change events
- Execute code in response to events

### 4. String to Number Conversion
```javascript
var guess = parseInt(inputValue);
```
- Convert text input to numbers
- `parseInt()` for integers
- `parseFloat()` for decimals

### 5. Comparison Operators
```javascript
if (guess === secretNumber) { }     // Exactly equal
if (guess > secretNumber) { }       // Greater than
if (guess < secretNumber) { }       // Less than
```

## Summary

Understanding these fundamentals is essential for building interactive web applications. The Mystery Number Game demonstrates:
- Variables for storing data
- Functions for organizing code
- DOM manipulation for updating the page
- Event handling for user interaction
- Conditional logic for game mechanics
