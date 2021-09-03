$(document).ready(function () {

    // Get current Date and Time
    var currentDateTime = moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm a');
    //  display todays date in header    
     $("#currentDay").text(currentDateTime);   

    // Apply color code to timeblocks to indicate whether it is in the past, present, or future
    var cal = new Date(); // init date and time
    var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock
    for (var i = 8; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }

    // Save the updated tasks in the Local Storage on the onclick event of each button
     {
        $("#btn8").click(function () {          
            var hr8 = document.getElementById('8').value;
			localStorage.setItem('text8', hr8);
        });
        $("#btn9").click(function () {          
            var hr9 = document.getElementById('9').value;
			localStorage.setItem('text9', hr9);
        });
        $("#btn10").click(function () {          
            var hr10 = document.getElementById('10').value;
			localStorage.setItem('text10', hr10);
        });
        $("#btn11").click(function () {          
            var hr11 = document.getElementById('11').value;
			localStorage.setItem('text11', hr11);
        });
        $("#btn12").click(function () {          
            var hr12 = document.getElementById('12').value;
			localStorage.setItem('text12', hr12);
        });
        $("#btn13").click(function () {          
            var hr13 = document.getElementById('13').value;
			localStorage.setItem('text13', hr13);
        });
        $("#btn14").click(function () {          
            var hr14 = document.getElementById('14').value;
			localStorage.setItem('text14', hr14);
        });
        $("#btn15").click(function () {          
            var hr15 = document.getElementById('15').value;
			localStorage.setItem('text15', hr15);
        });
        $("#btn16").click(function () {          
            var hr16 = document.getElementById('16').value;
			localStorage.setItem('text16', hr16);
        });
        $("#btn17").click(function () {          
            var hr17 = document.getElementById('17').value;
			localStorage.setItem('text17', hr17);
        });
     }

     // Display the saved tasks
     for (let i = 8; i <= 17; i++) {
        var saved = localStorage.getItem(`text${i}`);
        document.getElementById(`${i}`).value = saved;        
     }
});