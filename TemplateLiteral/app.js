// basic functionality
function fn1(){
    const a = "ba", b = "QUX";
    return `foo ${a + "r"}
${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
}
console.log(fn1());

// toString conversion
function fn2(){
    const a = {
        toString: function () {
            return "foo";
        },
        valueOf: function () {
            return "bar";
        },
    };
    return `${a}` === "foo";
}
console.log(fn2());

// tagged template literals
function fn3(){
    var called = false;
    function fn(parts, a, b) {
        called = true;
        return parts instanceof Array &&
            parts[0]     === "foo"      &&
            parts[1]     === "bar\n"    &&
            parts.raw[0] === "foo"      &&
            parts.raw[1] === "bar\\n"   &&
            a === 123                   &&
            b === 456;
    }
    return fn `foo${123}bar\n${456}` && called;
}
console.log(fn3());

// passed array is frozen
function fn4(){
    return (function(parts) {
        return Object.isFrozen(parts) && Object.isFrozen(parts.raw);
    }) `foo${0}bar${0}baz`;
}
console.log(fn4());

// line break normalisation
function fn5(){
    var cr   = eval("`x" + String.fromCharCode(13)    + "y`");
    var lf   = eval("`x" + String.fromCharCode(10)    + "y`");
    var crlf = eval("`x" + String.fromCharCode(13,10) + "y`");

    return cr.length === 3 && lf.length === 3 && crlf.length === 3
        && cr[1] === lf[1] && lf[1] === crlf[1] && crlf[1] === '\n';
}
console.log(fn5());


// TemplateStrings call site caching
function fn6(){
// TemplateStrings caching was changed from per-contents to
// per-call-site.
// https://github.com/tc39/ecma262/pull/890
    function strings(array) {
        return array;
    }
    function getStrings() {
        return strings`foo`;
    }
    var original = getStrings();
    var other = strings`foo`;
    return original === getStrings() && original !== other;
}
console.log(fn6());

// TemplateStrings permanent caching
function fn7(){
    function strings(array) {
        return array;
    }
    function getStrings() {
        return strings`foo`;
    }
    var original = getStrings();
    var newed = new getStrings();
    return original === getStrings() && original === newed;
}
console.log(fn7());

