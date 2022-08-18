function BMI (weight=80, height=1.80) {
    let result = weight / (height * height);
    return result;
}
console.log(BMI());
console.log(BMI(75, 1.8));


function status(bmi) {

    if(bmi < 18.5) {
        let desc = "لديك نقص في الوزن" ;
        document.getElementById("result").style.color="orange" ;
        document.getElementById("result").style.textShadow="1px 1px 15px orange";
        return desc;	

    }else if(bmi >= 18.5 && bmi < 25){
    let desc ="وزنك صحي" ;
    document.getElementById("result").style.color="green" ;
    document.getElementById("result").style.textShadow="1px 1px 15px green";
    return desc ;
    
}else{
    let desc = "لديك زيادة في الوزن";
    document.getElementById("result").style.color="red";
    document.getElementById("result").style.textShadow="1px 1px 15px red";
    return desc;
    }
}

function calculate() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let div = document.getElementById("result"); 

    let bmi = BMI(weight,height);
    let desc = status(bmi);
    
    div.innerText = bmi + " == " + desc;
    
}
