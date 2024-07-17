<script setup>
const handleClick = () => {
  alert("ボタンがクリックされました")
}

const mouseover = () => {
  alert("マウスオーバー")
}
</script>

<template>
  <h1>Sample4</h1>
  <button @click="handleClick">click</button>
  <button @mouseover="mouseover">mouseover</button>
</template>




