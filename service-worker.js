/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b815bf5a03e28e46f15344a46bb3b6ad"
  },
  {
    "url": "accounts.html",
    "revision": "9fef799b136286c7d99beff1937d1df1"
  },
  {
    "url": "assets/css/0.styles.470dc0eb.css",
    "revision": "acb76e224792d8b4dd44713e70524425"
  },
  {
    "url": "assets/img/bandwidth_viz_ru.ff3233ad.png",
    "revision": "ff3233ad88ea9a2070c24586e06c3b22"
  },
  {
    "url": "assets/img/bandwidth_viz.ff3233ad.png",
    "revision": "ff3233ad88ea9a2070c24586e06c3b22"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/viz_architecture_ru.bf11ed1a.png",
    "revision": "bf11ed1a507160838061acf4a3b1e700"
  },
  {
    "url": "assets/img/viz_architecture.bf11ed1a.png",
    "revision": "bf11ed1a507160838061acf4a3b1e700"
  },
  {
    "url": "assets/js/10.3b156f91.js",
    "revision": "22049fafe4c3d1bf7761232a156f8338"
  },
  {
    "url": "assets/js/11.99c464c1.js",
    "revision": "75d0e1e95141252cea135f41059b9e5d"
  },
  {
    "url": "assets/js/12.99779117.js",
    "revision": "40e2041b9799b338a5a06b4b84efbfe3"
  },
  {
    "url": "assets/js/13.9df18ed1.js",
    "revision": "5303bc14bab593f820011e7c761b9d47"
  },
  {
    "url": "assets/js/14.2e57906c.js",
    "revision": "6dc63715a948531057ff550235381648"
  },
  {
    "url": "assets/js/15.4b278a71.js",
    "revision": "bca1bea7fcf328b263e2ebfb3c8c0772"
  },
  {
    "url": "assets/js/16.ea5a4aa5.js",
    "revision": "2c56484cfacd605c96ff389ba4d0d1ba"
  },
  {
    "url": "assets/js/17.695172b3.js",
    "revision": "d72b64568275dcafbeb842a106e0e996"
  },
  {
    "url": "assets/js/18.d5275f3c.js",
    "revision": "7dd2575ebf4ef8a56e982be188bda59a"
  },
  {
    "url": "assets/js/19.01a04cc9.js",
    "revision": "794d0aace52be2b056a50e55c6a2d93a"
  },
  {
    "url": "assets/js/2.6ec4a6dc.js",
    "revision": "ae61696b20da9e7d23d85c271d392ed4"
  },
  {
    "url": "assets/js/20.d5e87d71.js",
    "revision": "e84af25f2633fa5399ed3fde86b107d4"
  },
  {
    "url": "assets/js/21.c8f9e136.js",
    "revision": "206b8ba2628ca074b3690c9116371b3c"
  },
  {
    "url": "assets/js/22.d9cd6a09.js",
    "revision": "610d1254ef904e6e2209d0b6b436bacf"
  },
  {
    "url": "assets/js/23.5a73bde3.js",
    "revision": "85f6c09e195ba78f708f359e9d08cf7d"
  },
  {
    "url": "assets/js/24.d485f667.js",
    "revision": "d653e9a03b2d679774ed3d2fb59ba2de"
  },
  {
    "url": "assets/js/25.945087be.js",
    "revision": "c44dbc6be5fa8e53e630a2788faa2199"
  },
  {
    "url": "assets/js/26.ac1e5149.js",
    "revision": "e35c67fc8222f4c36821c2baa7418bd9"
  },
  {
    "url": "assets/js/27.8a3db7fe.js",
    "revision": "a140276ec1a7ff46f361c82c3e999560"
  },
  {
    "url": "assets/js/28.759d12f3.js",
    "revision": "40714a1b558e90010f3905a7b879fb1d"
  },
  {
    "url": "assets/js/3.a7581b10.js",
    "revision": "dc1c037a661484afe12f83a3d157f295"
  },
  {
    "url": "assets/js/4.b88c0c4c.js",
    "revision": "19ee467510d3ea12800b7d5948c8f4d2"
  },
  {
    "url": "assets/js/5.0532f907.js",
    "revision": "250087888bb13dc8a58b9bcb2b3bf53a"
  },
  {
    "url": "assets/js/6.39edddee.js",
    "revision": "5b97f6aa16b8c25867b048ef8daa2bbc"
  },
  {
    "url": "assets/js/7.a59eadaa.js",
    "revision": "33f16999a31623aa24d480967016842f"
  },
  {
    "url": "assets/js/8.0d06d2d1.js",
    "revision": "1bfa87db9cc0c0b5d25f5a20f4ac7ef4"
  },
  {
    "url": "assets/js/9.71211837.js",
    "revision": "21d65a44334c2ac9cc7cdd4f672313ef"
  },
  {
    "url": "assets/js/app.8a7efcab.js",
    "revision": "04d9a05bdf63c804499bec17cacfda96"
  },
  {
    "url": "bandwidth.html",
    "revision": "db119ad99909bc316f37f9c4315919a2"
  },
  {
    "url": "check.html",
    "revision": "1a030d973d0a27572686b7c229979d1a"
  },
  {
    "url": "contacts.html",
    "revision": "0c4d0f06d26a40b62ce8ef5fb6fc4d2f"
  },
  {
    "url": "economy.html",
    "revision": "af5d376e3b0a5ac395775f28532c9bbe"
  },
  {
    "url": "escrow.html",
    "revision": "be561d1a5543d238c3d4e26f02961399"
  },
  {
    "url": "glossary.html",
    "revision": "686ed11e1adc36aceb4b88749ecc225f"
  },
  {
    "url": "icons/android-launchericon-144-144.png",
    "revision": "3d71d797d63fce8d2fc4593f20474578"
  },
  {
    "url": "icons/android-launchericon-192-192.png",
    "revision": "a187c3cb7d2850d8d2ad309383069a12"
  },
  {
    "url": "icons/android-launchericon-512-512.png",
    "revision": "2f237735be36c0a65016355344898b93"
  },
  {
    "url": "icons/ios-appicon-152-152.png",
    "revision": "7ab21321f466b31ce7dd4cae70de547e"
  },
  {
    "url": "index.html",
    "revision": "4163ee69d5cacb190a85b7d98c7615f7"
  },
  {
    "url": "logo.png",
    "revision": "6c652b9174dcf144ea60fe510cb6872f"
  },
  {
    "url": "ru/accounts.html",
    "revision": "47451285e40cb389719d63b848ab34a6"
  },
  {
    "url": "ru/bandwidth.html",
    "revision": "3fa8f2485e3a0533e3b5bb6af9bf0ce3"
  },
  {
    "url": "ru/check.html",
    "revision": "04764e318307b4da00cfbc7a18cb57a1"
  },
  {
    "url": "ru/contacts.html",
    "revision": "14f5fbbc447da4793ff1f306e8d7d683"
  },
  {
    "url": "ru/economy.html",
    "revision": "6d1ce34cd87f90a1d1e755e75d45c85d"
  },
  {
    "url": "ru/escrow.html",
    "revision": "31217b2c90a992c212b9e3377addceb7"
  },
  {
    "url": "ru/glossary.html",
    "revision": "432549309d95315248bfa80570f1bff4"
  },
  {
    "url": "ru/index.html",
    "revision": "0db90ae5adb4738e59fb4fa59cb9535e"
  },
  {
    "url": "ru/subscriptions.html",
    "revision": "1bbd3b48cf0656d86699e7f748a54277"
  },
  {
    "url": "ru/witnesses.html",
    "revision": "67f195e287ac401041fd88efda8e020f"
  },
  {
    "url": "subscriptions.html",
    "revision": "2b5813b22885c97e39929b6453304ad2"
  },
  {
    "url": "witnesses.html",
    "revision": "88d789c339f1518b5c45095fcda2170f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
