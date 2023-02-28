import type { FetchService } from '~/domain/useCases/ports';

/**
 * Use case to display the list of vehicles
 * Get the list of vehicles from the api
 * Set the list in the store
 */
export class GetVehiclesUseCase {
  constructor (private VehicleRepository: FetchService) {}

  execute () {
    this.VehicleRepository.fetchVehicleList()
      .then((vehicleList) => {
        this.VehicleRepository.setVehicleList(vehicleList);
      });
  }
}
