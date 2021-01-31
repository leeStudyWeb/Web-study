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