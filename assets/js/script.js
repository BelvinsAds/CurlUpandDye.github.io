function Form() {
    var field1 = $('#EmailJoin').val();

    $.ajax({
        url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScfLUo7t4bLzLTXIBQ1HWJG0r4e2ECmeO4CwbMQKmhwQk91qQ/formResponse',
        data: {
            "entry.961844838": field1,
        },
        type: 'POST',
        dataType: 'xml',
        success: function (data) {
            $('#news').trigger('reset');
            alert("Curl Up & Dye: Thank you for joining us!");
        },
        error: function (data) {
            $('#news').trigger('reset');
            alert("Curl Up & Dye: Thank you for joining us!");
        }
    });
       return false; 
}

function Appt() {
    var field1 = $('#Guest_Name').val();
    var field2 = $('#Guest_Email').val();
    var field3 = $('#GuestNum').val();
    var field4 = $('#DateInput').val();
    var field5 = $('#TimeInput').val();
    var field6 = $('#Service').val();

    $.ajax({
        url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScPfPKXcd-f_iK7-DzYU2YPjltnNL-0OLd2gtdAcc7nI6AiRA/formResponse',
        data: {
            "entry.822448057": field1,
            "entry.923983490": field2,
            "entry.449959993": field3,
            "entry.550775890": field4,
            "entry.1326889776": field5,
            "entry.1659699783": field6,
        },
        type: 'POST',
        dataType: 'xml',
        success: function (data) {
            $('#apt').trigger('reset');
            
            alert("Curl Up & Dye: Your Appointment has been received! Please check you email for further confirmation.");
        },
        error: function (data) {
            $('#apt').trigger('reset');
            
            alert("Curl Up & Dye: Your Appointment has been received! Please check you email for further confirmation.");
        }
    });
    return false;
}

var timeset = document.getElementById("DateInput");

   timeset.addEventListener('input', function() {
        const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
       var id = document.getElementById("timedate").value;
       console.log(id);
       const d = new Date(id);
       let day = d.getDay();
       console.log(day);
        let dateweek = weekday[day]
        console.log(dateweek)
        if(dateweek === "Sunday") {
        var time
        time = `
            <h6 class="title text-capitalize">
            Type Preferred Time </h6>
            <input type="time" data-name="Time" name="entry.1326889776" id="TimeInput" min="09:00" max="14:00" placeholder="" required>
        `;
        let timeshow = document.getElementById("time")
        timeshow.innerHTML = time
    } else if(dateweek === "Monday") {
        var time
        time = `
            <h6 class="title text-capitalize">
            Type Preferred Time </h6>
            <input type="time" data-name="Time" name="entry.1326889776" id="TimeInput" min="10:00" max="17:00" placeholder="" required>
        `;
        let timeshow = document.getElementById("time")
        timeshow.innerHTML = time
    } else if(dateweek === "Tuesday") {
        alert("Curl Up and Dye:  Sorry We Are Closed On Tuesday! For help please refer to our hours")
    } else if(dateweek === "Wednesday") {
        var time
        time = `
            <h6 class="title text-capitalize">
            Type Preferred Time </h6>
            <input type="time" data-name="Time" name="entry.1326889776" id="TimeInput" min="10:00" max="19:00" placeholder="" required>
        `;
        let timeshow = document.getElementById("time")
        timeshow.innerHTML = time
    }else if(dateweek === "Thursday") {
        var time
        time = `
            <h6 class="title text-capitalize">
            Type Preferred Time </h6>
            <input type="time" data-name="Time" name="entry.1326889776" id="TimeInput" min="10:00" max="19:00" placeholder="" required>
        `;
        let timeshow = document.getElementById("time")
        timeshow.innerHTML = time
    }else if(dateweek === "Friday") {
        var time
        time = `
            <h6 class="title text-capitalize">
            Type Preferred Time </h6>
            <input type="time" data-name="Time" name="entry.1326889776" id="TimeInput" min="09:00" max="18:00" placeholder="" required>
        `;
        let timeshow = document.getElementById("time")
        timeshow.innerHTML = time
    }else if(dateweek === "Saturday") {
        var time
        time = `
            <h6 class="title text-capitalize">
            Type Preferred Time </h6>
            <input type="time" data-name="Time" name="entry.1326889776" id="TimeInput" min="09:00" max="16:00" placeholder="" required>
        `;
        let timeshow = document.getElementById("time")
        timeshow.innerHTML = time
    }
})

function Contact() {
    var field1 = $('#ContName').val();
    var field2 = $('#ContEmail').val();
    var field3 = $('#ContNum').val();
    var field4 = $('#ContMes').val();
    
    $.ajax({
        url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSecHBd2ulRU1jMDb1-XpAQacWK8fNcdsZMqZqvlgEPHKyjoKA/formResponse',
        data: {
            "entry.691496798": field1,
            "entry.507385075": field2,
            "entry.1660798321": field3,
            "entry.742974634": field4,
        }, 
        type: 'POST',
        dataType: 'xml',
        success: function (data) {
            $('#contact').trigger('reset');
            alert("Curl Up & Dye: Thank you for contacting us! We will get back to you as soon as possible.");
        },
        error: function (data) {
            $('#contact').trigger('reset');
            alert("Curl Up & Dye: Thank you for contacting us! We will get back to you as soon as possible.");
        }
    });
    return false;
}
