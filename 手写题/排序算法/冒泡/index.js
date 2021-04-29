var arr=[3,4,1,2]
function bubbleSort(arr){
    for(var j=0;j<arr.length-1;j++){
        var done=true;
        for(var i=0;i<(arr.length-1)-j;i++){
            if(arr[i]>arr[i+1]){
                var temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp;
                done=false
            }
        }
        if(done){
            break
        }
    }
    return arr
}


console.log(bubbleSort(arr));