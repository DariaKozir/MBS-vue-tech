<template>
  <section>
    <div>
      <label>Amount:</label>
      <input class="input-style" type="number" required v-model="amount">
      <p v-if="errorAmount && !amount" class="error">{{ errorAmount }}</p>
    </div>
    <Select
        label="Currency from:"
        v-model="convFrom"
        :list="currencyStore.currencyList"
    />
    <Select
        label="Currency to:"
        v-model="convTo"
        :list="currencyStore.currencyList"
    />
    <h2>Converted Amount: {{ convertedAmount }}</h2>
    <div class="flex justify-between">
      <button class="button" @click="calcResult">Convert</button>
      <button v-if="currencyStore.history.length > 0" class="button">
        <router-link :to="{ name: 'HistoryPage' }">Go to history</router-link>
      </button>
    </div>
  </section>
</template>

<script>
import Select from "@/components/Select.vue";
import { useCurrencyStore } from "@/store";
import {onMounted, onUpdated, ref} from "vue";

export default {
  name: "Main",
  components: { Select },
  setup() {
    const currencyStore = useCurrencyStore();

    const convFrom = ref("USD - U.S. Dollar");
    const convTo = ref("EUR - EURO");
    const amount = ref(null);
    const convertedAmount = ref();
    const errorAmount = ref("");

    onMounted(() => currencyStore.getList(convFrom.value, convTo.value));

    onUpdated(() => console.log(convTo.value))

    const calcResult = async () => {
      if (amount.value) {
        currencyStore.getList(convFrom.value, convTo.value);
        const rate = currencyStore.dailyRate[convTo.value.split('-')[0].toLowerCase().trim()].rate;
        convertedAmount.value = (amount.value * rate).toFixed(2);
        currencyStore.updateHistory(convFrom.value, convTo.value, amount.value, convertedAmount.value);
      } else errorAmount.value = "Please, enter correct amount";
    };

    return { currencyStore, amount, convTo, convFrom, convertedAmount, calcResult, errorAmount };
  },
};
</script>