import { Body, Controller, Get, HttpCode, Post, UseGuards, Req } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { AuthCredentialDto } from './dto/auth-credential.dto'

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }

    @Post('/signin')
    @HttpCode(200)
    signIn(@Body() authCredDto: AuthCredentialDto): Promise<{ accessToken: string }> {
        return this.authService.signIn(authCredDto)
    }

    @Post('/signup')
    @HttpCode(201)
    signUp(@Body() authCredDto: AuthCredentialDto): Promise<void> {
        return this.authService.signUp(authCredDto)
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req,) {
        console.log(req)
    }
}