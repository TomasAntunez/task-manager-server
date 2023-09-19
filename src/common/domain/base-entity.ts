

interface BaseEntityProps {
  id        : string;
  createdAt : Date;
  updatedAt : Date | null;
}


export abstract class BaseEntity {

  readonly id        : string;
  readonly createdAt : Date;

  updatedAt: Date | null;


  constructor({ id, createdAt, updatedAt }: BaseEntityProps) {
    this.id        = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

}
