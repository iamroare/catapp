// src/catperson/catperson.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatpersonController } from './catperson.controller';
import { CatpersonService } from './catperson.service';
import { Catmeow } from "./catEntity/catEntity" // Import the entity

@Module({
  imports: [
    TypeOrmModule.forFeature([Catmeow]), // Register the entity
  ],
  controllers: [CatpersonController],
  providers: [CatpersonService],
})
export class CatpersonModule {}
