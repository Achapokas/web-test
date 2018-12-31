<template>
  <div class="all">
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="product-cards" v-for="array in sortedArray" :key="array"> {{ array.productTitle }}
        <div class="col-md-4 col-lg4 product" v-on:click="showImage" v-for="(data,index) in products" :key="index">
          <img :src="data.imageCheatsheet" class="img-fluid">
          <p class="product-title">{{ data.productTitle }} </p>
          <p class="product-text">{{ data.productText }}</p>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'all',
  data () {
    return {
      title: 'All Page',
      products:[{
        productTitle: 'conn',
        productText: 'IP, TCP, UDP, ICMP connection details'
      },
      {
        productTitle: 'conn history',
        productText: 'Orig UPPERCASE, Resp lowercase, compressed'
      },
      {
        productTitle: 'conn state',
        productText: 'A summarized state for each connection'
      },
      {
        productTitle: 'dns',
        productText: 'DNS query/response details',
        //image: require('../assets/dns-log.png'),
      },
      {
        productTitle: 'http',
        productText: 'HTTP request/replay details'
      },
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
	},
	computed: {
		sortedArray: function() {
			function compare(a, b) {
				if (a.productTitle < b.productTitle)
					return -1;
				if (a.productTitle > b.productTitle)
					return 1;
				return 0;
			}

			return this.products.sort(compare);
		}
	}
}
</script>

<style lang="scss" scoped>

</style>