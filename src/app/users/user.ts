export class User {
  id!: number;
  name!: string;
  imageUrl!: string;
  personalEmail!: string;
  professionalEmail?: string;
  addedOn!: string;
  role?: string;
  department?: string;
  submitsTo?: string;
}