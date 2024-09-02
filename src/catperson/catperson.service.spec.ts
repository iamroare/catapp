import { Test, TestingModule } from '@nestjs/testing';
import { CatpersonService } from './catperson.service';

describe('CatpersonService', () => {
  let service: CatpersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatpersonService],
    }).compile();

    service = module.get<CatpersonService>(CatpersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
