import { INITIAL_MENTORS } from '../data/staticData';

export const MentorService = {
  async getAllMentors() {
    return INITIAL_MENTORS.filter(m => m.active);
  }
};
