// Palindrome Check

// isPalindrome();
const isPalindrome = require('./tdd');

// abc -> false
test('should // abc -> false', () => {
    const result = isPalindrome('abc')

    expect(result).toBe(false)
})

// aba -> true
test('should // aba -> true', () => {
    const result = isPalindrome('aba')

    expect(result).toBe(true)
})

// no input -> null
test('should // no input -> null', () => {
    const result = isPalindrome()

    expect(result).toBe(null)
})

// null -> null
test('should // null -> null', () => {
    const result = isPalindrome(null)

    expect(result).toBe(null)
})


// a single -> is always true
test('should // single letter', () => {
    const result = isPalindrome('a')

    expect(result).toBe(true)
})

// 123 -> false
test('should // 123 -> false', () => {
    const result = isPalindrome(123)

    expect(result).toBe(false)
})

// 121 -> true
test('should // 121 -> true', () => {
    const result = isPalindrome(121)

    expect(result).toBe(true)
})

// Negative Number -121 -> true
test('should // -121 -> ignore negative sign', () => {
    const result = isPalindrome(-121)

    expect(result).toBe(true)
})

// Boolean , {}, [], ()=>{} -> false
test('should // Boolean {} [] ()=>{} -> null', () => {
    const result = isPalindrome({})

    expect(result).toBe(null)
})

// Aba -> true
test('should // Aba -> true', () => {
    const result = isPalindrome('Aba')

    expect(result).toBe(true)
})

// "    aba    " -> true
test('// White spaces -> ignore white spaces', () => {
    const result = isPalindrome('   abc   ')

    expect(result).toBe(false)
})

// length > 10 -> null
test('should // length check', () => {
    const result = isPalindrome('abcdefghijklmnopqrstuvwxyz');

    expect(result).toBe(null)
})


// H/M:  multiple inputs -> ignore the rest