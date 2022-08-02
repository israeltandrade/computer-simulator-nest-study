import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  // Exportação da Service
  exports: [PowerService]
})
export class PowerModule {}
