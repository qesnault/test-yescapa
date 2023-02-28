import { VehicleInterface } from '~/domain/entites/vehicle.interface';

interface VehicleSetStorageService {
    setVehicleList(vehicleList: VehicleInterface[]): void;
}

export interface VehicleApiService {
    fetchVehicleList(): Promise<VehicleInterface[]>;
}

export interface VehicleFilterStorageService {

    filterVehicleList(filter: string): VehicleInterface[];
}

export interface FetchService extends VehicleApiService, VehicleSetStorageService {}
