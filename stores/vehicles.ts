import { defineStore } from 'pinia';
import { VehicleInterface } from '~/domain/entites/vehicle.interface';

export const useVehiclesStore = defineStore('vehicles', {
  state: () => {
    return {
      vehicleList: [] as VehicleInterface[]
    };
  },
  actions: {
    setVehicleList (vehicleList: VehicleInterface[]) {
      this.vehicleList = vehicleList;
    }
  }
});
