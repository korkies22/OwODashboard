<template>
  <div class="campusAccess">
    <h1> Usage Frequency </h1>
    <column-chart :data="campusFrequency"></column-chart>

    <h1> Access Evolution </h1>
    <area-chart :data="accessEvolution"></area-chart>

    <h1> Hour Frequency </h1>
    <column-chart :data="hourFrequency"></column-chart>

    <h1> Days Frequency </h1>
    <column-chart :data="daysFrequency"></column-chart>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CampusAccess',
  data() {
    return {
      campusFrequency: [],
      accessEvolution: [],
      hourFrequency: [],
      daysFrequency: [],
      intervals: []
    }
  },
  methods: {
    requestHistogram: function (container, path) {
      const timeout = 10000;
      const makeRequest = () => {
        axios.get(`http://0.0.0.0:9000${path}`)
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
    this.requestHistogram(this.campusFrequency, '/campus/1')
    this.requestHistogram(this.accessEvolution, '/campus/2')
    this.requestHistogram(this.hourFrequency, '/campus/3')
    this.requestHistogram(this.daysFrequency, '/campus/4')
  },
  destroyed() {
    this.intervals.forEach(clearInterval);
    this.intervals.splice(0, this.intervals.length);
  }
}
</script>

<style lang="scss">
</style>
