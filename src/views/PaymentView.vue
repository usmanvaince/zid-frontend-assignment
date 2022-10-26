<template>
  <form ref="form" @submit.prevent="submitPaymentInfo" class="card-form">
    <div class="min-w-screen min-h-screen flex items-center justify-center px-5 pb-10">
      <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style="max-width: 600px">
        <div class="mb-10">
          <h1 class="text-center font-bold text-xl uppercase">Secure payment info</h1>
        </div>
        <div class="mb-3 flex -mx-2">
          <div class="px-2">
            <label class="flex items-center cursor-pointer">
              <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" alt="card" class="h-8 ml-3">
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
          <div>
            <input type="text"
                   required
                   name="card[owner]"
                   v-model="card.owner"
                   maxlength="24"
                   ref="card.owner"
                   id="cardOwnerInput"
                   class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm" placeholder="John Smith"/>
          </div>
        </div>
        <div class="mb-3">
          <label class="font-bold text-sm mb-2 ml-1">Card number</label>
          <div>
            <input type="text"
                   name="card[number]"
                   v-model="card.number"
                   maxlength="16"
                   ref="card.number"
                   required
                   id="cardNumberInput"
                   class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm" placeholder="0000 0000 0000 0000"/>
          </div>
        </div>
        <div class="mb-3 -mx-2 flex items-end">
          <div class="px-2 w-1/2">
            <label class="font-bold text-sm mb-2 ml-1">Expiration date</label>
            <div>
              <select  v-model="card.expiration.month"
                       name="card[expiration][month]"
                       required
                       ref="card.expiration.month"
                       class="block w-full max-w-lg rounded-md border-gray-300
                      shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm">
                <option v-for="month in months" :key="month">{{ month }}</option>
              </select>
            </div>
          </div>
          <div class="px-2 w-1/2">
            <select v-model="card.expiration.year"
                    name="card[expiration][year]"
                    required
                    ref="card.expiration.year"
                    class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm">
              <option v-for="year in years" :key="year">{{year}}</option>
            </select>
          </div>
        </div>
        <div class="mb-10">
          <label class="font-bold text-sm mb-2 ml-1">Security code</label>
          <div>
            <input name="card[cvc]"
                   v-model="card.cvc"
                   maxlength="3"
                   required
                   id="cardCvcInput"
                   ref="card.cvc"
                   class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm" placeholder="000" type="text"/>
          </div>
        </div>
        <div>
          <button type="submit" class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
        </div>
      </div>
    </div>
  </form>

</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PaymentView",
  data: () => ({
    card: {
      number: '',
      owner: '',
      expiration: {
        month: '',
        year: ''
      },
      cvc: ''
    }
  }),
  computed: {
    months: function (): string[] {
      return [
        '01', '02', '03', '04',
        '05', '06', '07', '08',
        '09', '10', '11', '12'
      ];
    },
    years: function (): number[] {
      let years= [];
      const currentYear = (new Date()).getFullYear() % 2000;

      for (let i = 0; i < 18; i++) {
        years.push(currentYear + i);
      }

      return years;
    }

  },
  methods: {
    async submitPaymentInfo () {
      alert('form is submitted');
    }
  },
  watch: {
    'card.number': function (newNumber) {
      this.card.number = newNumber.replace(/[^0-9]/gim,'');
    },
    'card.owner': function (newOwner) {
      this.card.owner = newOwner.toUpperCase().replace(/[^A-Z\s]/gim,'')
    },
    'card.cvc': function (newCvc) {
      this.card.cvc = newCvc.replace(/[^0-9]/gim,'');
    }
  },

})
</script>
