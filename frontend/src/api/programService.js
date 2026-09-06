import { INITIAL_PROGRAMS } from '../data/coursesData';

export const ProgramService = {
  async getAllPrograms(category = '') {
    if (!category) {
      return INITIAL_PROGRAMS;
    }
    return INITIAL_PROGRAMS.filter(p => p.category === category);
  },

  async getProgramByCode(code) {
    const program = INITIAL_PROGRAMS.find(p => p.code.toLowerCase() === (code || '').toLowerCase());
    if (!program) {
      throw new Error(`Program not found with code: ${code}`);
    }
    return program;
  }
};
