

export class Session {
  constructor(
    public readonly accessToken: string,
    public readonly refreshToken: string
  ) {}
}
