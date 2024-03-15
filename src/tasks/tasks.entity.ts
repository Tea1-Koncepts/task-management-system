import { title } from 'process';
import { User } from 'src/users/entities/user/user';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;
  //user: any;

  //this to be on task.entity

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
