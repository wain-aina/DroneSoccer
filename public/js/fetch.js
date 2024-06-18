$(document).ready(function() {

    // SUBSCRIBER
    let subEmail = $('#newsletter1');

    // STUDENT
    let fname = $('#fname');
    let lname = $('#lname');
    let phone = $('#phone');
    let email = $('#email');
    let school = $('#school');
    let age = $('#age');

    // STEM
    let stemfname = $('#stemfname');
    let stemlname = $('#stemlname');
    let stemphone = $('#stemphone');
    let stememail = $('#stememail');
    let stemschool = $('#stemschool');
    let service = $('#service-option');

    $('#subForm').submit(async function(event) {
        event.preventDefault();

        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: subEmail.val()
                }),
            });

            if (response.ok) {
                const newItem = await response.json();
                $("<h5 class='save-message'>" + newItem.message + "</h5>")
                    .appendTo('.modal-body')
            } else{
                console.error('Error, something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    });

    $('#soccerForm').submit(async function(event) {

        try {
            const response = await fetch('/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fname: fname.val(),
                    lname: lname.val(),
                    phone: phone.val(),
                    school: school.val(),
                    email: email.val(),
                    age: age.val(),
                }),
            });

            if (response.ok) {
                const newItem = await response.json();
                $("<h5 class='save-message'>" + newItem.message + "</h5>")
                    .appendTo('.modal-body')
            } else{
                console.error('Error, something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    });

    $('#stemForm').submit(async function(event) {

        try {
            const response = await fetch('/stem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fname: stemfname.val(),
                    lname: stemlname.val(),
                    phone: stemphone.val(),
                    school: stemschool.val(),
                    email: stememail.val(),
                    service: service.val(),
                }),
            });

            if (response.ok) {
                const newItem = await response.json();
                $("<h5 class='save-message'>" + newItem.message + "</h5>")
                    .appendTo('.modal-body')
            } else{
                console.error('Error, something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    });

})