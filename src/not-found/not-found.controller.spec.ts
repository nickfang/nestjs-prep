import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundController } from './not-found.controller';

describe('NotFoundController', () => {
  let controller: NotFoundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotFoundController],
    }).compile();

    controller = module.get<NotFoundController>(NotFoundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
