// src/catperson/catmeow.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catmeow')
export class Catmeow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(
    { type: 'varchar', length: 255, nullable: true }
)
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  bread: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  details: string;
}
