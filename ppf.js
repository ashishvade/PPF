function myfun(){
    amount=+document.getElementById('txt1').value;
    year=+document.getElementById('txt2').value;
    roi=+document.getElementById('txt3').value;
    //  console.log(amount,year,roi);
  openingBal=0;
  result=``;
  for(i=0;i<year;i++){
    interest=Math.round((openingBal+amount)*roi/100);
    closingBal=openingBal+interest+amount;
result=result+`
<tr>
<td> ${i}</td>
<td> ${openingBal}</td>
<td> ${amount} </td>
<td> ${interest}</td>
<td> ${closingBal}</td>

</tr>
`
openingBal=closingBal;

  }
  console.log(result);
  document.querySelector('#finalAnswer').innerHTML =result;
}