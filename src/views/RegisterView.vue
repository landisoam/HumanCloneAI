<template>
    <div class="d-flex align-center justify-center bgimg" style="height: 120vh">
        <v-card class="pa-9 elevation-24 rounded-xl">
            <v-img src="../../src/assets/image/ASC logo2.png" height="300px"></v-img>
            <v-sheet width="500" class="mx-auto">
       
                    <v-text-field v-model="email" prepend-icon="mdi-email" label="Email" variant="solo-filled"></v-text-field>
                    <v-text-field v-model="phone" type="password" prepend-icon="mdi-phone" label="Phone (60+)" variant="solo-filled" class="elevation-0"></v-text-field>
                    <v-text-field v-model="password" type="password" prepend-icon="mdi-lock" label="Password" variant="solo-filled" class="elevation-0"></v-text-field>
                    <v-text-field v-model="repassword" type="password" prepend-icon="mdi-lock" label="Retype Password" variant="solo-filled" class="elevation-0"></v-text-field>

                    <v-btn type="submit" @click="signup" color="primary" size="x-large" block class="mt-5 rounded-lg">Sign Up</v-btn>
                    <!-- <v-btn type="submit" @click="getCurrentUser" color="primary" size="x-large" block class="mt-5 rounded-lg">GET USER</v-btn> -->

                <div class="mt-10">
                    <p class="text-body-2">Don't have an account? <a href="#">Sign In</a></p>
                </div>
            </v-sheet>
        </v-card>
    </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase'

export default {
    data() {
        return {
            email: '',
            phone:'',
            password: '',
            repassword: '',
        };
    },
    methods: {
        async signup() {
            if(this.password != this.repassword){
                this.$swal({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Retype password is not matching',
                        showConfirmButton: false,
                        timer: 1500
                });
            }else{
                // Your login logic here
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: this.email,
                    password: this.password
                })

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
                        title: 'Login Successfully',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    setTimeout(() => {
                        this.$router.push('Application');
                    }, 2000)
                    
                }
            }   
        },

        async getCurrentUser(){
            const localUser = await supabase.auth.getSession();
            console.log(localUser);
        },
    },
}
</script>

<style scoped lang="scss">
.bgimg {
  background-image: url('@/assets/image/loginbg.jpeg');
}

.shadow {
  display: grid;
place-items: center;
  color: #fff;
    font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 800;
  position: relative;
  margin: 200px auto 0;
  width: 700px;
  height: 350px;
  background: #15202B;
}

.shadow::before,
.shadow::after {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  background: linear-gradient(45deg,red,blue,green,yellow,#e11d74,black,#ffff00,#aa0000);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: animate 25s linear infinite;
}

.shadow::after {
  filter: blur(25px);
}

@keyframes animate {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

</style>