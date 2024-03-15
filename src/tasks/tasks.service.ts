import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/create_user.dto';
import { User } from 'src/users/entities/user/user';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './create_tasks.dto';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService {
  // //   update(id: number, updateTaskDto: CreateTaskDto) {
  // //     //  throw new Error('Method not implemented.');
  // //   }
  // //   delete(id: number) {
  // //     //  throw new Error('Method not implemented.');
  //   }
  constructor(
    @InjectRepository(Tasks) private readonly taskRepository: Repository<Tasks>,
  ) {}
  async create(myTask: CreateTaskDto) {
    const { title, description, status } = myTask;
    const newTask = this.taskRepository.create({
      title,
      description,
      status,
    });
    const savedTask = await this.taskRepository.save(newTask);
    return savedTask;
  }

  async read(id: number) {
    const taskFromDb = await this.taskRepository.findOne({
      where: { id: id },
    });
    return taskFromDb;
  }

  async update(id: number, myTask: CreateTaskDto) {
    const read = await this.read(id);
    read.title = myTask.title;
    read.description = myTask.description;
    read.status = myTask.status;
    return await this.taskRepository.save(read);
  }

  async delete(id: number) {
    const deleteTask = await this.taskRepository.delete(id);
    return deleteTask;
  }
}
