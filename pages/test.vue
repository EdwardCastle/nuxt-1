<template>
  <div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option value="30">A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
  export default {
    name: "test",
    data (){
      return{
        selected:  null
      }
    }
  }
</script>

<style scoped>

</style>
