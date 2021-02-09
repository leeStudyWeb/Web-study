function longCommonString(array){
    if(array==null||array.length==0)
    {
        return ''
    }
    let temp = array[0];
    for(let i=1;i<array.length;i++)
    {
        let j=0
        for(;j<array[i].length;j++)
        {
            if(temp.charAt(j)!=array[i].charAt(j))
            {break;}
        }
        temp=temp.substring(0,j)
    }
    return temp;
}
let s =longCommonString(['arrat','array','ar']);
console.log(s);