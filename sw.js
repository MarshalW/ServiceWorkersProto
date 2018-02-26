self.addEventListener("fetch", function (event) {
    // console.log(event.request)
    console.log('===>>get fetch event !! and update ~~')
})

self.addEventListener('install', event => {
    console.log('>>>service worker install ')
})