function Submitit() {
    var name = document.getElementById("Name");
    var fname = document.getElementById("fName");
    var R_no = document.getElementById("R_no");
    var DOB = document.getElementById("dob");
    var nationality = document.getElementById("nationality");
    var gender = document.getElementsByName("gender");
    var religion = document.getElementById("religion");
    var address = document.getElementById("address");
    var cnic = document.getElementById("CNIC");
    var contact = document.getElementById("contact");
    var mark = document.getElementById("mark");
    var post_code = document.getElementById("code");
    var image = document.getElementById("img");

     a = name.value;
     b = fname.value;
     c = R_no.value;
     d = DOB.value;
     e = nationality.value;
    for(i = 0; i < gender.length; i++) {
        if(gender[i].checked)
        x.innerHTML = "Gender: "+gender[i].value;
    }
     g = religion.value;
     h = address.value;
     i = cnic.value;
     j = contact.value;
     k = mark.value;
     l = post_code.value;
     m = image.value;
    
  
    s.innerHTML = "Name: "+a;
    t.innerHTML = "Father's Name: "+b;
    u.innerHTML = "Roll Number: " + c;
    v.innerHTML = "D.O.B: " + d;
    w.innerHTML = "nationality: " + e;
    y.innerHTML = "Religion " + g;
    z.innerHTML = "Residential Address: "+h;
    aa.innerHTML = "CNIC/B-Form: "+i;
    ab.innerHTML ="Contact: "+j;
    ac.innerHTML ="Mark: "+k;
    ad.innerHTML = "Post Code: "+ l;
    ae.innerHTML = "Image: " + m;
   

   
  
   
      document.getElementById("subjects").style.display = "none";
      document.getElementById("details").style.display = "none";
      document.getElementById("submits").style.display = "block";
      document.getElementById("btn").style.display = "none";
}
function back(){
    document.getElementById("subjects").style.display = "block";
    document.getElementById("details").style.display = "block";
    document.getElementById("submits").style.display = "none";
    document.getElementById("btn").style.display = "block";
}
function checkCheckbox() {  
    var s1 = document.getElementById("s1");  
    var s2 = document.getElementById("s2");  
    var s1 = document.getElementById("s3");  
    var s2 = document.getElementById("s4");  
    var s1 = document.getElementById("s5");  
    var s2 = document.getElementById("s6");  
    if (s1.checked == true && s2.checked == true){  
      return document.getElementById("error").innerHTML = "Please mark only one checkbox either Urdu Normal or Urdu Easy";  
    }  
    else if (s1.checked == true){  
      var y = document.getElementById("s1").value;  
      return document.getElementById("n").innerHTML = "Urdu Normal";   
    }   
    else if (s2.checked == true){  
      var n = document.getElementById("s2").value;  
      return document.getElementById("n").innerHTML = "Urdu Easy";  
    }  
    else if (s3.checked == true && s4.checked == true){  
        return document.getElementById("error").innerHTML = "Please mark only one checkbox either English Normal or Enlish Advanced";  
      }  
      else if (s3.checked == true){  
        var yy = document.getElementById("s3").value;  
        return document.getElementById("o").innerHTML = "English Normal";   
      }   
      else if (s4.checked == true){  
        var nn = document.getElementById("s4").value;  
        return document.getElementById("o").innerHTML = "English Advance";  
      }  
      else if (s5.checked == true && s6.checked == true){  
        return document.getElementById("error").innerHTML = "Please mark only one checkbox either Urdu Non Mother Tongue or History and Culture of Pakistan";  
      }  
      else if (s5.checked == true){  
        var yyy = document.getElementById("s5").value;  
        return document.getElementById("p").innerHTML = "Urdu Non Mother Tongue";   
      }   
      else if (s6.checked == true){  
        var nnn = document.getElementById("s6").value;  
        return document.getElementById("p").innerHTML = "History and Culture of Pakistan";  
      }  
    else {  
      return document.getElementById("error").innerHTML = "*Please mark any of checkbox";  
    }  
  }  
