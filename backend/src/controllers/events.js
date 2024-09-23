import { getAllEvents, getEventById } from '../services/events.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getAllEventsController = async (req, res) => {
    const { page, perPage } = parsePaginationParams(req.query);
    const events = await getAllEvents({
        page,
        perPage,
    });

    res.status(200).json({
        status: 200,
        message: 'Successfully found events!',
        data: events,
    });
};

export const getEventByIdController = async (req, res) => {
    const { event_id } = req.params;
    const event = await getEventById(event_id);

    if (event !== null) {
        res.status(200).json({
            status: 200,
            message: `Successfully found event with id ${event_id}!`,
            data: event,
        });
    } else {
        res.status(404).json({
            status: 404,
            message: 'Non found',
        });
    };
};
