(function () {
    function add(num1, num2,num3) {
        return num1 + num2+num3
    }
    console.log(add(23, 56,15))
})();
;(function () {
    var arr = [5, 3, 4, 7, 6, 5, 4, 5].filter(function (item, index) {
        return item <= 5
    });
    console.log(arr);
})();

