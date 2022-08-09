import { IsEmail, IsNotEmpty, IsString, IsArray } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  username: string;

  @IsString()
  name: string;

  @IsNotEmpty()
  password: string;

  @IsArray()
  roles: string[];
}
