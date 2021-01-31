//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
//请你找出所有和为 0 且不重复的三元组。
//注意：答案中不可以包含重复的三元组。

//输入：nums = [-1,0,1,2,-1,-4]
//-4 -1 -1 0 1 2
//输出：[[-1,-1,2],[-1,0,1]]
function sum3(nums)
{
    let result =[];
    if(nums.length<3||nums==null)
    {
        return result;
    }
    nums.sort((a,b)=>a-b);
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>0)
        {
            break;
        }
        if(i>0&&nums[i]==nums[i-1])
        {continue;}
        let k=i+1;
        let j=nums.length-1;
        while(k<j)
        {
            //！！！不可取这样永远都不会重复
            // if(nums[k]==nums[k-1]&&k>0)
            // {
            //     k++;
            //     continue;
            // }
            // if(nums[j]==nums[j+1]&&j<nums.length-1)
            // {
            //     j--;
            //     continue;
            // }
            let sum = nums[i]+nums[k]+nums[j];
            if(sum==0)
           {
            result.push([nums[i],nums[k],nums[j]]);
             while(k<j&&nums[k]==nums[k+1]){k++;}
             while(k<j&&nums[j-1]==nums[j]){j--;}
            k++;
            j--;
           }else if(sum<0){
               k++;
           }else{
               j--;
           }
        }
    }
    return result;
}
console.log(sum3([-1,0,1,2,-1,-4]))