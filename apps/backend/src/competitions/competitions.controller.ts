import { Controller, Post, Body, Request, UseGuards, Param, Headers } from "@nestjs/common";
import { CompetitionsServices } from "./competitions.service";
import { CreateCompetitionDTO } from "./competitionsDto/createCompetitions.dto";
import { Roles } from "src/auth/roles.decorator";
import { RolesGuard } from "src/auth/roles.guard";

@Controller('competitions')
@UseGuards(RolesGuard)
export class CompetitionsController {
    constructor(private readonly competitionServices: CompetitionsServices) {};

    @Post()
    @Roles('organizer')
    async createCompetition(@Body() createCompetitionDto: CreateCompetitionDTO, @Request() req) {
        return this.competitionServices.createCompetitions(createCompetitionDto);
    }

    @Post(':id/register')
    // @Roles('participant')
    async register(@Request() req, @Body() Body, @Param('id') competitionId: string, @Headers('idempotency-key') idempotencyKey: string) {
        console.log(`CompetitionId is : ${competitionId}`)
        return this.competitionServices.registerForCompetition(idempotencyKey  ,competitionId , req.userId);
    }
};