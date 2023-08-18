<template>
  <div class="gift">
    <img class="img-gift" src="../../assets/Lovepik_com-401489059-vector-gift-box.png" alt="imagem de dois presentes">
  </div>
</template>

<script>
export default {
    name: 'Gift'
}
</script>

<style>
.gift {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
}
.img-gift {
    width: 15rem;
    height: auto;    
}

</style>