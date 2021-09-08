/* Submit function*/
function Submit() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let num5 = document.getElementById("num5").value;
    
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)){
        document.getElementById("result").value = ("Error, Enter Number Only!");
        
    }
    else if (num1 === "" || num2 === "" || num3 === "" || num4 === "" || num5 === "") {
        document.getElementById("result").value = ("Error, Missing Number!");
      }

    else {
        let posCount =0;
        let negativeCount=0;
        let zeroCount =0;

        var data=[num1,num2,num3,num4,num5];
        for(i=0;i<data.length;i++){
            if(data[i]>0){   
              posCount ++;
           }else if(data[i]<0){
              negativeCount ++;  
           } else{
             zeroCount++;
           }

        document.getElementById("result").value = (
            "Positive Numbers : " + posCount +
            "\nNegative Numbers " + negativeCount +
            "\nZero Numbers: " + zeroCount);
        }
    }
}
