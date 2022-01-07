import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movie.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
