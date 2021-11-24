import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(signInDto): Promise<void> {
        const { name, email } = signInDto
        const password: any = email + await randomBytes(32).toString('hex')
        const hashPassword = await argon2.hash(password);
        const user = this.create({ name, username: email, password: hashPassword });

        try {
            await this.save(user);
        } catch (error) {
            if (error.code === '23505') throw new ConflictException('Username already exist')
            else throw new InternalServerErrorException();
        }
    }
}