import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDto, UpdateTuitDto } from './dto';

@Controller('tuits')
export class TuitsController {
constructor(private readonly tuitService: TuitsService) {

}

    @Get()
    getTuits(@Query() filterQuery): Tuit[] {
        const { searchTerm, orderBy } = filterQuery;
        return this.tuitService.getTuits();
    }

    @Get(':id')
    getTuit(@Param('id') id: string): Tuit {
        return this.tuitService.getTuit(id);
    }
    
    @Post()
    createTuit(@Body() message: CreateTuitDto): void {
        console.log(message instanceof CreateTuitDto);
        return this.tuitService.createTuit(message);
    }

    @Patch(':id')
    updateTuit(
        @Param('id') id: string, @Body() tuit: UpdateTuitDto,
        ): Tuit {
        return this.tuitService.updateTuit(id, tuit);
    }

    @Delete(':id')
    deleteTuit(@Param('id') id: string): void {
        return this.tuitService.removeTuit(id);
    }
}
