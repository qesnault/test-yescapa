import type { VehicleInterface } from '~/domain/entites/vehicle.interface';
import { useVehiclesStore } from '~/stores/vehicles';
import { FetchService } from '~/domain/useCases/ports';

export class VehiclesApi implements FetchService {
  constructor (private vehiclesApiService: Promise<VehicleInterface[]>) {
  }

  setVehicleList (vehicleList: VehicleInterface[]): void {
    const vehiclesStore = useVehiclesStore();
    vehiclesStore.setVehicleList(vehicleList);
  }

  fetchVehicleList (): Promise<VehicleInterface[]> {
    return this.vehiclesApiService;
  }
}
