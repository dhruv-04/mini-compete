import { ConflictException, HttpStatus } from "@nestjs/common";

export class CompetitionsServices {
    async createCompetitions(competition: {}) {
        //push the info into the database

        return { competitionID: 1 }; //this will be based on how the ID would be generated and returned
    }

    async registerForCompetition(email: string, idempotencyKey: string, competitionId: number) {
        //mocking idempotency verification
        if(idempotencyKey === 'aksjfhkjsfhs') throw new ConflictException('Request Already Exists.');

        //if the key doesn't exist
        //push it into redis queue
        console.log('Registering for competition id ', competitionId, 'for user ', email);
        return {
            message: 'Registration Successful!',
            statusCode: 201
        }
    }
};