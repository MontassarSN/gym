window.onscroll = function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
document.addEventListener("DOMContentLoaded", function() {
    // Define the initial class schedule data
    const classSchedule = [
        { classType: "Fitness", classTime: "9:00am - 10:00am", classTrainer: "David Villa" },
        { classType: "Body Building", classTime: "10:00pm - 11:00pm", classTrainer: "John Weights" },
        { classType: "Cycling", classTime: "4:00pm - 5:00pm", classTrainer: "Junifor Jonas" },
        { classType: "Cycling", classTime: "6:00pm - 7:00pm", classTrainer: "Robert Louis" },
        { classType: "Yoga", classTime: "7:00am - 8:00am", classTrainer: "Samantha Smith" },
        { classType: "Yoga", classTime: "11:00am - 12:00pm", classTrainer: "Emily Evans" },
        { classType: "Yoga", classTime: "6:00pm - 7:00pm", classTrainer: "Maria Martinez" },
        { classType: "Fitness", classTime: "8:00am - 9:00am", classTrainer: "Alex Anderson" },
        { classType: "Boxing", classTime: "5:00pm - 6:00pm", classTrainer: "Mike Tyson" }
    ];

    // Function to populate the class schedule table based on filter criteria
    function populateScheduleTable(filterOptions) {
        const filteredSchedule = classSchedule.filter(item => {
            return (!filterOptions.classType || item.classType === filterOptions.classType) &&
                   (!filterOptions.classTime || item.classTime === filterOptions.classTime) &&
                   (!filterOptions.classTrainer || item.classTrainer === filterOptions.classTrainer);
        });

        const scheduleTableBody = document.querySelector(".scheduleTable tbody");
        scheduleTableBody.innerHTML = "";

        filteredSchedule.forEach(item => {
            const row = document.createElement("tr");
            
            const cell1 = document.createElement("td");
            cell1.textContent = item.classType;
            
            const cell2 = document.createElement("td");
            cell2.textContent = item.classTime;
            
            const cell3 = document.createElement("td");
            cell3.textContent = item.classTrainer;
            
            const cell4 = document.createElement("td");
            const link = document.createElement("a");
            link.setAttribute("href", "contact.html");
            link.setAttribute("class", "link-without-underline");
        
            const button = document.createElement("button");
            button.innerHTML = "Join";
            button.setAttribute("class", "button-join");
            button.classList.add("join");
            link.appendChild(button);
            cell4.appendChild(link);

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);

            scheduleTableBody.appendChild(row);
        });
    }

    // Function to handle filter option changes
    function handleFilterChange() {
        const classType = document.getElementById("classType").value;
        const classTime = document.getElementById("classTime").value;
        const classTrainer = document.getElementById("classTrainer").value;

        const filterOptions = {
            classType: classType,
            classTime: classTime,
            classTrainer: classTrainer
        };

        populateScheduleTable(filterOptions);
    }

    // Add event listeners to filter options
    document.getElementById("classType").addEventListener("change", handleFilterChange);
    document.getElementById("classTime").addEventListener("change", handleFilterChange);
    document.getElementById("classTrainer").addEventListener("change", handleFilterChange);

    // Initially populate the class schedule table
    populateScheduleTable({});
});
function calculateBMI() {
    var resultbmi = document.getElementById("resultbmi");
    var resultstatus = document.getElementById("resultstatus");
    
    resultbmi.innerHTML = "";
    resultstatus.innerHTML = "";
    
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(weight) || isNaN(height) || weight === "" || height === "") {
        alert("Please fill in all fields.");
        return false;
    }
    
    var bmi = weight / ((height / 100) * (height / 100));

    resultbmi.innerHTML = bmi.toFixed(2);
    
    if (bmi < 18.5) {
        resultstatus.innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        resultstatus.innerHTML = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        resultstatus.innerHTML = "Overweight";
    } else {
        resultstatus.innerHTML = "Obesity";
    }
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display="block";  // Display the modal
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";   // Hide the modal
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";  // Hide the modal if clicked outside
  }
};

// Show/hide subscription options based on selected subscription type
document.getElementById('normalSubscription').addEventListener('change', function() {
  document.getElementById('subscriptionOptions').style.display = this.checked ? 'block' : 'none';
});
document.getElementById('packSubscription').addEventListener('change', function() {
  document.getElementById('subscriptionOptions').style.display = this.checked ? 'block' : 'none';
});
