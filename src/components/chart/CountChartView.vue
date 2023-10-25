<template>
  <div style="width: 100%">
    <!-- <div style="display: flex; justify-content: center">
      <button type="button" @click="shuffleData">Add data</button>
      <button type="button" @click="switchLegend">Swicth legends</button>
    </div> -->
    <!-- <DoughnutChart v-bind="doughnutChartProps" /> -->
    <BarChart v-bind="barChartProps" />
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from "vue";
import { BarChart, useBarChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);
export default defineComponent({
  name: 'App',
  components: {
    BarChart,
  },
  setup() {
    const data = ref([2, 3]);

    const chartData = computed(() => ({
      labels: ['Human Model', 'Speaker Model'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
    });

    function shuffleData() {
      data.value = shuffle(data.value);
    }

    return { shuffleData, barChartProps, barChartRef };
  },
});
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
