import { Controller, Post, Body, Request, UseGuards, Param, Headers } from "@nestjs/common";
import { CompetitionsServices } from './competitions.service'
import { CreateCompetitionDTO } from "./competitionsDto/createCompetitions.dto";
import { Roles } from "src/auth/roles.decorator";
import { RolesGuard } from "src/auth/roles.guard";

@Controller('competitions')
@UseGuards(RolesGuard)
export class CompetitionsCOntroller {
    constructor(private readonly CompetitionsServices) {};

    @Post('/')
    @Roles('organizer')
    async createCompetition(@Body() createCompetitionDto: CreateCompetitionDTO, @Request() req) {
        console.log('Organizer is : ', req.user);
        console.log('Creating competition : ', createCompetitionDto);

        return this.CompetitionsServices.createCompetitions(createCompetitionDto);
    }

    @Post(':id/register')
    @Roles('participant')
    async register(@Request() req, @Body() Body, @Param(':id') id:string, @Headers('idempotency-key') idempotencyKey: string) {
        console.log('Participant is: ', req.user);
        console.log('Registering for the competition with ID: ', id);

        return this.CompetitionsServices.registerForCompetition(req.email, idempotencyKey  ,id );
    }
};