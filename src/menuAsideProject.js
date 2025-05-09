import {
  mdiCheckOutline,
  mdiMonitor,
  mdiProgressAlert,
  mdiReceiptClockOutline,
  mdiPlus,
  mdiListBox,
  mdiListBoxOutline,
  mdiMicrosoftTeams,
  mdiAccountGroup,
  mdiCalendarCheck,
  mdiAccountMultiplePlus,
  mdiCheckboxMarkedCirclePlusOutline,
} from '@mdi/js'

export default [
  {
    to: '/Dashboard',
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  {
    to: '/create/project',
    label: 'Create Project',
    icon: mdiPlus
  },
  {
    label: 'Project List',
    icon: mdiListBox,
    menu: [
      {
        to: '/current/project',
        label: 'Current Projects',
        icon: mdiProgressAlert
      },
      {
        to: '/pending/project',
        label: 'Pending Projects',
        icon: mdiReceiptClockOutline
      },
      {
        to: '/completed/project',
        label: 'Completed Projects',
        icon: mdiCheckOutline
      }
    ]
  },
  {
    label: 'Team',
    icon: mdiMicrosoftTeams,
    menu: [
      {
        to: '/project/teams',
        label: 'My Teams',
        icon: mdiAccountGroup
      },
      {
        to: '/project/addTeam',
        label: 'Add Team',
        icon: mdiAccountMultiplePlus
      }
    ]
  },

  {
    label: 'Task',
    icon: mdiCalendarCheck,
    menu: [
      {
        to: '/project/addTask',
        label: 'Add Task',
        icon: mdiCheckboxMarkedCirclePlusOutline
      },
      {
        to: '/project/pendingTask',
        label: 'Pending Task',
        icon: mdiReceiptClockOutline
      },
      {
        to: '/project/completedTask',
        label: 'Completed Task',
        icon: mdiCheckOutline
      }
    ]
  },

]
