import { VehicleInterface } from '~/domain/entites/vehicle.interface';

interface VehicleStorageService {
    setVehicleList(vehicleList: VehicleInterface[]): void;
}

export interface VehicleApiService {
    getVehicles(): Promise<VehicleInterface[]>;
}

export interface FetchService extends VehicleApiService, VehicleStorageService {}
