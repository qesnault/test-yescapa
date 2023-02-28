import { VehicleFilterStorageService } from '~/domain/useCases/ports';
import type { VehicleInterface } from '~/domain/entites/vehicle.interface';

export class FilterVehiclesAdapter implements VehicleFilterStorageService {
  constructor (private readonly vehicleList: Ref<VehicleInterface[]>) {
  }

  filterVehicleList (filter: string): VehicleInterface[] {
    return this.vehicleList.value.filter(vehicle => vehicle.title.toLowerCase().includes(filter.toLowerCase()));
  }
}
