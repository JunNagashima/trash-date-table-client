<script setup lang="ts">
const testMsg = ref('')
const testTitle = 'タイトル2'
const testFunc = async () => {
  const apiUrl = `${useRuntimeConfig().public.apiUrl}/hello`
  const response = await fetch(apiUrl, {
    method: 'GET',
  })
  const responseBody = await response.json()
  testMsg.value = responseBody.message
}
onMounted(() => {
  testFunc()
})
</script>

<template>
  <div>
    <p>{{ testTitle }}</p>
    <p>
      {{ testMsg }}
    </p>
  </div>
</template>

<style scoped>

</style>
