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
  version150121: [
    {
      image_url: "/public/images/15-01-2021/"
    },
    {
      pdf_url: "/public/images/15-01-2021/pdf/"
    }
  ],
  version220121: {
    image_url: "/public/images/22-01-2021/",
    pdf_url: "/public/images/22-01-2021/pdf/"
  },
  journey_steps_150121: [
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
 ],
  journey_steps_220121: [
    {
      "id": 1,
      "name": "Start application page",
      "narrative": "No change",
      "business_logic": "TBC",
      "file_name": "Start_application"
    },
    {
      "id": 2,
      "name": "Sign in",
      "narrative": "No change",
      "business_logic": "TBC",
      "file_name": "Sign-in"
    },
    {
      "id": 3,
      "name": "Landing page status before starting application",
      "narrative": "No change",
      "business_logic": "TBC",
      "file_name": "Status"
    },
    {
      "id": 4,
      "name": "Confirm before you start",
      "narrative": "Content is still under review as there are different requirements for applying not yet agreed",
      "business_logic": "TBC",
      "file_name": "Confirmation_before_starting"
    },
    {
      "id": 5,
      "name": "Landing page status after application is started",
      "narrative": "This is the page user sees after sgning in when the application was stared. The 'have completed and in progres' status is not important and can be skipped.",
      "business_logic": "TBC",
      "file_name": "Status_after_application_started"
    },
    {
      "id": 6,
      "name": "Task list landing page",
      "narrative": "Task list has changed a lot. Some of the steps were added, rearranged and some of them grouped under common headings.",
      "business_logic": "TBC",
      "file_name": "Task_list"
    },
    {
      "id": 7,
      "name": "Partnership",
      "narrative": "No change here, most likely will be a simple input type, with no database lookup",
      "business_logic": "TBC",
      "file_name": "Partnership"
    },
    {
      "id": 8,
      "name": "Where are you building",
      "narrative": "Changed. We moved where and what tenures into two steps. Added tenure types for supported rent options",
      "business_logic": "TBC",
      "file_name": "Where_are_you_building"
    },
    {
      "id": 9,
      "name": "What tenures",
      "narrative": "Changed. We moved where and what tenures into two steps. Added tenure types for supported rent options",
      "business_logic": "TBC",
      "file_name": "What_tenures"
    },
    {
      "id": 10,
      "name": "How many homes of each tenure type per region",
      "narrative": "No change (?)",
      "business_logic": "TBC",
      "file_name": "How_many_homes"
    },
    {
      "id": 11,
      "name": "Modern methods of construction number of homes",
      "narrative": "Tweaked the layout a bit. The content still needs to be refined as the categories split is very confusing",
      "business_logic": "TBC",
      "file_name": "MMC_number_of_homes"
    },
    {
      "id": 12,
      "name": "Rural and community led number of homes",
      "narrative": "Tweaked the layout a bit. The content still needs to be refined as the categories split is very confusing. The hierarchy of headings needs sorting out",
      "business_logic": "TBC",
      "file_name": "Rural_and_community_led_number"
    },
    {
      "id": 13,
      "name": "Brown and green field sites number of homes",
      "narrative": "Changed a bit. Added an option to provide other type of sites and number of homes. It would work in a similar way like adding a delivery partner",
      "business_logic": "TBC",
      "file_name": "Brown_and_green_field"
    },
    {
      "id": 14,
      "name": "Working with delivery partner",
      "narrative": "same",
      "business_logic": "TBC",
      "file_name": "Delivery_partners"
    },
    {
      "id": 15,
      "name": "Working with delivery partner - yes",
      "narrative": "same",
      "business_logic": "TBC",
      "file_name": "Delivery_partners-Yes"
    },
    {
      "id": 16,
      "name": "Delivery partner add another",
      "narrative": "same",
      "business_logic": "TBC",
      "file_name": "Delivery_partner-add_another"
    },
    {
      "id": 17,
      "name": "Delivery partner after adding second one",
      "narrative": "same",
      "business_logic": "TBC",
      "file_name": "Delivery_partner-added_another"
    },
    {
      "id": 18,
      "name": "Edit delivery partner",
      "narrative": "same",
      "business_logic": "TBC",
      "file_name": "Delivery_partner-edit"
    },
    {
      "id": 19,
      "name": "Working with SME's",
      "narrative": "New question.",
      "business_logic": "TBC",
      "file_name": "SMEs"
    },
    {
      "id": 20,
      "name": "Cost breakdown and grant required - index page",
      "narrative": "Tweaked layout and content quite a lot. Simplified the tables",
      "business_logic": "TBC",
      "file_name": "Cost_breakdown"
    },
    {
      "id": 21,
      "name": "Cost and grant regional all tenures",
      "narrative": "Changed a lot. Included all tenure types as an example . for each tenure type asks for average cost per home and grant required",
      "business_logic": "TBC",
      "file_name": "Cost-regional-all-tenures"
    },
    {
      "id": 22,
      "name": "Additional costs Modern Methods of Construction (MMC)",
      "narrative": "included average costs and average grant needed. There are outstanding questions to resolve onthis page on what data is needed",
      "business_logic": "TBC",
      "file_name": "MMC_cost"
    },
    {
      "id": 23,
      "name": "Additional costs community led and rural areas",
      "narrative": "Added the grant needed",
      "business_logic": "TBC",
      "file_name": "Rural_and_community_led_costs"
    },
    {
      "id": 24,
      "name": "Your delivery forecast - index page",
      "narrative": "Not much changed.We are waiting to confirm any business logic",
      "business_logic": "TBC",
      "file_name": "Delivery_Forecast"
    },
    {
      "id": 25,
      "name": "Delivery forecast -  starts and completions per year",
      "narrative": "Simplified the view. It was agreed that it needs to be only per year number.",
      "business_logic": "TBC",
      "file_name": "Delivery_Forecast_per_year"
    },
    {
      "id": 26,
      "name": "Development expenditure",
      "narrative": "Seperated this step from grant drawdown. Simplified the view",
      "business_logic": "TBC",
      "file_name": "Development_expenditure_"
    },
    {
      "id": 27,
      "name": "Amount of grant drawdown each year",
      "narrative": "Separated this step from development expenditure. Simplified the view",
      "business_logic": "TBC",
      "file_name": "Grant_drawdown"
    },
    {
      "id": 28,
      "name": "Capital funding breakdown",
      "narrative": "WIP. We're asking to confirm the options and the language on the page",
      "business_logic": "TBC",
      "file_name": "Capital_funding"
    },
    {
      "id": 29,
      "name": "Non grant funded homes and other questions",
      "narrative": "WIP. We're asking to confirm the questions and the language on the page. Might be split into multiple single question pages. Who knows ¯\\_(ツ)_/¯",
      "business_logic": "TBC",
      "file_name": "Non_grant_funded_homes"
    },
    {
      "id": 30,
      "name": "Why supporting evidence - strategic narrative",
      "narrative": "WIP. Split into two pages as questions will differ. Still waititn for the content and confirmation what will be asked",
      "business_logic": "TBC",
      "file_name": "Why-supporting_evidence_1"
    },
    {
      "id": 31,
      "name": "Why supporting evidence - qualitative assessment",
      "narrative": "WIP. Split into two pages as questions will differ. Still waititn for the content and confirmation what will be asked",
      "business_logic": "TBC",
      "file_name": "Why-supporting_evidence_2"
    },
    {
      "id": 32,
      "name": "Summary - review your answers",
      "narrative": "No change. It will need designing properly once we agree the steps",
      "business_logic": "TBC",
      "file_name": "Summary"
    },
    {
      "id": 33,
      "name": "Sign off - draft",
      "narrative": "WIP. Waiting for content from other people",
      "business_logic": "TBC",
      "file_name": "Signoff_draft"
    },
    {
      "id": 34,
      "name": "Submit application",
      "narrative": "WIP. Relies on the previous step. Might be turned into one",
      "business_logic": "TBC",
      "file_name": "Submit"
    },
    {
      "id": 35,
      "name": "Confirmation page",
      "narrative": "Same",
      "business_logic": "TBC",
      "file_name": "Confirmation_page"
    },
    {
      "id": 36,
      "name": "Submitted application status",
      "narrative": "Same",
      "business_logic": "TBC",
      "file_name": "Submitted_Application_Status"
    },
    {
      "id": 37,
      "name": "Draft - Long term application task list",
      "narrative": "New page - WIP for applicants applying for long term funding.",
      "business_logic": "TBC",
      "file_name": "Task_list-longer_term"
    },
    {
      "id": 38,
      "name": "Draft - Apply for long term landing page",
      "narrative": "New page - WIP for applicants applying for long term funding.",
      "business_logic": "TBC",
      "file_name": "Longer_term_input"
    }
  ]

}
