<template>
    <v-navigation-drawer
            theme="dark"
            rail
            permanent
        >
            <!-- <v-list-item
            nav
            prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
            ></v-list-item> -->

            <v-divider></v-divider>

                    <v-list
                    density="compact"
                    nav
                    >
                    <v-list-item prepend-icon="mdi-view-dashboard" size="40" value="dashboard"></v-list-item>
                    <v-list-item prepend-icon="mdi-video-stabilization" value="application" @click="this.$router.push('application')"></v-list-item>
                    <v-list-item prepend-icon="mdi-audio-input-rca" value="voice" @click="this.$router.push('voice')"></v-list-item>
                    <v-list-item prepend-icon="mdi-history" value="voice" @click="this.$router.push('history')"></v-list-item>
            </v-list>
      </v-navigation-drawer>
    
</template>