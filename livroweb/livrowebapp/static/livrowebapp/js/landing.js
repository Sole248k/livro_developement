document.addEventListener('DOMContentLoaded', function () {
    function openPopup(url) {
        // Make an AJAX request to the specified URL
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Display the fetched HTML content in a pop-up
                document.getElementById('popup-container').innerHTML = data;
                document.getElementById('popup-container').style.display = 'flex';
            })
            .catch(error => console.error('Error fetching content:', error));
    }

    function closePopup() {
        document.getElementById('popup-container').innerHTML = '';  // Clear the content when closing
        document.getElementById('popup-container').style.display = 'none';
    }

    // Attach click events to login and signup buttons
    document.getElementById('login-button').addEventListener('click', function () {
        openPopup('/signin/');
    });

    document.getElementById('signup-button').addEventListener('click', function () {
        openPopup('/signup/');
    });
});