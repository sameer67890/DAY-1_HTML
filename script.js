document.getElementById("eventForm").addEventListener("submit", function(e){

    e.preventDefault();

    let event = document.getElementById("event").value;

    let location = "";
    let time = "";

    if(event === "Coding Competition"){
        location = "Computer Lab";
        time = "10:00 AM";
    }

    else if(event === "Hackathon"){
        location = "Seminar Hall";
        time = "11:00 AM";
    }

    else if(event === "Robotics"){
        location = "Innovation Lab";
        time = "12:00 PM";
    }

    else if(event === "Quiz Contest"){
        location = "Auditorium";
        time = "2:00 PM";
    }

    else if(event === "Gaming Tournament"){
        location = "Activity Center";
        time = "3:00 PM";
    }

    document.getElementById("result").innerHTML =
    "<h2>Registration Successful</h2>" +
    "<p>Event: " + event + "</p>" +
    "<p>Location: " + location + "</p>" +
    "<p>Time: " + time + "</p>";

});