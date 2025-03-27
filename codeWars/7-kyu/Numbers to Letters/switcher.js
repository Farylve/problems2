var alpha = ' zyxwvutsrqponmlkjihgfedcba!? ';
var switcher = function (x) { return x.map(function (item) { return alpha[item]; }).join(''); };
