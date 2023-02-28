import { VehicleFilterStorageService } from '~/domain/useCases/ports';
import { VehicleInterface } from '~/domain/entites/vehicle.interface';

/**
 * Use case to filter the list of vehicles
 * Get the list of vehicles from the store
 * Filter and return the list
 */
export class FilterVehiclesUseCase {
  constructor (private vehicleGetStorageService: VehicleFilterStorageService) {}

  execute (filter:string): VehicleInterface[] {
    return this.vehicleGetStorageService.filterVehicleList(filter);
  }
}
