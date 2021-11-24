import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthCredentialDto } from './dto/auth-credential.dto'

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }

    @Post('/signin')
    @HttpCode(200)
    signIn(@Body() authCredDto: AuthCredentialDto) {
        return this.authService.signIn(authCredDto)
    }

    @Post('/signup')
    @HttpCode(201)
    signUp(@Body() authCredDto: AuthCredentialDto) {
        return this.authService.signUp(authCredDto)
    }
}