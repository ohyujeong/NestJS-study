import {Inject, Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService,
        @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService){}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get(':id')
    getOne(@Param("id") movieId: number ): Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData:CreateMovieDto) {
        this.logger.log('log: ' + JSON.stringify(movieData));
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param("id") movieId: number, @Body() updateData:UpdateMovieDto){
        return this.moviesService.update(movieId, updateData);
    }
}
