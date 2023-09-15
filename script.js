function threeSum(arr, target) {
// write your code here
let sum=0; let diff=0; let min=0;
	for(let i=0;i<=arr.length-3;i++){
		for(let j=arr.length-3;j<=arr.length-2;j++){
			for(let k=arr.length-2;k<arr.length;k++){
				sum+=arr[i]+arr[j]+arr[k];
				diff=sum-target;
				if(diff<0){
					diff=diff*-1;
				}
				min=min<diff?min:diff;
			}
			
		}
	}
	return min;
  
}

module.exports = threeSum;
