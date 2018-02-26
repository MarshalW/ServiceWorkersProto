self.addEventListener("fetch", function (event) {
    // console.log(event.request)
    console.log('===>>get fetch event !! and update ~~')
})

self.addEventListener('install', event => {
    event.waitUntil(
        Promise.resolve([1]).then(
            () =>
                console.log('install wait until ..ok')
        )
    )
    console.log('>>>service worker install !!!')
})

self.addEventListener('activate', event => {
    console.log('===>>service worker activated !!!')
})