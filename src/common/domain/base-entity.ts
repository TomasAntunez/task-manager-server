

export abstract class BaseEntity {
  id: string = '';
  createdAt = new Date();
  updatedAt: Date | null = null;
}
