import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'name cannot be empty' })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'email cannot be empty' })
  @IsOptional()
  email?: string;
}
