
//给定两个数组，编写一个函数来计算它们的交集。
//示例 1：
//输入：nums1 = [1,2,2,1], nums2 = [2,2]
///输出：[2]


let main = function(nums1,nums2)
{
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    console.log(intersection(set1,set2));
}
function intersection(set1,set2)
{
    if(set1.size>set2.size)
    {
        return intersection(set2,set1);
    }
    let newSet = new Set();
    for(const num of set1)
    {
        if(set2.has(num))
        {
            newSet.add(num);
        }
    }
    return[...newSet]
}
main([1,2,2,1],[2,2])