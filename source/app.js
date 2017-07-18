(function () {
  'use strict'

  var options = INSTALL_OPTIONS

  window.NREUM = window.NREUM || {}

  if (!options.licenseKey || !options.applicationID) return

  window.NREUM.info = {
    beacon: 'bam.nr-data.net',
    errorBeacon: 'bam.nr-data.net',
    licenseKey: options.licenseKey,
    applicationID: options.applicationID,
    sa: 1
  }
}())
