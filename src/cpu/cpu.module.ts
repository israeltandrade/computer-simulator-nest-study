import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  // Importação da Service:
  imports: [PowerModule],
  providers: [CpuService]
})
export class CpuModule {}
