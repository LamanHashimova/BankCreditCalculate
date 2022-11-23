let Calculate=()=>{
let amount=document.getElementById('Amount').value;
let percent=document.getElementById('Percent').value;
let period=document.getElementById('Period').value;
if(amount===null ||amount==="" || percent==="" || percent===null){
alert('Please enter the amount and percent...')
}
else{
amount=Number(amount);
percent=Number(percent);
period=Number(period);
 if(isNaN(amount)|| isNaN(percent)){
alert('Please enter the correct value...')
 }else{
    
    let totalprice=amount+(amount*percent/100)
    document.getElementById('TotalPrice').innerHTML=`Total Price: ${totalprice}`
    document.getElementById('Payment').innerHTML=`Payment: ${totalprice/period}`
 }
}
} 

