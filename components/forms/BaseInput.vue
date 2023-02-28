<template>
  <div class="col-span-3">
    <label
      for="Search"
      class="block text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>

    <input
      id="Search"
      :value="modelValue"
      class="bg-gray-50 border border-gray-300 text-gray-700 rounded w-full mt-2 p-2"
      type="text"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, default: '' },
  modelValue: { type: [String, Number], default: '' }
});
</script>
