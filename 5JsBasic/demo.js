let a=1
function change(){
    console.log("--------a-------")
    console.log(a);
    console.log("--------a-------")
    nextchange()
    function nextchange(){
        let nexta = 10;
        console.log("--------nexta-------")
        console.log(a);
        console.log(nexta);
        console.log("--------nexta-------")
        nnextchange()
        function nnextchange(){
            let nnexta =100;
            console.log("--------nnexta-------")
            console.log(a)
            console.log(nexta)
            console.log(nnexta)
            console.log("--------nnexta-------")

        }
    }
}
change()

if (true) { 
    let a1; 
    var b;
   } 
  // console.log(a1); // ReferenceError: a 没有定义
   console.log(b)

//const s;
var color = 'blue'; 
function getColor() { 
 //let color = 'red'; 
 return color; 
} 
console.log(getColor());
console.log("-----date-----")
let someDate = new Date();
console.log(someDate.toString())
console.log(someDate.toLocaleString())
console.log(someDate.valueOf())
console.log("---格式化时间方法---")
console.log(someDate.toDateString())
console.log(someDate.toTimeString())
console.log(someDate.toLocaleDateString())
console.log(someDate.toLocaleTimeString())
console.log(someDate.toUTCString())
console.log(String.fromCodePoint(0x1F60A));
console.log("-------URI-----")
let uri = "http://www.wrox.com/illegal value.js#start";
console.log(encodeURI(uri))
console.log(encodeURIComponent(uri))
console.log(Math.PI)
const arr = ["foo", "bar", "baz", "qux"];
console.log(arr.keys())
let colors = ["red", "green", "blue"]; 
let newColors = ["black", "brown"];
let colors2 = colors.concat("yellow", newColors);
console.log(colors2)
let newMap = new Map([["key1","value1"]])
Map["key1"]="value2"
console.log(newMap.get("key1"))
let array = [1,2,3,4]
let iterator =array[Symbol.iterator]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
class Couter
{
    constructor(limit)
    {
        this.limit=limit;
    }
    [Symbol.iterator](){
        let count=1;
        let limit=this.limit;
        return{
            next(){
                if(count<=limit)
                {
                    return{done:false,value:count++}
                }else{
                    return{
                        done:true,value:undefined
                    }
                }
            },
            return(){
                    console.log("Exiting");
                    return{done:true}
            }
        }
    }
}
let counter =new Couter(5)
for(let i of counter)
{
    if(i>2)break
    console.log(i)
}
function* f()
{
    console.log(1)
    yield 'foo';
    yield 'bar';
    return 'aa'
}
let foo = f();
console.log(foo.next())
console.log(foo.next())
let person = { 
    name_:'',
    age:18,
    get name() {
        return this.name_
    },
    set name(name) {
        this.name_ =name
    },
    sayName(){
        console.log(this.name_)
    }
   };
   person.name = 'Matt'; 
   person.sayName(); // My name is Matt
function Person(name){
    this.name=name;
}
let p1 = new Person('lmy')
p1.__proto__.age=18
console.log(Person.prototype)
console.log(Object.values(person))
console.log(Object.entries(person))
console.log('-0-------------------')
class Peopel{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
        this.sex='female';
    }
    sex ='male';
    locate(){
        console.log(1)
    }
}
let peo1 =new Peopel('lmy',18);
console.log(peo1.name)
peo1.locate()