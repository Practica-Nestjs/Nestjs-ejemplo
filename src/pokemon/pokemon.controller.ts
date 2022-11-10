import { Controller, Get, Post, Body, Put, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';


@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.pokemonService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', new ParseUUIDPipe({ version: "4" })) id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({ version: "4" })) id: string) {
    return this.pokemonService.remove(id);
  }
}
