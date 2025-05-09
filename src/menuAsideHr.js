import {
  mdiAccountArrowRightOutline,
  mdiMonitor,
  mdiSquareEditOutline,
  mdiViewList,
  mdiBriefcaseOutline,
  mdiBullhorn,
  mdiChartLine,
  mdiPlus,
  mdiCalendar,
  mdiClock,
  mdiCalendarBadge,
  mdiVectorCircle,
  mdiAccountPlus,
  mdiAccountGroupOutline,
  mdiAccountAlertOutline,
  mdiPost,
  mdiBullhornOutline,
  mdiListStatus,
  mdiCheckOutline,
  mdiDirectionsFork
} from '@mdi/js'

export default [
  {
    to: '/Dashboard',
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  {
    label: 'Employee Management',
    icon: mdiAccountArrowRightOutline,
    menu: [
      { to: '/EmployeeManagement/AddEmployee', icon: mdiAccountPlus, label: 'Add Employee' },
      { to: '/EmployeeManagement/EmployeesList', icon: mdiAccountGroupOutline, label: 'Employees List' },
      {
        to: '/EmployeeManagement/EmployeesSchedule',
        icon: mdiCalendar,
        label: 'Employees Schedule'
      },
      {
        to: '/EmployeeManagement/TimeCard',
        icon: mdiClock,
        label: 'Time Card'
      },
      {
        to: '/EmployeeManagement/Leaves',
        icon: mdiCalendarBadge,
        label: 'Leaves'
      },
      {
        to: '/EmployeeManagement/Performance',
        icon: mdiChartLine,
        label: 'Performance'
      },
      {
        to: '/EmployeeManagement/CareerLifeCycle',
        icon: mdiVectorCircle,
        label: 'Career Life Cycle'
      }
    ]
  },

  {
    label: 'Organogram',
    icon: mdiSquareEditOutline,
    menu: [
      {
        to: '/Organogram/DefinePosition',
        icon: mdiAccountAlertOutline,
        label: 'Define Position'
      },
      {
        to: '/Organogram/PositonList',
        icon: mdiViewList,
        label: 'Position List'
      }
    ]
  },
  {
    label: 'Jobs',
    icon: mdiBriefcaseOutline,
    menu: [
      {
        to: '/Jobs/CreateJob',
        icon: mdiPlus,
        label: 'Create Job'
      },
      {
        to: '/Jobs/ListJob',
        icon: mdiViewList,
        label: 'Job List'
      },
      {
        to: '/Jobs/PostJob',
        icon: mdiPost,
        label: 'Post Job'
      }
    ]
  },
  {
    // to: '/responsive',
    label: 'Hiring',
    icon: mdiBullhornOutline,
    menu: [
      {
        to: '/Hiring/ApplicationStatus',
        icon: mdiListStatus,
        label: 'Application Status'
      },
      {
        to: '/Hiring/BackgroundCheck',
        icon: mdiCheckOutline,
        label: 'Background Check'
      },
      {
        to: '/Hiring/Orientation',
        icon: mdiDirectionsFork,
        label: 'Orientation'
      }
    ]
  },
  {
    label: 'Announcement',
    icon: mdiBullhorn,
    menu: [
      {
        to: '/Create/Announcement',
        icon: mdiPlus,
        label: 'Create Announcement'
      },
      {
        to: '/Announcement/List',
        icon: mdiViewList,
        label: 'Announcement List'
      }
    ]
  },
  {
    to: '/HRM/Reports',
    label: 'Reports',
    icon: mdiChartLine
  }
 
]
