<template>
    <Navbar title="Human Model"/>
    <v-container fluid>
        <v-row >
            <v-spacer></v-spacer>
            <v-btn color="indigo-darken-4 rounded-lg" size="large" append-icon="mdi-plus" width="200px" class="ma-2" variant="outlined"
                @click="dialog = true">
                Create
            </v-btn>
            <v-btn color="indigo-darken-4 rounded-lg" size="large" append-icon="mdi-plus" width="200px" class="ma-2">
                Others
            </v-btn>
        </v-row>
        
    </v-container>
    <v-divider></v-divider>
    <!-- <div>
    <vue-good-table
      :columns="table_col"
      :rows="human" class="pa-5"/>
  </div> -->
    <v-table fixed-header height="300px" class="pa-5">
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    File Mame
                </th>
                <th class="text-left">
                    File Path
                </th>
                <th class="text-left">
                    Image
                </th>
                <th class="text-left">
                    Used Times
                </th>
                <th class="text-left">
                    Created At
                </th>
                <th>
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in human" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.filename }}</td>
                <td>{{ item.filepath }}</td>
                <td>{{ item.img }}</td>
                <td>{{ item.used }}</td>
                <td><date-format :date="item.created_at" /></td>
                <td><v-btn density="comfortable" variant="tonal" icon="mdi-square-edit-outline"></v-btn></td>
            </tr>
        </tbody>
    </v-table>

    <!-- Dialog -->
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="500">
            <v-card>
                <v-container fluid color="indigo-darken-4">
                    <v-text class="align-center text-h4">
                        Create Human Model
                    </v-text>
                </v-container>
                <v-card-title>
                    <!-- <span class="text-h5">User Profile</span> -->
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Name" v-model="create_name" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="File Name" v-model="create_filename" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="File Path" v-model="create_filepath" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Image" v-model="create_img" required></v-text-field>
                            </v-col>
                            <!-- <v-col cols="12" sm="6">
                                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-autocomplete
                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Interests" multiple></v-autocomplete>
                            </v-col> -->
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="createModel()">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    
</template>

<script>
import { defineComponent } from 'vue';
// Components
import Navbar from '../../components/Navbar.vue';
import { supabase } from '../../supabase'

export default defineComponent({
    name: 'Dashboard',
    components: {
        Navbar,
    },
    data() {
        return {
            create_name: '',
            create_filename: '',
            create_filepath: '',
            create_img: '',
            dialog: false,
            table_col:[
                {
                    label: 'Name',
                    field: 'name',
                },
                {
                    label: 'File Name',
                    field: 'filename',
                    // type: 'number',
                },
                {
                    label: 'File Path',
                    field: 'filepath',
                    // type: 'number',
                },
                {
                    label: 'Image',
                    field: 'img',
                    type: 'number',
                },
                {
                    label: 'Used',
                    field: 'used',
                    type: 'number',
                },
                {
                    label: 'Created On',
                    field: 'created_at',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd',
                    dateOutputFormat: 'MMM do yy',
                },
            ],
            human: [
                {
                    name: 'Landis',
                    filename: 159,
                    filepath: 'Frozen Yogurt',
                    img: 159,
                    used: 3,
                    created_at: '2023/04/18'
                },
                {
                    name: 'Jooting',
                    filename: 159,
                    filepath: 'Frozen Yogurt',
                    img: 159,
                    used: 3,
                    created_at: '2023/04/18'
                },
                {
                    name: 'Owen',
                    filename: 159,
                    filepath: 'Frozen Yogurt',
                    img: 159,
                    used: 3,
                    created_at: '2023/04/18'
                },

            ],
        }
    },
    mounted(){
        this.readModel();
    },
    methods: {
        async readModel(){
            let { data: Model, error } = await supabase
            .from('Model').select();
            
            if (error){
                console.log(error);
                this.$swal({
                    position: 'top-end',
                    icon: 'error',
                    title: error,
                    showConfirmButton: false,
                    timer: 1000
                });
            }else {
                console.log(Model);
                this.human = Model;
            }

        },
        async createModel(){
            const { data, error } = await supabase
            .from('Model')
            .insert([
                { name: this.create_name, filename: this.create_filename, filepath: this.create_filename, img: this.create_img },
            ])
            .select()  
            if (error){
                console.log(error);
                this.$swal({
                    position: 'top-end',
                    icon: 'error',
                    title: error,
                    showConfirmButton: false,
                    timer: 1000
                });
            }
            else {
                this.$swal({
                    position: 'top-end',
                    icon: 'success',
                    title: data,
                    showConfirmButton: false,
                    timer: 1000
                });
                setTimeout(() => {
                    // this.$router.push('Application');
                }, 2000)
                
            }
            this.dialog = false;
        }
    }
});
</script>