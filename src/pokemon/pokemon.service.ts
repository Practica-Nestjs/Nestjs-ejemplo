import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { Pokemon } from '../pokemon/entities/pokemon.entity';


@Injectable()
export class PokemonService {

  constructor(@InjectRepository(Pokemon) private pokemonReposoty: Repository<Pokemon>) { }

  async create(createPokemonDto: CreatePokemonDto) {
    try {
      const newPokemon = { id: uuid(), ...createPokemonDto }
      return await this.pokemonReposoty.save(newPokemon);
    } catch (error) {
      throw new InternalServerErrorException(`No se pudo crear el pokemon - Revise si ya ha estado creado`)
    }
  }

  findAll() {
    return this.pokemonReposoty.find();
  }

  async findOne(id: string) {
    let pokemon: Pokemon;
    pokemon = await this.pokemonReposoty.findOneBy({ id: id });
    if (!pokemon) {
      throw new NotFoundException(`El pokemon con Id ${id} no existe en la base de datos`)
    }
    return pokemon;
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    try {
      const pokemon = await this.findOne(id);
      this.pokemonReposoty.merge(pokemon, updatePokemonDto);
      return this.pokemonReposoty.save(pokemon);
    } catch (error) {
      throw new  NotFoundException(`El pokemon con Id ${id} no existe en la base de datos`)
    }
  }

  async remove(id: string) {
    const pokemon = await this.findOne(id);
    if(!pokemon){
      throw new NotFoundException(`El pokemon con Id ${id} no existe en la base de datos`);
    }
    this.pokemonReposoty.delete(id)
    return pokemon;
  }
}
