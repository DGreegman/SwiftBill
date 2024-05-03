<template>

      <section class="text-white">

        <div class="p-4">
                <Header />
                <LogoView/>
            <form action="" class="mt-3 font-nunito  text-base font-bold">
                <div class="flex flex-col pb-5 ">
                    <label for="email" class="   pb-2">Email</label>
                    <input type="email" name="" id="email" class="p-2 rounded-lg bg-gray-300">
                </div>
                <div class="flex flex-col pb-5 " >
                    <label class=" pb-2" for="password">Password</label>
                    <input type="password" name="" id="password" class="p-2 rounded-lg bg-gray-300 ">
                </div>
                <div class="flex justify-center items-center pb-5">
                    <button class="bg-secondaryColor p-3 hover:bg-orange-600 ease-linear duration-150 w-full rounded-lg">Sign In</button>
                </div>
                <div class="text-center mb-2">

                  <span >Or Use One Your Social Media</span>
                </div>
                <div class="flex justify-evenly mb-2">
                    <button class="bg-brighterBlue px-3 py-2 rounded-md">Twitter</button>
                    <button class="bg-brighterBlue px-3 py-2 rounded-md">FaceBook</button>
                </div>
                <div class="flex justify-evenly mb-2 py-4">
                    <!-- <span>Forget Password?</span>
                    <span><a href="#">Sign Up</a></span> -->
                    <router-link :to="{ name: 'SwiftList'}">Create Bill</router-link> 
                    <router-link :to="{ name: 'SignUp'}">Sign Up </router-link>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
    import SignUp from '../views/SignUp.vue'
    import LogoView from '../components/LogoView.vue'
    import Header from '../components/Header.vue'
</script>
