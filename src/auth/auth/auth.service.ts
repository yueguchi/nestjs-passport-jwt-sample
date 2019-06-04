import { Injectable } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { UserService } from  '../user/user.service';
import { User } from  '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }
  private async validate(userData: User): Promise<User> {
    return await this.userService.findByEmailAndPassword(userData.email, userData.password);
  }

  public async getUserByEmail(user: User): Promise< any | { status: number }>{
    const userData = await this.userService.findByEmail(user.email);
    if(!userData){
      return { status: 404 }; // TODO 201で404返してるのでNG。
    }
    return userData;
  }

  public async login(user: User): Promise< any | { status: number }>{
    const userData = await this.validate(user);
    if(!userData){
        return { status: 404 }; // TODO 201で404返してるのでNG。
    }
    let payload = `${userData.name}${userData.id}`;
    const accessToken = this.jwtService.sign(payload);

    return {
      expires_in: 3600,
      access_token: accessToken,
      user_id: payload,
      status: 200
    };
  }

  public async register(user: User): Promise<any>{
    return this.userService.create(user)
  }
}
