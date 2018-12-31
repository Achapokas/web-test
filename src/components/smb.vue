<template>
  <div class="all">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="product-cards">
        <div class="col-md-4 col-lg4 product" v-on:click="showImage" v-for="(data,index) in products" :key="index">
          <p class="product-title">{{ data.productTitle }}</p>
          <p class="product-text">{{ data.productText }}</p>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'smb',
  data () {
    return {
      title: 'SMB Page',
      products:[
      {
        productTitle: 'dce rpc',
        productText: 'Details on DCE/RPC messages'
      },
      {
        productTitle: 'ntlm',
        productText: 'NT LAN Manager (NTLM)'
      },
      {
        productTitle: 'rdp',
        productText: 'Remote Desktop Protocol (RDP)'
      },
       {
        productTitle: 'smb files',
        productText: 'Details on SMB files'
      },
      {
        productTitle: 'smb mappings',
        productText: 'SMB mappings'
      }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
</style>