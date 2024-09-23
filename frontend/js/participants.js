const CARDS = document.querySelector('.participants-list');

const event_id = new URLSearchParams(window.location.search).get('event_id');

async function getParticipants() {
    try {
        const response = await fetch(`https://eventsregistrationbackend.onrender.com/${event_id}/participants`);
        const data = await response.json();

        if (data.data.length === 0) {
           return CARDS.innerHTML = `<h3>Unfortunately, there are currently no registered participants...</h3>`;
        } else {
            return data.data;
        };
    } catch (error) {
        console.log(error);
    }
};

let participantsList = [];

function markUpParticipants() {
    getParticipants()
        .then((participants) => {
            CARDS.innerHTML = null;

            const result = participants.map((participant) =>
                `<li class="participants-item">
                    <h3>${participant.full_name}</h3>
                    <p>${participant.email}</p>
                </li>`)
                .join('');
            
            return CARDS.insertAdjacentHTML('afterbegin', result);
        })
        .catch((error) => {
            CARDS.innerHTML = `<h3>Unfortunately, there are currently no registered participants...</h3>`;
        });
};

markUpParticipants();
 
