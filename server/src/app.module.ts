import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PrimeTimeModule } from './primetime/primetime.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'], isGlobal: true }),
    TypeOrmModule.forRoot(),
    AuthModule,
    PrimeTimeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
