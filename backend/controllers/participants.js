import { createParticipant, getParticipants } from '../services/participants.js';

export const createParticipantController = async (req, res) => {
  const { event_id } = req.params;
  const participantData = {
    ...req.body,
    event_id,
  };

  const participant = await createParticipant(participantData);

  res.status(201).json({
    status: 201,
    message: `Successfully created a participant!`,
    data: {
      event_id: participant.event_id,
      full_name: participant.full_name,
      email: participant.email,
      date_of_birth: participant.date_of_birth,
      hear_about: participant.hear_about,
    },
  });
};

export const getParticipantsController = async (req, res) => {
    const { event_id } = req.params;
    const events = await getParticipants(event_id);

  if (events !== null) {
    res.status(200).json({
      status: 200,
      message: `Successfully found all participants for event with id ${event_id}!`,
      data: events,
    });
  } else {
    res.status(404).json({
      status: 404,
      message: 'Non found',
    });
  };
};
