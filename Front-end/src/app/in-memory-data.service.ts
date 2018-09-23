import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 1, FirstName: 'David', LastName: 'Alcaraz', BirthDay: '1993-02-16', Email: 'daalcarazq@gmail.com', Password: '1234', RepeatPassword: '1234' },

    ];
    return {students};
  }
}