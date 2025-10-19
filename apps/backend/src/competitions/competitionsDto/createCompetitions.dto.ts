import { IsString, IsNotEmpty, IsOptional, IsArray, IsNumber, IsDate} from 'class-validator'
import { Type } from 'class-transformer';
 
export class CreateCompetitionDTO {    
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    readonly tags: string[];

    @IsNumber()
    @IsNotEmpty()
    readonly capacity: number;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    readonly regDeadline: Date;
};