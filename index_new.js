function Calculate()
{
        var input= document.querySelector('input').value;
        var result= Math.floor(input/10)-1;
        if(result>100 || result<1)
        {
            alert("The Number exceeds the Limit, Try Again");
        }
        else{
            document.querySelector(".buttonClass").innerHTML=(""+result+"");
        }
}
