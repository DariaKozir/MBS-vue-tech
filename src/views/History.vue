<template>
  <section>
    <Table :data="currencyStore.history" :remove="removeHandler"/>
    <button class="button"><router-link :to="{ name: 'MainPage' }">Go back</router-link></button>
  </section>
</template>

<script>
import { useCurrencyStore } from "@/store";
import Table from "@/components/Table.vue";
import { router } from "@/router";

export default {
  name: "History",
  components: { Table },
  setup() {
    const currencyStore = useCurrencyStore();

    const removeHandler = (item) => {
      currencyStore.history = currencyStore.history.filter(el => el !== item);
      if (currencyStore.history.length === 0) router.push({ name: "MainPage" });
    };

    return { currencyStore, removeHandler };
  },
};
</script>