import { describe, expect, it, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { GetVehiclesUseCase } from '~/domain/useCases/getVehicles.useCase';
import { VehiclesApi } from '~/data/adapters/vehiclesApi';
import { VehicleInterface } from '~/domain/entites/vehicle.interface';
import { useVehiclesStore } from '~/stores/vehicles';

describe('GetVehiclesUseCase', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should get vehicles', async () => {
    const vehicleList: VehicleInterface[] = [
      {
        id: 1,
        title: 'title',
        starting_price: 1,
        review_average: 1,
        review_count: 1,
        vehicle_type: 'vehicle_type',
        vehicle_beds: 1,
        vehicle_seats: 1,
        vehicle_location_city: 'vehicle_location_city',
        vehicle_location_zipcode: 'vehicle_location_zipcode',
        vehicle_owner_first_name: 'vehicle_owner_first_name',
        vehicle_owner_language: 'vehicle_owner_language',
        vehicle_owner_picture_url: 'vehicle_owner_picture_url',
        url: 'url',
        pictures: ['pictures']
      }
    ];
    const vehiclesApi = new VehiclesApi(Promise.resolve(vehicleList));
    await new GetVehiclesUseCase(vehiclesApi).execute();
    const vehiclesStore = useVehiclesStore();
    expect(vehiclesStore.vehicleList).toEqual(vehicleList);
  });
});
