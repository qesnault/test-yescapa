<template>
  <div class="my-12 w-10/12 m-auto">
    <div
      v-if="!isVehicle"
      class="p-4 h-fit w-full bg-red-200"
    >
      {{ $t('UNKNOWN_ID') }}
    </div>
    <div
      v-else
      class="flex flex-col lg:flex-row"
    >
      <div class="w-3/4">
        <img
          :src="actualVehicle.pictures[0].url"
          :alt="actualVehicle.title"
          class="w-full rounded aspect-video object-cover"
          @error="onErrorImage"
        >
        <div class="mt-4 flex">
          <img
            :src="actualVehicle.vehicle_owner_picture_url"
            :alt="actualVehicle.title"
            class="w-1/4 rounded aspect-square object-cover"
            @error="onErrorImage"
          >
          <div class="ml-4 flex flex-col justify-between">
            <div>
              <h1 class="text-2xl font-bold mt-2">
                {{ actualVehicle.title }}
              </h1>
              <h3>
                {{ actualVehicle.vehicle_location_city }} ({{ actualVehicle.vehicle_location_zipcode }}), {{ actualVehicle.vehicle_owner_language }}
              </h3>
            </div>
            <p class="bg-gray-800 text-white rounded p-3 w-fit">
              ★ {{ actualVehicle.review_average }}
              <span class="text-gray-300">
                ({{ actualVehicle.review_count }} {{ $t('REVIEWS') }})
              </span>
            </p>
          </div>
        </div>
        <div class="mt-4 flex justify-between">
          <div
            v-for="vehicleSpecificity in ['vehicle_seats', 'vehicle_beds']"
            :key="vehicleSpecificity"
            class="flex flex-col items-center bg-gray-100 rounded-lg p-2 text-gray-800"
          >
            <span class="text-2xl">
              🚐
            </span>
            {{ $t(`VEHICLE_SPECIFICATIONS._${vehicleSpecificity}`, actualVehicle[vehicleSpecificity]) }}
          </div>
        </div>
      </div>
      <div class="ml-6 p-4 bg-gray-800 text-white rounded h-fit w-1/4">
        <h3 class="font-bold text-lg">
          {{ $t('PRICE_FROM', actualVehicle.starting_price) }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVehiclesStore } from '~/stores/vehicles';
import { onErrorImage } from '~/composables/imageHelper';
const vehiclesStore = useVehiclesStore();
const route = useRoute();

const actualVehicle = computed(() => vehiclesStore.getVehicleFromId(+route.params.id));
const isVehicle = computed<boolean>(() => actualVehicle.value !== undefined);

</script>
