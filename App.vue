<template>
  <input @input="handleChange"/>
  <div v-for="({text}) in data.items">
    <span v-html="text"></span>
  </div>
</template>

<script>
import {mapState} from "Vuex";

const apiUrl = 'https://api.hh.ru/suggests/areas/?text=';

export default {
  methods: {
    handleChange(e = {}) {
      const {value} = e?.target;
      if (typeof value !== "string") {
        console.error('Тип данных инпута не строка!')
        return;
      }

      if (value.trim().length >= 2) {
        this.sendRequest(value);
      }
    },
    async sendRequest(string) {
      await fetch(`${apiUrl}${string}`, {
        headers: {
          "User-Agent": "HH-User-Agent"
        }
      })
          .then(res => res.json())
          .then(res => console.log(res))
    }
  },
  computed: {
    ...mapState({
      data: "data"
    })
  }
};
</script>
