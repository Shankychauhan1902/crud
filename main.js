document.addEventListener("DOMContentLoaded", function() {
    // Simulate a changing news/event on the homepage every few seconds
    const newsCarousel = document.getElementById('carousel');
    const newsEvents = [
        "Upcoming event: Annual Fest - 2023",
        "IMS Noida ranked #5 in the region!",
        "Alumni Meet scheduled for December",
        "Admission forms for 2023 now available!"
    ];
    
    let currentNewsIndex = 0;
    
    function updateCarouselNews() {
        newsCarousel.textContent = newsEvents[currentNewsIndex];
        currentNewsIndex = (currentNewsIndex + 1) % newsEvents.length; // Loop back to start after reaching the end
    }

    // Initial display
    updateCarouselNews();

    // Update the carousel every 5 seconds
    setInterval(updateCarouselNews, 5000);
});
