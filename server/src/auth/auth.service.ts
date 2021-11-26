import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) { }

    async signIn(signInDto): Promise<void> {
        const { email } = signInDto
        const user = await this.userRepository.findOne({ username: email })
        if (user) {
            console.log('user found')
        }
        else {
            throw new UnauthorizedException('Please check your login credentials')
        }
    }

    async signUp(signUpDto): Promise<void> {
        return this.userRepository.createUser(signUpDto)
    }
}