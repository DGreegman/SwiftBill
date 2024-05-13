<template>
    <section class="">
        <div class="pt-10">
            
            <Header />

            <div class="mb-4">
                <p class="text-center text-white">Good Morning Gracious</p>
            </div>
            <div class="mb-4">

                <RouterLink to="/" class="text-white">Back</RouterLink>
            </div>
            <div class="flex bg-gray-200 mb-5 rounded-lg">
                <div class="flex flex-1">
                    <img src="../assets/diftrak.png" alt="" class="w-40">
                </div>
                <div class="flex flex-1 p-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate alias nostrum ullam iste est cum </p>
                </div>
            </div>
            <div class="overflow-x-auto rounded-lg">
                <table class="table-auto min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-300">
                    <tr>
                        <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                    </thead>
                    <tbody class="bg-gray-300 divide-y divide-gray-200">
                        <tr v-for="service in services" :key="service.id">
                            <td class="px-2 py-4">{{service.services}}</td>
                            <td class="px-2 py-4">${{service.amount}}</td>
                            <td class="px-4 py-4"><i class="fa-solid fa-trash-can" @click="trash(service.id)"></i></td>
                        </tr>
                        <tr class="bg-gray-300" v-show="totalShow">
                            <td class="px-2 py-4" colspan="2">Total</td>
                            <td class="px-2 py-4" colspan="1">${{ total }}</td>
                        </tr>
                    <!-- <tr>
                        <td class="px-2 py-4">Domain</td>
                        <td class="px-2 py-4">$200</td>
                        <td class="px-2 py-4"><i class="fa-solid fa-trash-can"></i></td>
                    </tr> -->
                    <!-- More rows can be added here -->
                    </tbody>
                </table>
            </div>

            <div class="pt-5">
                <form action="" @submit.prevent="onSubmit" class="mt-3 font-nunito  text-base font-bold">
                    <div class="flex flex-col pb-5 ">
                        <!-- <label for="email" class="   pb-2">Email</label> -->
                        <input type="text" v-model="text" name="" placeholder="Service Description" class="p-2 rounded-lg bg-gray-300">
                    </div>
                    <div class="flex flex-col pb-5 " >
                        <!-- <label class=" pb-2" for="password">Password</label> -->
                        <input type="text" v-model="amount" placeholder="Add Amount" name="" id="password" class="p-2 rounded-lg bg-gray-300 ">
                    </div>
                    <div class="flex justify-center items-center pb-5">
                        <button class="bg-secondaryColor p-2 hover:bg-orange-600 ease-linear duration-150 w-full rounded-lg text-xl text-white">Add Service <i class="fa-solid fa-plus"></i></button>
                    </div>
                </form>
                    <div class="flex justify-center items-center pb-5">
                        <button class="p-3 bg-gray-300 rounded-lg">Download PDF <i class="fa-solid fa-circle-down text-secondaryColor text-xl"></i></button>
                    </div>
            </div>
            
        </div>
    </section>



</template>

<script setup>
    import { ref, computed, onMounted } from "vue";
    import { RouterLink } from 'vue-router'
    import { useToast } from 'vue-toastification'
    import Header from '../components/Header.vue'

    const toast = useToast()

    const amount = ref('')
    const text = ref('')
    const onlyLettersRegex = /^[A-Za-z]+$/;
    let totalShow = false

    const services = ref([])

    onMounted(() =>{
        const savedServices = JSON.parse(localStorage.getItem('services'))
        if (savedServices) {
            services.value = savedServices
        }
    })

    const total = computed(() =>{
    if(text.value == '' && amount.value == ''){
        totalShow = false
    }
    return services.value.reduce((acc, service) =>{
        totalShow = true
        return acc + service.amount
    },0).toFixed(2)
    
})
    // create service
    const onSubmit = () => {
        if(!amount.value || !text.value){
            // alert('You must add value to both field')
            toast.error('You must add value to both field')
            return
        }
        if(!onlyLettersRegex.test(text.value)){0
            toast.error('We only accept texts here')
            // toast.error('We only accept texts here')
            return
        }
        if (isNaN(amount.value)) {
            // alert('You have to add a number in the amount field')
            toast.error('You have to add a number in the amount field')
            return
        }

        services.value.push({
            id: generateUniqueId(),
            services: text.value,
            amount: parseFloat(amount.value)
        })
        saveServiceToLocalStorage()
        toast.success('Service Added Successfully...')
        text.value = ''
        amount.value = ''
        
    }


    const generateUniqueId = () =>  Math.floor(Math.random() * 1000000)
    // console.log(generateUniqueId())

    // save to localStorage
    const saveServiceToLocalStorage = () =>{
        localStorage.setItem('services', JSON.stringify(services.value))
    }

    // delete Item from list

    const trash = (id) => {
        services.value = services.value.filter((service) => service.id !==id)
        saveServiceToLocalStorage()
    }
</script>

