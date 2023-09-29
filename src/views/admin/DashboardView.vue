<template>
    <Navbar title="Dashboard"/>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-card class="pa-5 elevation-5 rounded-xl">
                    <Chart width="100%"/>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card class="pa-5 elevation-5 rounded-xl">
                    <Chart width="100%"/>
                </v-card>
                <!-- <Chart width="100%"/> -->
            </v-col>
            <v-col cols="3">
                <v-card class="pa-5 elevation-5 rounded-xl">
                    <Chart width="100%"/>
                </v-card>
                <!-- <Chart width="100%"/> -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { defineComponent } from 'vue';
    // Components
    import Navbar from '../../components/Navbar.vue';
    import Chart from '../../components/chart/CountChartView.vue';


    export default defineComponent({
        name: 'Dashboard',
        components: {
            Navbar,
            Chart,
        },
    });
</script>