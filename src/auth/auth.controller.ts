// src/auth/auth.controller.ts
import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
      constructor(private authService: AuthService) { }

      @ApiBody({ type: LoginDto })
      @UseGuards(LocalAuthGuard)
      @Post('login')
      async login(@Body() req) {
            return this.authService.login(req.user);
      }
}
