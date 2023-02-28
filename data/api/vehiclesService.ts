import type { VehicleInterface } from '~/domain/entites/vehicle.interface';
import { VehicleApiService } from '~/domain/useCases/ports';
export class VehiclesService implements VehicleApiService {
  async getVehicles (): Promise<VehicleInterface[]> {
    try {
      const response = JSON.parse(await $fetch('https://gitlab.com/api/v4/snippets/2095016/raw')) as {results: VehicleInterface[]};
      return response.results;
    } catch {
      throw new Error('error on fetching vehicles');
    }
  }
}
