import { defineStore } from "pinia";
import axios from "axios";
import { EmptyHistory } from "./constants";

export const useCurrencyStore = defineStore('currencyStore', {
    state: () => ({
        currencyList: [],
        dailyRate: {},
        history: [],
    }),
    actions: {
        getList(from, to) {
            const fromValue = from.split('-')[0].toLowerCase().trim();
            axios.get(`http://www.floatrates.com/daily/${ fromValue }.json`)
                .then(res => {
                    if (res.status === 200) {
                        const currencyArray = [ ...Object.values(res.data) ].map(el => `${el.code} - ${el.name}` );
                        this.currencyList = [ ...currencyArray, from, to ];
                        this.dailyRate = res.data;
                    } else throw new Error('Something went wrong');
                })
                .catch( err => console.log(err));
        },
        updateHistory(from, to, amount, result) {
            this.history = [ ...this.history, { ...EmptyHistory, from: from, to: to, amount: amount, result: result }];
        },
    },
    persist: true,
} )