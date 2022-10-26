<template>
  <div>

    <form @submit.prevent="submit">
      <div class="space-y-8 divide-y divide-gray-200 px-12 bg-white rounded mt-4 shadow-lg mx-12">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <div>
              <h3 class="text-lg font-medium leading-6 text-gray-900">Personal
                Information</h3>
            </div>

            <div class="space-y-6 sm:space-y-5">
              <div
                  class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="username"
                       class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Username</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input type="text" name="username" id="username"
                         v-model="userName"
                         class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"/>
                  <template v-if="v$.userName.$error">
                    <span class="text-red-500 py-1">*The user name field is required.</span>
                  </template>

                </div>

              </div>

              <div
                  class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="date_of_birth"
                       class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Date of birth
                </label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input type="date" name="date_of_birth" id="date_of_birth"
                         v-model="DOB"
                         class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"/>
                  <template v-if="v$.DOB.$error">
                    <span class="text-red-500 py-1">*The DOB field is required</span>
                  </template>
                </div>
              </div>
            </div>
          </div>


          <div class="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div class="pt-6 sm:pt-5">
              <div role="group">
                <div class="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                  <div>
                    <div
                        class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700">
                      Gender
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="max-w-lg">
                      <div class="mt-4 space-y-4">
                        <div class="flex items-center">
                          <input id="male" name="gender" v-model="gender"
                                 type="radio"
                                 value="male"
                                 class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                          <label for="male"
                                 class="ml-3 block text-sm font-medium text-gray-700">Male</label>
                        </div>
                        <div class="flex items-center">
                          <input id="female" name="gender" type="radio"
                                 v-model="gender"
                                 value="female"
                                 class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                          <label for="female"
                                 class="ml-3 block text-sm font-medium text-gray-700">Female</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="py-5">
          <div class="flex justify-end">
            <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default defineComponent({
  name: "profileView",
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({ userName: null, DOB: null, gender: 'male' }),
  validations () {
    return {
      userName: { required },
      DOB: { required },
      gender: { required },
    }
  },
  methods: {
    async submit () {
      const result = await this.v$.$validate();
      if (!result) {
        // notify user form is invalid
        return
      }
      alert('form is valid and ready to submit');
    }
  }
});
</script>
