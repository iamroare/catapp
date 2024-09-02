import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Catmeow } from './catEntity/catEntity';
import { Repository } from 'typeorm';

@Injectable()
export class CatpersonService {
    constructor(
        @InjectRepository(Catmeow)
        private readonly catmeowRepository: Repository<Catmeow>
    ){}
    async findAllCats(){
        try {
            const result= await this.catmeowRepository.find();
            return result;
        } catch (error) {
            return error;
        }
    }

    async addCatData(catData){
        try {
            const result= await this.catmeowRepository.create(catData);
            return await this.catmeowRepository.save(result);
        } catch (error) {
            return error;
        }
    }
    async deleteById(cat_id){
        try {
            const result = await this.catmeowRepository.delete(cat_id.cat_id);
            return result.affected > 0;
          } catch (error) {
            console.error('Error deleting cat data:', error);
            throw new Error('Failed to delete cat data');
          }
    }

    async updateCatData(cat_id,catData){
        try {
            const id= cat_id.cat_id;
            const catExist= await this.catmeowRepository.findOneBy({id});
            if(!catExist){
                return null;
            }
            this.catmeowRepository.merge(catExist, catData);
            return await this.catmeowRepository.save(catExist);
        } catch (error) {
            throw new Error('Failed to update cat data');
        }
    }
}
