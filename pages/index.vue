<template>
  <div class="my-12 w-10/12 m-auto flex flex-col lg:flex-row">
    <Filters
      :filters="filters"
      class="w-full lg:w-1/6"
    />
    <div
      v-if="filteredList.length === 0"
      class="p-4 h-fit w-full bg-gray-200"
    >
      {{ $t('NO_RESULT') }}
    </div>
    <div
      v-else
      class="w-full lg:w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <nuxt-link
        v-for="vehicle in filteredList"
        :key="vehicle.id"
        :to="`/vehicles/${vehicle.id}`"
      >
        <CardItem>
          <template #picture>
            <img
              :src="vehicle.pictures[0].url"
              :alt="vehicle.title"
              class="w-full h-48 object-cover"
              @error="onErrorImage"
            >
          </template>
          <template #default>
            <div class="p-4 flex-col justify-between">
              <div class="flex justify-between">
                <h3 class="font-bold">
                  {{ vehicle.title }}
                </h3>
                <span class="text-sm text-gray-500">{{ $t('PRICE', vehicle.starting_price) }}</span>
              </div>
              <p class="text-sm text-gray-500 mt-2">
                {{ vehicle.vehicle_location_city }}
              </p>
              <div class="flex justify-between items-end">
                <p class="text-sm text-gray-500 mt-2">
                  {{ $t('SEAT', vehicle.vehicle_seats ) }} ● {{ $t('SLEEP', vehicle.vehicle_beds) }}
                </p>
                <p>
                  ★ {{ vehicle.review_average }}
                  <span class="text-gray-500">
                    ({{ vehicle.review_count }})
                  </span>
                </p>
              </div>
            </div>
          </template>
        </CardItem>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// Store
import { storeToRefs } from 'pinia';
import { useVehiclesStore } from '~/stores/vehicles';

// Filters
import { FilterVehiclesUseCase } from '~/domain/useCases/filterVehicles.useCase';
import { FilterVehiclesAdapter } from '~/data/adapters/vehiclesFilters';
const vehiclesStore = useVehiclesStore();
const { vehicleList } = storeToRefs(vehiclesStore);

const filters = reactive({
  searchInput: ''
});

const vehicleListFilter = new FilterVehiclesAdapter(vehicleList);
const filteredList = computed(() => new FilterVehiclesUseCase(vehicleListFilter).execute(filters.searchInput));
</script>
