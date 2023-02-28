import type { VehicleInterface } from '~/domain/entites/vehicle.interface';
import { useVehiclesStore } from '~/stores/vehicles';
import { FetchService } from '~/domain/useCases/ports';

export class VehiclesApi implements FetchService {
  vehiclesApiService: Promise<VehicleInterface[]>;
  constructor (_vehiclesApiService: Promise<VehicleInterface[]>) {
    this.vehiclesApiService = _vehiclesApiService;
  }

  setVehicleList (vehicleList: VehicleInterface[]): void {
    const vehiclesStore = useVehiclesStore();
    vehiclesStore.setVehicleList(vehicleList);
  }

  getVehicles (): Promise<VehicleInterface[]> {
    return this.vehiclesApiService;
  }
}
