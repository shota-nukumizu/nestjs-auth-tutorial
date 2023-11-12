// src/users/users.service.ts
import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
      private readonly users = [
            {
                  userId: 1,
                  username: 'john',
                  password: 'changeme',
            },
            // 他のモックユーザーを追加
      ];

      async findOne(username: string): Promise<User | undefined> {
            return this.users.find(user => user.username === username);
      }
}
