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
