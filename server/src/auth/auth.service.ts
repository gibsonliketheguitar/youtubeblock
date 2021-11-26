import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';

import { JwtPayload } from "./dto/jwt-payload-interface";
import { UserRepository } from "./user.repository";
import { AuthCredentialDto } from "./dto/auth-credential.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ) { }

    async signIn(authCredDto: AuthCredentialDto): Promise<{ accessToken: string }> {
        const { email } = authCredDto
        const user = await this.userRepository.findOne({ username: email })
        if (user) {
            const payload: JwtPayload = { username: email }
            return { accessToken: await this.jwtService.sign(payload) }
        }
        else {
            throw new UnauthorizedException('Please check your login credentials')
        }
    }

    async signUp(authCredDto: AuthCredentialDto): Promise<{ accessToken: string }> {
        const payload = this.userRepository.createUser(authCredDto)
        return { accessToken: await this.jwtService.sign(payload) }
    }
}