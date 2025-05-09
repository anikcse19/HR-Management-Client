import {
  mdiCloseCircleOutline,
  mdiMonitor,
  mdiCalendarCheck,
  mdiSquareEditOutline,
  mdiAlphaPCircleOutline,
  mdiCrowd,
  mdiClockTimeEightOutline,
  mdiBullhorn

} from '@mdi/js'

export default [
  {
    to: '/Dashboard',
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  {
    to: '/TimeCard',
    label: 'Time Card',
    icon: mdiClockTimeEightOutline
  },
  {
    to: '/TimeCardHistory',
    label: 'Time Card History',
    icon: mdiSquareEditOutline
  },

  {
    to: '/Projects',
    label: 'Projects',
    icon: mdiAlphaPCircleOutline
  },
  {
    to: '/tasks',
    label: 'Task',
    icon: mdiCalendarCheck
  },
  {
    to: '/leave/management',
    label: 'Leave Management',
    icon: mdiCloseCircleOutline
  },
  {
    to: '/attendance',
    label: 'Attendance',
    icon: mdiCrowd
  },

  {
    to: '/announcement',
    label: 'Announcement',
    icon: mdiBullhorn
  }

]
