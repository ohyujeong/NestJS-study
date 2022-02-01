import { Module } from '@nestjs/common';
import { MoviesController } from './movie.controller';
import { MoviesService } from './movies.service';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';


@Module({
  imports: [
    WinstonModule.forRoot({
      transports:[
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms()
          )
        })
      ]
    })
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
