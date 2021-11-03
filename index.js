function calculate(){
    var billamt = document.getElementById("bill").value;
    var serviceamt = document.getElementById("service").value;
    var peopleamt = document.getElementById("people").value;
    
    //validate input
    if(billamt === "" || serviceamt === "0"){
        alert(" please enter amount value & service");
        return;
    }

    
    //num of people should atleast 1 else display non 
    if(peopleamt === "" || peopleamt <= 1){
        peopleamt = 1;

        document.getElementById("each").style.display="none";
    } else{
        document.getElementById("each").style.display ="block";
    }

    //calculate tip

    var total = (billamt * serviceamt)/peopleamt;
    total = Math.round(total * 100)/100;
    tatal =total.toFixed(2);   //only for 2 digits after point

    document.getElementById("totaltip").style.display ="block";
    document.getElementById("tip").innerHTML = total;
}

// //defaultly hidden
//document.getElementById("totaltip").style.display = "none";
//document.getElementById("each").style.display ="none";

document.getElementById("btnClick").onclick = function() {
    calculate();
}