function dosomething(){
    for(var i =1 ; i<10 ; i++){
        console.log(i)
    }
    console.log("Finally : "+i)
}

dosomething();


let message;
message = 'abc';
let showtypeone = (message as string).endsWith('C')
let showtypetwo = (<string>message).endsWith('C')

let log = function(message) {
    console.log(message);
}

let dolog = (message) => {
    console.log(message)
}

let clearlog = (message) => console.log(message)


interface point {
    x:number,
    y:number
}

let drewpoint = (point:point) =>{
    //...
}

let getdistance = (pointA : point , pointB : point)=>{
    //... 
}

drewpoint({
    x: 1,
    y:2
})

class Point{
    x:number;
    y:number;

    drew(){
        //...
    }

    getdistance(another : point){
        //...
    }
}