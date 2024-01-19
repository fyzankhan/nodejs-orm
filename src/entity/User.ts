import { IsNotEmpty, Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  @Length(4, 100)
  public username!: string;

  @Column()
  @Length(4, 100)
  public email!: string;

  @Column()
  @Length(4, 100)
  public password!: string;

  @Column()
  @IsNotEmpty()
  public role!: string;

  @Column()
  @CreateDateColumn()
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt!: Date;
}
