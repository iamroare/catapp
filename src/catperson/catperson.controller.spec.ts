import { Test, TestingModule } from '@nestjs/testing';
import { CatpersonController } from './catperson.controller';

describe('CatpersonController', () => {
  let controller: CatpersonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatpersonController],
    }).compile();

    controller = module.get<CatpersonController>(CatpersonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
