/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  $('.calculate-total input').on('change', function () {
    let total = 0
    $('.calculate-total input').each(function () {
      var amount = Number($(this).val())
      if (amount > 0) {
        total += amount
      }
    })
    $('.live-total').find('span').text(total.toLocaleString())
  })
})
