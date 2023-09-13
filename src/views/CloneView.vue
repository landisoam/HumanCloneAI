<template>
    <v-card class=" elevation-0">
      <v-toolbar
      class="rounded"
        color="blue-grey-lighten-4"
        height="100"
    
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title class="text-h4">Human Clone</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
  
        <!-- <template v-slot:extension>
          <v-tabs
            v-model="currentItem"
            fixed-tabs
          >
            <v-tab
              v-for="item in items"
              :key="item"
              :value="'tab-' + item"
            >
              {{ item }}
            </v-tab>
  
            <v-menu
              v-if="more.length"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  variant="plain"
                  rounded="0"
                  class="align-self-center me-4"
                  height="100%"
                  v-bind="props"
                >
                  more
                  <v-icon end>
                    mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
  
              <v-list class="bg-grey-lighten-3">
                <v-list-item
                  v-for="item in more"
                  :key="item"
                  @click="addItem(item)"
                >
                  {{ item }}
                </v-list-item>
              </v-list>
            </v-menu>
          </v-tabs>
        </template> -->
      </v-toolbar>

      <!-- Under AppTitle -->
      <v-row no-gutters>
        <v-col cols="2">
          <v-sheet class="pa-2 ma-2">
            <v-card height="1000"
                class="rounded-xl elevation-0 pa-5 ma-1"
                color="blue-grey-lighten-5">
                <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. -->
                <v-card height="200px" class="rounded-xl elevation-0 ma-5">
                    <v-row class="text-center">
                        <v-btn icon="mdi-plus" size="x-large"></v-btn>
                    </v-row>
                </v-card>        
            </v-card>
          </v-sheet>
        </v-col>
        <v-col cols="7">
          <v-sheet class="pa-2 ma-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-sheet>
        </v-col>
      </v-row>
  
      <!-- <v-window v-model="currentItem">
        <v-window-item
          v-for="item in items.concat(more)"
          :key="item"
          :value="'tab-' + item"
        >
          <v-card flat>
            <v-card-text>
              <h2>{{ item }}</h2>
              {{ text }}
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window> -->
    </v-card>
  </template>

  <script>
  export default {
    data: () => ({
      currentItem: 'tab-Web',
      items: [
        'Web', 'Shopping', 'Videos', 'Images',
      ],
      more: [
        'News', 'Maps', 'Books', 'Flights', 'Apps',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }),

    methods: {
      addItem (item) {
        const removed = this.items.splice(0, 1)
        this.items.push(
          ...this.more.splice(this.more.indexOf(item), 1),
        )
        this.more.push(...removed)
        this.$nextTick(() => { this.currentItem = 'tab-' + item })
      },
    },
  }
</script>