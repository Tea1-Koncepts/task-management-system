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
import { CreateUserDto } from './create_user.dto';
import { UsersService } from './users.service';

@ApiTags('user-manager')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() creatUserDto: CreateUserDto) {
    return this.userService.create(creatUserDto);
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.read(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
