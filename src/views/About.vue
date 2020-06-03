<template>
  <div class="gohomenow">
    <yanhua></yanhua>
    <star></star>
  </div>
</template>

<script>
  import star from '@/components/star.vue'
  import yanhua from '@/components/yanhua.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      star,
      yanhua
    }
  }
</script>

<style>
  .gohomenow {
    height: 100%;
    width: 100%;
    background: url("~@/assets/bg_2.jpg");
    background-size:cover;
    background-repeat: no-repeat;
  }
</style>