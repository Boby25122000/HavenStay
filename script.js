document.getElementById('search-btn').addEventListener('click', function() {
    var cityName = document.getElementById('city-search').value.trim().toLowerCase(); // Get search query and convert to lowercase
    var cityLinks = document.querySelectorAll('.city-link'); // Get all city links

    var found = false;

    // Loop through all city links to find a match
    cityLinks.forEach(function(link) {
        var city = link.getAttribute('data-city').toLowerCase(); // Get city name from data-city attribute

        if (city === cityName) {
            // If match found, redirect to the corresponding city page
            window.location.href = link.getAttribute('href');
            found = true;
        }
    });

    // If no match found, display a message
    if (!found) {
        alert('City not found. Please try again.');
    }
});