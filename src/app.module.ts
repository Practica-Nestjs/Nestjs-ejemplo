import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

import { EnvConfiguration, JoiValidationSchema } from './config';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    DatabaseModule,
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
