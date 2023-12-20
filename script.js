// Add an event listener to the "Create room" button
document.getElementById("chooseCreateConfirm").addEventListener("click", function() {
    // Show the "popup" container
    document.getElementById("popup").style.display = "block";
});

// Add an event listener to the "Cancel" button inside the popup
document.getElementById("cancelPopup").addEventListener("click", function() {
    // Hide the "popup" container
    document.getElementById("popup").style.display = "none";
});



// Add an event listener to the "Let's Go" button
document.getElementById("letsGoButton").addEventListener("click", function() {
    // Show/hide the "popup" container
    document.getElementById("popup").style.display = "block";
});


// Add other necessary functionality...
