let number = prompt("Enter your Grade Percentage")

if (number>=90 && number<=100){
    document.write("Your Grade is an A")
}
else if(number<90 && number>=80){
    document.write("Your Grade is a B")
}
else if(number<80 && number>=70){
    document.write("Your Grade is a C")
}
else if(number<70 && number>=60){
    document.write("Your Grade is a D")
}
else if(number>100 || number<0){
    document.write("Invalid Input")
}
else {
    document.write("Your Grade is an F")
}