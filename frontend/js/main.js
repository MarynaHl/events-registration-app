const CARDS = document.querySelector('.events-list');
const PAGES = document.querySelector('.pagination-list');


let page = 1;
let eventsList = [];
let eventId;

markUpEvents(page);

async function getEvents(page) {
    try {
        const response = await fetch(`https://eventsregistrationbackend.onrender.com/?page=${page}`);
        const data = await response.json();

        return data.data;
    } catch (error) {
        console.log(error);
    }
};

function markUpEvents(page) {
    getEvents(page)
        .then((res) => {
            if (res.totalPages > 1) {
                markUpPages(res.totalPages)
            }
            eventsList = res.data;

            return eventsList;
        })
        .then((events) => {
            CARDS.innerHTML = null;

            const result = events.map((event) =>
                `<li class="events-list-item" id=${event._id}>
                    <h3>${event.title}</h3>
                    <p>${event.event_date}</p>
                    <h4>${event.organizer}</h4>
                    <p>${event.description}</p>
                    <div class="links" id=${event._id}>
                        <div class="registerLink">Register</div>
                        <div class="viewLink">View</div>
                    </div>
                </li>`)
                .join('');
            
            return CARDS.insertAdjacentHTML('afterbegin', result);
        })
        .catch((error) => {
            CARDS.innerHTML = `<h3>Not found</h3>`;
        });
};

function markUpPages(totalPages) {
    let pages = '';
    for (let i = 0; i < totalPages; i++) {
        pages = pages.concat(`<li class="pagination-item">${i+1}</li>`);
    };
    
    return PAGES.innerHTML = pages;
}

function goToPage(e) {
    eventId = e.target.parentNode.id
    if (e.target.classList.value === 'registerLink') {
        window.location.href = `/event-registration-page.html?event_id=${eventId}`; 
    } 
    else if (e.target.classList.value === 'viewLink') {
        window.location.href = `/event-participants-page.html?event_id=${eventId}`; 
    }
}

PAGES.addEventListener('click', event => {
    markUpEvents(event.target.firstChild.data);
});

CARDS.addEventListener('click', goToPage);