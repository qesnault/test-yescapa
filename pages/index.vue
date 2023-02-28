<template>
  <div class="m-4">
    {{ $t('hello') }}
    {{ vehiclesStore.vehicleList }}
  </div>
</template>

<script setup lang="ts">
import {useVehiclesStore} from "~/stores/vehicles";

const vehiclesStore = useVehiclesStore();
</script>
