<template>
  <w-app>
    <w-flex class="justify-center">
      <w-form  class="w80" ref="formRef">
        <w-input
          v-model="form.date"
          type="date"
          class="title3"
          label="日期"
          :validators="[validators.required]">
        </w-input>
        <w-select
          v-model="form.type"
          class="title3 mt6"
          :items="typeOption"
          label="方式"
          :validators="[validators.required]">
        </w-select>
        <w-select
          v-model="form.class"
          class="title3 mt6"
          :items="calssOption"
          label="類別"
          :validators="[validators.required]"
        >
        </w-select>
        <w-input
          v-model="form.detail"
          class="title3 mt6"
          label="明細"
          :validators="[validators.required]">
        </w-input>
        <w-input
          v-model="form.amount"
          class="title3 mt6"
          type="number"
          label="金額"
          :validators="[validators.required]">
        </w-input>
        <!-- <w-button
          class="mt6 my1 mr2"
          bg-color="warning"
          type="reset"
          xl>
          Reset
        </w-button> -->
        <w-button
          class="mt6 my1 mr2"
          bg-color="primary"
          @click="onSubmit"
          xl>
          送 出
        </w-button>
      </w-form>
    </w-flex>
  </w-app>
</template>

<script setup>
import { reactive,ref,onMounted,getCurrentInstance } from 'vue'

const {proxy}=getCurrentInstance()

const formRef = ref(null)
const today = proxy.dayjs().format('YYYY-MM-DD')
onMounted(()=> {
})
const form = reactive({
  date: today,
  type: '',
  class: '',
  detail: '',
  amount: 0
})
const typeOption = [
  {label: '收入', value: 'in'},
  {label: '支出', value: 'out'}
]
const calssOption = [
  {label: '食', value: 0},
  {label: '衣', value: 1},
  {label: '住', value: 2},
  {label: '行', value: 3}
]
const validators= {
  required: value => !!value || '必填'
}
const onSubmit = () => {
  formRef.value.validate().then(pass => {
    if(!pass) return
    console.log(form)
  })
}

</script>

<style scoped>
.w80 {
  width: 80%;
}
/deep/ .w-select__selection {
  text-align: inherit;
}
</style>
