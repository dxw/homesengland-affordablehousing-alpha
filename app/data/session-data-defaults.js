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
  },
  journey_steps: [
   {
     "id": 1,
     "name": "Start application page",
     "img_url": "/public/images/15-01-2021/",
     "image": "start-application",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "start-application"
   },
   {
     "id": 2,
     "name": "Sign in",
     "img_url": "/public/images/15-01-2021/",
     "image": "Sign-in",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Sign-in"
   },
   {
     "id": 3,
     "name": "Landing page status before starting application",
     "img_url": "/public/images/15-01-2021/",
     "image": "Status",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Status"
   },
   {
     "id": 4,
     "name": "Landing page status after application is started",
     "img_url": "/public/images/15-01-2021/",
     "image": "Status2",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Status2"
   },
   {
     "id": 5,
     "name": "Confirm before you start",
     "img_url": "/public/images/15-01-2021/",
     "image": "Confirmation-before-starting",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Confirmation-before-starting"
   },
   {
     "id": 6,
     "name": "Task list landing page",
     "img_url": "/public/images/15-01-2021/",
     "image": "Task-list",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Task-list"
   },
   {
     "id": 7,
     "name": "Partnership",
     "img_url": "/public/images/15-01-2021/",
     "image": "Partnership",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Partnership"
   },
   {
     "id": 8,
     "name": "Where building what type of tenure",
     "img_url": "/public/images/15-01-2021/",
     "image": "Where_are_you_building",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Where_are_you_building"
   },
   {
     "id": 9,
     "name": "How many homes of each tenure type per region",
     "img_url": "/public/images/15-01-2021/",
     "image": "How_many_homes",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "How_many_homes"
   },
   {
     "id": 10,
     "name": "Working with delivery partner",
     "img_url": "/public/images/15-01-2021/",
     "image": "Delivery_partners_-_Yes",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Delivery_partners_-_Yes"
   },
   {
     "id": 11,
     "name": "Working with delivery partner - yes",
     "img_url": "/public/images/15-01-2021/",
     "image": "Delivery_partners",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Delivery_partners"
   },
   {
     "id": 12,
     "name": "Delivery partner add another",
     "img_url": "/public/images/15-01-2021/",
     "image": "Delivery_partner_-_add_another",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Delivery_partner_-_add_another"
   },
   {
     "id": 13,
     "name": "Delivery partner after adding second one",
     "img_url": "/public/images/15-01-2021/",
     "image": "Delivery_partner_-_added_another",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Delivery_partner_-_added_another"
   },
   {
     "id": 14,
     "name": "Edit delivery partner",
     "img_url": "/public/images/15-01-2021/",
     "image": "Delivery_partner_-_edit",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Delivery_partner_-_edit"
   },
   {
     "id": 15,
     "name": "Cost breakdown - index page",
     "img_url": "/public/images/15-01-2021/",
     "image": "Cost_breakdown",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Cost_breakdown"
   },
   {
     "id": 16,
     "name": "Cost breakdown - per region",
     "img_url": "/public/images/15-01-2021/",
     "image": "Cost_-_regional",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Cost_-_regional"
   },
   {
     "id": 17,
     "name": "Modern methods of construction",
     "img_url": "/public/images/15-01-2021/",
     "image": "MMC",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "MMC"
   },
   {
     "id": 18,
     "name": "Rural and community led",
     "img_url": "/public/images/15-01-2021/",
     "image": "Rural_and_community_led",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Rural_and_community_led"
   },
   {
     "id": 19,
     "name": "Brown and green field sites",
     "img_url": "/public/images/15-01-2021/",
     "image": "Brown_and_green_field",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Brown_and_green_field"
   },
   {
     "id": 20,
     "name": "Capital funding breakdown",
     "img_url": "/public/images/15-01-2021/",
     "image": "Funding",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Funding"
   },
   {
     "id": 21,
     "name": "Delivery forecast - index page",
     "img_url": "/public/images/15-01-2021/",
     "image": "Delivery_Forecast",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Delivery_Forecast"
   },
   {
     "id": 22,
     "name": "Delivery forecast - quarterly breakdown per year",
     "img_url": "/public/images/15-01-2021/",
     "image": "Delivery_Forecast_quarterly_per_year",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Delivery_Forecast_quarterly_per_year"
   },
   {
     "id": 23,
     "name": "Edit: Delivery forecast - quarterly breakdown per year",
     "img_url": "/public/images/15-01-2021/",
     "image": "Edit_quarterly_delivery_Forecast_per_year",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Edit_quarterly_delivery_Forecast_per_year"
   },
   {
     "id": 24,
     "name": "Development expenditure and drawdown",
     "img_url": "/public/images/15-01-2021/",
     "image": "Development_expenditure_and_Drawdown",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Development_expenditure_and_Drawdown"
   },
   {
     "id": 25,
     "name": "Why supporting evidence",
     "img_url": "/public/images/15-01-2021/",
     "image": "Why_-_supporting_evidence",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Why_-_supporting_evidence"
   },
   {
     "id": 26,
     "name": "Summary - review",
     "img_url": "/public/images/15-01-2021/",
     "image": "Summary",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Summary"
   },
   {
     "id": 27,
     "name": "Submit application",
     "img_url": "/public/images/15-01-2021/",
     "image": "Submit",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Submit"
   },
   {
     "id": 28,
     "name": "Confirmation page",
     "img_url": "/public/images/15-01-2021/",
     "image": "Confirmation_page",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Confirmation_page"
   },
   {
     "id": 29,
     "name": "Submitted application status",
     "img_url": "/public/images/15-01-2021/",
     "image": "Submitted_Application_Status",
     "pdf_url": "/public/images/15-01-2021/pdf/",
     "pdf": "Submitted_Application_Status"
   }
  ]

}
