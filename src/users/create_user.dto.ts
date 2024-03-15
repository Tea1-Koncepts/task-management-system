import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly userName: string;
  @ApiProperty()
  readonly password: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly fullname: string;
}
