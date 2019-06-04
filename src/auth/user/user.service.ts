import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
        where: {
            email: email,
        }
    });
  }
  async findByEmailAndPassword(email: string, password: string): Promise<User> {
    console.log(crypto.createHmac('sha256', password).digest('hex'));
    return await this.userRepository.findOne({
      where: {
          email: email,
          password: crypto.createHmac('sha256', password).digest('hex')
      }
  });
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({
        where: {
            id: id,
        }
    });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
