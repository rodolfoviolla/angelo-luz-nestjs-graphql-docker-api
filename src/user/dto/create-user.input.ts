import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'name cannot be empty' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'email cannot be empty' })
  email: string;
}
