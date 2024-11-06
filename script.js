
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form1');
    const nextButton = document.querySelector('.next-button');

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const selectedOption = form.querySelector('input[name="frequency"]:checked');

        if (!selectedOption) {
            alert("Please select an answer before proceeding.");
        } else {
            window.location.href = "test2.html"; // Redirect to the next page if validated
        }
    });

    
});
