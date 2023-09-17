

export abstract class BaseEntity {

  readonly createdAt = new Date();
  readonly updatedAt: Date | null = null;

  constructor( public readonly id: string ) {}

}
