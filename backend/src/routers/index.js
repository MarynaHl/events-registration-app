import { Router } from 'express';
import { getAllEventsController, getEventByIdController } from '../controllers/events.js';
import { createParticipantController, getParticipantsController } from '../controllers/participants.js';

const router = Router();

router.get('/', getAllEventsController);
router.get('/:event_id', getEventByIdController);
router.post('/:event_id/', createParticipantController);
router.get('/:event_id/participants', getParticipantsController);


export default router;
