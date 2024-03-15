import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create_user.dto';
import { User } from './entities/user/user';

@Injectable()
export class UsersService {
  // update(id: number, updateUserDto: CreateUserDto) {
  //   throw new Error('Method not implemented.');
  // }
  // delete(id: number) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(myName: CreateUserDto) {
    const { userName, password, email, fullname } = myName;
    const newUser = this.userRepository.create({
      userName,
      password,
      email,
      fullname,
    });
    const savedUser = await this.userRepository.save(newUser);
    return savedUser;
  }

  async read(id: number) {
    const userFromDb = await this.userRepository.findOne({
      where: { id: id },
    });
    return userFromDb;
  }

  async update(id: number, myName: CreateUserDto) {
    const read = await this.read(id);
    read.email = myName.email;
    read.password = myName.password;
    read.userName = myName.userName;
    read.fullname = myName.fullname;
    return await this.userRepository.save(read);
  }

  async delete(id: number) {
    const deleteUser = await this.userRepository.delete(id);
    return deleteUser;
  }
}
