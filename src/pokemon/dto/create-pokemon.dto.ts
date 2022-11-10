import { IsString, IsNotEmpty, IsNumber, IsUrl, Length } from 'class-validator';
import { Unique } from 'typeorm';

export class CreatePokemonDto {
    @IsString()
    @IsNotEmpty()
    @Length(2)
    name: string;
    
    @IsNumber()
    @IsNotEmpty()
    numberPoke: number;

    @IsUrl()
    @IsNotEmpty()
    urlImg: string;
}
