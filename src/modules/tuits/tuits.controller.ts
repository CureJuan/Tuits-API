import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDto, PaginationQueryDto, UpdateTuitDto } from './dto';

@Controller('tuits')
export class TuitsController {
constructor(private readonly tuitService: TuitsService) {

}

    @Get()
    getTuits(@Query() pagination: PaginationQueryDto): Promise<Tuit[]> {
        return this.tuitService.getTuits(pagination);
    }

    @Get(':id')
    getTuit(@Param('id') id: number): Promise<Tuit> {
        return this.tuitService.getTuit(id);
    }
    
    @Post()
    createTuit(@Body() message: CreateTuitDto): Promise<Tuit> {
        console.log(message instanceof CreateTuitDto);
        return this.tuitService.createTuit(message);
    }

    @Patch(':id')
    updateTuit(
        @Param('id') id: number, @Body() tuit: UpdateTuitDto,
        ): Promise<Tuit> {
        return this.tuitService.updateTuit(id, tuit);
    }

    @Delete(':id')
    deleteTuit(@Param('id') id: number): Promise<void> {
        return this.tuitService.removeTuit(id);
    }
}
