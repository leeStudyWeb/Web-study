//扁平化
const flatdeep = (array)=>array.flat(Infinity)
//排序
const sort =(array)=>array.sort((a,b)=>a-b)
//去重
//1.手写去重
const unique1 =(array)=>{
    let uniueArray =[]
    for(let i =0;i<array.length;i++)
    {
        for(let j=0;j<uniueArray.length;j++)
        {
            if(array[i]===uniueArray[j])
            {
                break;
            }
        }
        if(j===uniueArray.length)
        {
                uniueArray.push(array[i]);
        }
    }
    return uniueArray;
}
//2.filter
const unique2 =(array)=>{
    let uniueArray = array.filter((element,index) =>{
        return array.indexOf(element)==index;
    })
    return uniueArray;
}
//3.set方法
const unique3 =(array)=>{
    return[...new Set(array)]
}