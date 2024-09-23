document.getElementById('registrationForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Get the form data
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const dateOfBirth = document.getElementById('dateOfBirth').value;
  const heardFrom = document.querySelector('input[name="heardFrom"]:checked').value;

  // Get the event ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('eventId');

  // Create a registration object to send to the backend
  const registrationData = {
    eventId: eventId,
    fullName: fullName,
    email: email,
    dateOfBirth: dateOfBirth,
    heardFrom: heardFrom,
  };

  try {
    // Send a POST request to the backend API to save the registration
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    });

    if (response.ok) {
      alert('Registration successful!');
      // Optionally redirect the user to another page
      window.location.href = '/thank-you.html';
    } else {
      const errorData = await response.json();
      alert('Registration failed: ' + errorData.message);
    }
  } catch (error) {
    console.error('Error submitting registration:', error);
    alert('An error occurred. Please try again later.');
  }
});
