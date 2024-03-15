import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './create_tasks.dto';
import { TasksService } from './tasks.service';

@ApiTags('user-manager')
@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get(':id')
  getTask(@Param('id') id: number) {
    return this.taskService.read(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() updateTaskDto: CreateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.delete(id);
  }
}
