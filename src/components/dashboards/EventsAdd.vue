<template>
  <div class="eventsAdd">
    <h1>Days Distribution </h1>
    <pie-chart :data="daysFrequency"></pie-chart>

    <h1>Events Types Distribution </h1>
    <pie-chart :data="typesFrequency"></pie-chart>

    <h1>Time Frequency </h1>
    <column-chart :data="timeFrequency"></column-chart>

    <h1>Week Frequency </h1>
    <column-chart :data="weekFrequency"></column-chart>

    <h1>Month Frequency </h1>
    <column-chart :data="monthFrequency"></column-chart>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EventsAccess',
  data() {
    return {
      daysFrequency: [],
      typesFrequency: [],
      timeFrequency: [],
      weekFrequency: [],
      monthFrequency: [],
      intervals: []
    }
  },
  methods: {
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
    this.requestHistogram(this.daysFrequency, '/events/1');
    this.requestHistogram(this.typesFrequency, '/events/2');
    this.requestHistogram(this.timeFrequency, '/events/3');
    this.requestHistogram(this.weekFrequency, '/events/4');
    this.requestHistogram(this.monthFrequency, '/events/5');
  },
  destroyed() {
    this.intervals.forEach(clearInterval);
    this.intervals.splice(0, this.intervals.length);
  }
}
</script>

<style lang="scss">
</style>
