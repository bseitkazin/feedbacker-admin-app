export class JwtResponse {
  token: string;
  type: string;
  username: string;
  roles: string[];

  constructor(token: string, type: string, username: string) {
    this.token = token;
    this.type = type;
    this.username = username;
    this.roles = ['user'];
  }
}