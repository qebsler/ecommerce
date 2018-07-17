import app from './app'

console.log(app('Daniel'))

// HMR reload
if (module.hot) {
   module.hot.accept(function () {
      window.location.reload()
   })
}