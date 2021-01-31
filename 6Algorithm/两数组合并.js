// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
//  

// 示例 1：
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]

// 示例 2：
// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]

function merge(nums1,m,nums2,n)
{
    if(!n)
    {
        return nums1;
    }
    if(!m)
    {
        nums1=nums2;
        return nums1;
    }
    let len1 = m-1;
    let len2 = n-1;
    let len = m+n-1;
    while(len1>=0&&len2>=0)
    {
        nums1[len--] = nums1[len1]>nums2[len2]?nums1[len1--]:nums2[len2--];
    }
    //考虑还剩下nums2数组里面还没有合并
    if(len2>=0)
   {
       for(let i=0;i<=len2;i++)
       {
           nums1[i]=nums2[i];
       }
   }
    return nums1;
}
console.log(merge([4,0,0,0,0],1,[1,2,3,5,6],5))