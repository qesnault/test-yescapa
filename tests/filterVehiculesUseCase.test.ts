import { describe, expect, it } from 'vitest';
import { ref, Ref } from 'vue';
import { VehicleInterface } from '~/domain/entites/vehicle.interface';
import { FilterVehiclesAdapter } from '~/data/adapters/vehiclesFilters';

describe('FilterVehiclesUseCase', () => {
  const vehicleList: Ref<VehicleInterface[]> = ref([
    {
      id: 1,
      title: 'Volkswagen California',
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
  ]);

  const filterVehiclesUseCase = new FilterVehiclesAdapter(vehicleList);

  it('should filter vehicule with the title', () => {
    const searchFilter = 'volk';
    const filteredVehicles = filterVehiclesUseCase.filterVehicleList(searchFilter);
    expect(filteredVehicles[0].title).toEqual(vehicleList.value[0].title);
  });

  it('shoud have no result', () => {
    const searchFilter = 'Fiat';
    const filteredVehicles = filterVehiclesUseCase.filterVehicleList(searchFilter);
    expect(filteredVehicles).toHaveLength(0);
  });
});
