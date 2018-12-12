<template>
  <div class="botInteraction">
    <h1> Category distribution </h1>
    <pie-chart :data="distributionCategory"></pie-chart>

    <h1> Manual Interaction Distribution </h1>
    <column-chart :data="distributionManualCategory"></column-chart>

    <h1> Manual Interaction overall </h1>
    <column-chart :data="distributionManual"></column-chart>
  </div>
</template>

<script>
// @ is an alias to /src
// import store from '@/store'
import axios from 'axios';
export default {
  name: 'BotInteraction',
   data() {
    return {
      distributionCategory: [],
      distributionManualCategory: [],
      distributionManual: [],
      intervals: []
    }
  },
  methods:{
    requestHistogram: function (container, path) {
      const timeout = 10000;
      const makeRequest = () => {
        axios.get(`http://13.57.248.240:9000${path}`)
        .then(response => {
          const data = response.data.data;
          container.splice(0, container.length);
          for (let i = 0; i < data.length; ++i) {
            container.push(data[i]);
          }
        });
      };

      makeRequest();
      this.intervals.push(setInterval(makeRequest, timeout));
    }
  },
  created() {
    this.requestHistogram(this.distributionCategory, '/bot/1')
    this.requestHistogram(this.distributionManualCategory, '/bot/2')
    this.requestHistogram(this.distributionManual, '/bot/3')
  },
  destroyed() {
    this.intervals.forEach(clearInterval);
    this.intervals.splice(0, this.intervals.length);
  }
}
</script>

<style lang="scss">
</style>
