import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('not-found')
export class NotFoundController {
  @Get('*')
  @HttpCode(404)
  notFound(): string {
    return 'This route is not found';
  }
}
