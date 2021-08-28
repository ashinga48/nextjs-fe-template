import { InfocardProps } from "@resanec/gui.sp.infocard"
// import { mapMarkerColors } from "@resanec/gui.sp.menucategories"
import { MenuFiltersProps } from "@resanec/gui.sp.menufilters"

export const mapData = require('../__mocks__/map_locations.json');

export const HeaderMenu: any = [
{
    label: 'Resanec',
    children: [
    {
        label: 'Resanec Platform',
        subLabel: 'Some more information',
        href: '#',
    },
    {
        label: 'Pricing',
        subLabel: 'pricing information',
        href: '#',
    },
    {
        label: 'Contact',
        subLabel: 'talk to us',
        href: '#',
    }
    ],
},
{
    label: 'Search Providers',
    href: '#',
},
]


export const FooterMenu: any = [
  {
    section: 'Company',
    submenu: [
      {
        label: 'Overview',
        uri: '#'
      },
      {
        label: 'Pricing',
        uri: '#'
      },
      {
        label: 'Contact',
        uri: '#'
      },
      {
        label: 'Partners',
        uri: '#'
      }
    ]
  },
  {
    section: 'Support',
    submenu: [
      {
        label: 'Help Center',
        uri: '#'
      },
      {
        label: 'Terms of Service',
        uri: '#'
      },
      {
        label: 'Legal',
        uri: '#'
      },
      {
        label: 'Privacy Policy',
        uri: '#'
      }
    ]
  },
  {
    section: 'Follow Us',
    submenu: [
      {
        label: 'Facebook',
        uri: '#'
      },
      {
        label: 'Twitter',
        uri: '#'
      },
      {
        label: 'Instagram',
        uri: '#'
      },
      {
        label: 'Linkedin',
        uri: '#'
      }
    ]
  }
]

export const home_invite_info_card: InfocardProps = {
  title: "Invite people to be part of your Support team",
  subtext: "Support Team members can review your plan and help you by making recommendations about how to improve your plan.",
  actions: [
    {
      label: 'Invite Support team',
      onclick: () => alert('hey there'),
      icon: null
    }
  ]
}


export const home_create_plan_info_card: InfocardProps = {
  title: "Create A New NDIS Support Pre-Plan ",
  subtext: `During this process you will answer questions about your 
  current living situation and what you  services you require
  to help to achieve your goals.`,
  actions: [
    {
      label: 'Create New Pre-plan',
      onclick: () => alert('hey there'),
      icon: null
    }
  ]
}

export const home_find_service_provider_info_card: InfocardProps = {
  title: "Find A Local Service Provider",
  subtext: `Search for Service Providers in 
  Your local area that help provide 
  You with the services you need.`,
  actions: [
    {
      label: 'Search for Providers',
      onclick: () => { alert('sdsd')},
      icon: null
    }
  ]
}


export const menu_filters: MenuFiltersProps = {
  onSubMenuClick: (...props) => alert(JSON.stringify(props)),
  menu: [
      {
          label: 'Accommodation',
          submenu: [
              "Daily Tasks/ Shared Living",
              "Specialised Disability Accomodation",
              "Accomodation and Tenancy",
              "Community Nursing Care"
          ]
      },
      {
          label: 'Transport',
          submenu: [
              "Vehicle Modifications",
              "Assistive Travel / Transport",
              "Specialised Driver Training"
          ]
      },
      {
          label: "Home Support",
          submenu: [
              "HouseHold Tasks",
              "Early Childhood Support",
              "Daily Tasks/ Shared Living",
              "Assistive Prod - Household Tasks",
              "Home Modifications",
              "Specialised Disability Accomodation",
              "Accomodation and Tenancy",
              "Therapeutic Support",
              "Behaviour Support",
              "Development Life Skills"
          ]
      },
      {
          label: "Education & Employment",
          submenu: [
              "Plan Management",
              "Support Coordination",
              "Assist Life Stage Transition",
              "Innov Community Participation",
              "Special Support Employment",
              "Assist Access / maintain Employment",
              "Specialised Driver Training",
              "Development Life Skills"
          ]
      },
      {
          label: "Personal Care",
          submenu: [
              "HouseHold Tasks",
              "Daily Tasks/ Shared Living",
              "Assist Personal Activities",
              "Early Childhood Support",
              "Plan Management",
              "Assistive Prod - Household Tasks",
              "Support Coordination",
              "Expert Physical Personal Training",
              "Interpretation & Translation",
              "Assistive Products - personal care and Safety",
              "Assist Life Stage Transition",
              "Assistive Equipment Recreation",
              "Personal mobility Equipment",
              "Assistive Travel / Transport",
              "Therapeutic Support",
              "Behaviour Support",
              "Assist Access / maintain Employment",
              "Development Life Skills"
          ]
      },
      {
          label: "Health Care & Counselling",
          submenu: [
              "Assistive Prod - Household Tasks",
              "Support Coordination",
              "Plan Management",
              "Expert Physical Personal Training",
              "Interpretation & Translation",
              "Assistive Products - personal care and Safety",
              "Assist Life Stage Transition",
              "Assistive Equipment Recreation",
              "Innov Community Participation",
              "Participate Community",
              "Community Nursing Care",
              "Therapeutic Support",
              "Behaviour Support",
              "Special Support Employment",
              "Assist Access / maintain Employment",
              "Development Life Skills",
              "Expert Physical Personal Training",
              "Assist Life Stage Transition",
              "Assistive Equip"
          ]
      },
      {
          label: "Community & Activities",
          submenu: [
              "Expert Physical Personal Training",
              "Assist Life Stage Transition",
              "Assistive Equipment Recreation",
              "Innov Community Participation",
              "Personal Activities High",
              "Group / centre Activities",
              "Participate Community",
              "Community Nursing Care",
              "Assist Access / maintain Employment",
              "Development Life Skills"
          ]
      },
      {
          label: "Equipment",
          submenu: [
              "Assistive Prod - Household Tasks",
              "Assistive Products - personal care and Safety",
              "Vehicle Modifications",
              "Home Modifications",
              "Assistive Equipment Recreation",
              "Hearing Equipment",
              "Custom Prosthetics",
              "Personal mobility Equipment",
              "Vision Equipment"
          ]
      },
      {
          label: "Modifications & Safety",
          submenu: [
              "Vehicle Modifications",
              "Home Modifications",
              "Hearing Equipment",
              "Custom Prosthetics",
              "Personal mobility Equipment",
              "Specialised Disability Accomodation",
              "Assistive Travel / Transport",
              "Specialised Driver Training"
          ]
      }
  ]
}


export const map_center = {
  lat: -37.813629,
  lng: 144.963058,
};

export const mapMarkerColors = {
  housing: '#C721DD',
  transport: '#00C6BF',
  education: '#FFB102',
  personal: '#814DC7',
  home: '#18806C',
  healthcare: '#DB740E',
  community: '#065BBE',
  equipment: '#A35532',
  modifications: '#CC3622',
}

export const map_markers: any = mapData.data.providerByName.map((eachSP: any) => ({
  lat: eachSP.location.coordinates[1],
  lng: eachSP.location.coordinates[0],
  title: eachSP.providerName,
  color: mapMarkerColors[eachSP.groups[0].toLowerCase().split(' ')[0]] || mapMarkerColors.home,
  label: eachSP.groups[0].toLowerCase().split(' ')[0] || 'home',
}));

export const spcard: any = {
  title: "Service Provider Title",
  services: [
    "High Intensity Daily Personal Activities",
    "Household tasks",
    "Interpreting and translation",
    "Participation in community/social and civic activities",
    "Assistive equipment for recreation",
    "Assistive products for household tasks",
  ],
  rating: 3.6,
  ratingCount: 112,
  actions: [
    {
      label: 'More Information',
      onclick: () => alert('hey there'),
      icon: null
    },
    {
      label: 'Contact',
      onclick: () => alert('hey there'),
      icon: null
    }
  ]
}