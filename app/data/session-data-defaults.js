/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  tasks: {
    checkEligibility: 'not_started',
    partnership: 'not_started',
    homesLocation: 'not_started',
    supportingEvidence: 'not_started',
    deliveryPartners: 'not_started',
    funding: 'not_started',
    businessPlanEffect: 'not_started'
  }

}
