import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('data') { name, email }: CreateUserInput,
  ): Promise<User> {
    return this.userService.createUser({ name, email });
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput,
  ): Promise<User> {
    return this.userService.updateUser(id, data);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}
