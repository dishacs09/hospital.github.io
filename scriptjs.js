function submitForm() {
    // Get values from the form
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var govtId = document.getElementById('govtId').value;
    var symptoms = document.getElementById('symptoms').value;
    var history = document.getElementById('history').value;

    // Display collected information (you can replace this with your desired functionality)
    alert('Patient Information:\nName: ' + name + '\nAge: ' + age + '\nGovernment ID: ' + govtId +
          '\nSymptoms: ' + symptoms + '\nPrevious History: ' + history);

    // You can add logic here to send the data to a server or perform other actions
}

function submitForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    // Perform additional validation if needed

    // Display a confirmation message (in this example, we're using an alert)
    alert("Appointment booked successfully!\n\nDetails:\nName: " + fullName + "\nEmail: " + email + "\nPhone: " + phone + "\nDate: " + date + "\nTime: " + time);

    // You can also redirect the user to another page after successful booking
    // window.location.href = "confirmation.html";
}
