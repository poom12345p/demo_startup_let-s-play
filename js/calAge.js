     var dateInput = document.querySelector('#dob');
     var ageInput = document.querySelector('#age');
     dateInput.addEventListener('change',calAge);
     function calAge(){
        var curDate = new Date();
        var  birth_date = new Date(dateInput.value);
        var age = (curDate - birth_date)/(1000*60*60*24*365);
        ageInput.value=Math.floor(age);
        console.log(age);
     }