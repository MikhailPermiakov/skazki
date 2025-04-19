import { Injectable } from '@nestjs/common';

export interface UserAuthType {
  userId: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: UserAuthType[] = [
    {
      userId: 1,
      username: 'mp9512056251@gmail.com',
      password: 'mp03021982',
    },
  ];

  async findOne(username: string): Promise<UserAuthType | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
