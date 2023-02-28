<template>
  <form
    class="p-4 border rounded mb-4 lg:mr-6 h-fit"
  >
    <BaseInput
      v-model="filters.searchInput"
      :label="$t('SEARCH')"
    />
  </form>
</template>
<script setup lang="ts">
import BaseInput from '~/components/forms/BaseInput.vue';

defineProps({
  filters: { type: Object, required: true }
});

defineEmits(['apply-filters']);
</script>
