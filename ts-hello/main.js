function dosomething() {
    for (var i = 1; i < 10; i++) {
        console.log(i);
    }
    console.log("Finally : " + i);
}
dosomething();
var message;
message = 'abc';
var showtypeone = message.endsWith('C');
var showtypetwo = message.endsWith('C');
var log = function (message) {
    console.log(message);
};
var dolog = function (message) {
    console.log(message);
};
var clearlog = function (message) { return console.log(message); };
var drewpoint = function (point) {
    //...
};
var getdistance = function (pointA, pointB) {
    //... 
};
drewpoint({
    x: 1,
    y: 2
});
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.drew = function () {
        //...
    };
    Point.prototype.getdistance = function (another) {
        //...
    };
    return Point;
}());
