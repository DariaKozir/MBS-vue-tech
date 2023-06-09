<template>
  <v-table>
    <thead>
    <tr>
      <th v-for="value in keys" class="text-left">{{ value }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in data" :key="item">
      <td v-for="value in item" :key="value">{{ value }}</td>
      <td><trash-icon @click="remove(item)" class="w-[25px]"/></td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
import { TrashIcon } from '@heroicons/vue/24/solid';

export default {
  name: "Table",
  props: ["data", "remove"],
  components: { TrashIcon },
  setup(props) {
    let keys;
    props.data.length > 0 && (keys = { ...Object.keys(props.data[0]) });

    return { keys };
  }
};
</script>