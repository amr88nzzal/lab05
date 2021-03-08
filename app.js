alert('Welcome to Taxi driver website')
 
//declare the variables

var carType = prompt('Please Select the Taxi type \n 1- car with tow seats \n 2- car with four seats \n 3- car with nine seats')
var taxi1 = '<img src = "./pic/03.png" style=" position: relative ; padding-left: 40px; "/>'
var taxi2 = '<img src = "./pic/02.png" style=" position: relative ; padding-left: 40px;"/>'
var taxi3 = '<img src = "./pic/04.png" style=" position: relative ; padding-left: 40px;"/>'
var callDriver ='<p> click here to call the Driver</p>'
var pElement = document.getElementById('taxi')


// check if the car type is validate

function getCarType(){
while(carType!='1' && carType!='2' && carType!='3' )
{
    alert("OPS!! ... \n you entered a invalid choice \n \n    Please try again!  ")
    carType = prompt('Please Select the Taxi type \n 1- car with tow seats \n 2- car with four seats \n 3- car with nine seats')
}}
getCarType();

// check if the number of cars  is validate

    var NumCars = prompt('How many cars do you need?');
    
  

var NumCarsF = function (){
    // NumCars();
while(!(NumCars>0))
{
    alert("OPS!! ... \n you entered a invalid number \n \n    Please try again!  ");
    NumCars = prompt('How many cars do you need?');
  
}}
// Display the cars
function ShowResultF (){
for (var i=0 ;i<NumCars;i++)
{
    if(carType=='1'){
        document.write(taxi1);
    }
    else if(carType=='2'){
        document.write(taxi2);}
    else{
        document.write(taxi3);

        }
}}

NumCarsF();
ShowResultF ();
// Print the number of cars
pElement.textContent= ' You ordered : ' +NumCars+ ' cars.'

