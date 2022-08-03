import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  // Passando powerService com tipo PowerService, instruímos o Nest
  // que toda vez que uma instância de CpuService for criada, será
  // criada uma instância de PowerService, a ser utilizada pelo
  // construtor da classe CpuService.
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from Power Service.')
    this.powerService.supplyPower(10)
    return a + b;
  }
}
