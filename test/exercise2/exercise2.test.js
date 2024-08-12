const palindrome = require("./exercise2");

test("Comproving if palindrome function is defined", () => {
    expect(palindrome).toBeDefined();
});
 
test("Comproving if function value is a palindrome", () => {
    expect(palindrome("otto")).toEqual(true);
});

test("Isn't a palindrome", () => {
    expect(palindrome("Dan")).toEqual(false);
}); 