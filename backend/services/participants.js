import { ParticipantsCollection } from '../db/participants.js';

export const createParticipant = async ({event_id, full_name, email, date_of_birth, hear_about}) => {
  const participant = await ParticipantsCollection.create({
    event_id,
    full_name,
    email,
    date_of_birth,
    hear_about
    });
  return participant;
};

export const getParticipants = async (event_id) => {
  const participants = await ParticipantsCollection.find({event_id});
  return participants;
};
