document.addEventListener('DOMContentLoaded', async () => {
  const eventsContainer = document.getElementById('events');

  // Fetch events from your backend (adjust the URL to your actual endpoint)
  try {
    const response = await fetch('/api/events');
    const events = await response.json();

    // Clear the container first
    eventsContainer.innerHTML = '';

    // Render each event in the grid
    events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      eventElement.innerHTML = `
        <h2>${event.title}</h2>
        <p>${event.description}</p>
        <a href="register.html?eventId=${event._id}">Register</a>
        <a href="#">View</a>
      `;
      eventsContainer.appendChild(eventElement);
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    eventsContainer.innerHTML = '<p>Failed to load events. Please try again later.</p>';
  }
});
