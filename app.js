// primitive: number,strings,boolean,undefine,null,bigint,Symbol
// non primitive: arrays,objects,functions

var a=20;
console.log(typeof(a)); //number

var str="Himavarsha"
console.log(typeof(str)) //strings


var a=true;
 console.log(typeof(a)); //bool

var a;
 console.log(typeof(a)) //undefined

const a=null;
 console.log(typeof(a)); //null

var a=BigInt(12345678)
 console.log(a)
 console.log(typeof(a)) //bigint

var a=Symbol(123)
var b=123
console.log(a==b); //symbol

// non primitive

var a={
    name:"himavarsha",
    age:21
}
console.log(a.name) //object
console.log(a['age'])
a['name']="pinky"
console.log(a)
delete a['age']
console.log(a)


//arrays
var arr=["porsche","BMW",1,2]
arr[2]="astonmartin"
delete arr[2]
arr[2]="astonmartin"
console.log(arr)