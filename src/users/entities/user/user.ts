//import { Tasks } from 'src/tasks/tasks.entity';
import { Tasks } from 'src/tasks/tasks.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  // OneToOne,
  // JoinColumn,
} from 'typeorm';

@Entity()
export class User {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  fullname: string;


  
  @Column()
  createdAt: Date;

  //this to be on user.entity
  @OneToMany(() => Tasks, (task) => task.user)
  task: Tasks;
}
