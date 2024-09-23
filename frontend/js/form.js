const form = document.querySelector('.addParticipant');

const event_id = new URLSearchParams(window.location.search).get('event_id');

function addParticipant(participant) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(participant),
    }
   
    return fetch(`https://eventsregistrationbackend.onrender.com/${event_id}`, options)
            .then((res) => res.json())
            .catch((err) => console.log(err));
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const full_name = form.full_name.value.trim();
    const email = form.email.value.trim();
    const date_of_birth = form.date_of_birth.value;
    const hear_about = form.hear_about.value;

    addParticipant({ full_name, email, date_of_birth, hear_about })
        .then((res) => alert('Your registration was successful!'))
        .catch((err) => console.log(err));

    event.target.reset();
}