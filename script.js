console.log("Script loaded");

// Define kontrol function outside the DOMContentLoaded event listener
function kontrol() {
    
    const email = document.getElementById("email").value.length;
    var number = document.getElementById("number").value.length;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var mail = document.getElementById("email").value;

    var title = document.getElementById("title").value.length;
    var name = document.getElementById("name").value.length;

    var city = document.getElementById("dropdownList").value.length;
    var course = document.getElementById("dropdownListCourse").value.length;

    var checkbox =document.getElementById("term");

   /*
   var list = [501, 505, 506, 507, 551, 552, 553, 554, 555, 559,516, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 561,541, 542, 543, 544, 545, 546, 547, 548, 549];
    var numberCheck = document.getElementById("number").value.slice(0,3);
    var listlength = list.length;

    var x = 0 ;

    for(var i=0; i < listlength; i++){
        if (numberCheck == list[i]){
            x = 1;
        }
        else{
            x=0;
        }
    }
    */
 

    if (email == 0 || number == 0 || name == 0 || title == 0 || course == 0 || city == 0) {
        text= "Please fill all fields!";
    }else if (reg.test(mail) == false) {
        text1 = "Wrong mail address!";
    }else if (number != 10){
        text2 = "Please check the phone number!"
    /*}else if( x!= 1){
        text4 = "Invalid area code!"*/
    }else if (checkbox.checked != true){
        text3 = "Please agree Terms and Conditions!"
    } else{
        window.location.href = "file:///Users/elif/Desktop/Midterm/index2.html";
    }


    document.getElementById("result").innerHTML = text;
    document.getElementById("result1").innerHTML = text1;
    document.getElementById("result2").innerHTML = text2;
    /*document.getElementById("result4").innerHTML = text4;*/
    document.getElementById("result3").innerHTML = text3;
    
}



