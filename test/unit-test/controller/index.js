let object = {
    a:1,
    b:2,
    getA(){
        console.log(`values of a is ` + this.a)
        return this;
    },
    getB(){
        console.log(`value of b is ` + this.b);
        
    }
}


object.getA().getB();


let checking = 'hi';
console.log(checking.split('').reverse().join(''));

console.log(Object.keys(object))

let a = [1,2,3,9]
let b = [2,5,6,20]

let c = a.concat(b).sort((a,b)=>a>b);


console.log(c)