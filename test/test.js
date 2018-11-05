var hello = require("../src/js/main.js").hello;

test("Example test", function(){
    expect(hello("world")).toBe("Hello world");
});
