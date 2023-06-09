<template>
  <label>{{ label }}</label>
  <select class="input-style" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <option v-for="item in list" :key="item" :value="item">{{ item }}</option>
  </select>
</template>

<script>
export default {
  props: ['label', 'list', 'modelValue'],
  emits: ['update:modelValue'],
}
</script>