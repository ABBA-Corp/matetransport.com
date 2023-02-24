module.exports = {
  apps: [
    {
      name: 'matetransport.com',
      exec_mode: 'cluster',
      instances: 1, // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start -p 3010'
    }
  ]
}
