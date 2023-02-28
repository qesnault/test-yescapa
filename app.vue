<template>
  <Menu />
  <NuxtPage />
</template>

<script setup lang="ts">
import { VehiclesService } from '~/data/api/vehiclesService';
import { VehiclesApi } from '~/data/adapters/vehiclesApi';
import { GetVehiclesUseCase } from '~/domain/useCases/getVehicles.useCase';

const vehiclesService = new VehiclesService();
const vehiclesApi = new VehiclesApi(vehiclesService.fetchVehicleList());

new GetVehiclesUseCase(vehiclesApi).execute();
</script>
