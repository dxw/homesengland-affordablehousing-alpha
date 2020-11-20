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
      total += Number($(this).val())
    })
    $('.cost-total').find('span').text(total.toLocaleString())
  })
})
