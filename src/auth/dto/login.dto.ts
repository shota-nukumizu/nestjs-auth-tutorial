// src/auth/dto/login.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
      @ApiProperty({
            example: 'john',
            description: 'The username of the user',
      })
      username: string;

      @ApiProperty({
            example: 'changeme',
            description: 'The password of the user',
      })
      password: string;
}
