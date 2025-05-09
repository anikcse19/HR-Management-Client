import { createRouter, createWebHistory } from 'vue-router'
import Style from '@/views/StyleView.vue'
import Home from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/AuthStore'

const routes = [
  {
    meta: {
      title: 'Unauthorized'
    },
    path: '/Unauthorized',
    name: 'Unauthorized',
    component: () => import('@/views/Unauthorized.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    meta: {
      title: 'Home'
    },
    path: '/',
    name: 'Home',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        meta: {
          title: 'Dashboard'
        },
        path: '/Dashboard',
        name: 'Dashboard',
        component: Home
      },
      {
        meta: {
          title: 'Tables',
          role: 'hr'
        },
        path: '/tables',
        name: 'tables',
        component: () => import('@/views/TablesView.vue')
      },
      // {
      //   meta: {
      //     title: 'HRM-Dashboard',
      //     role: 'hr'
      //   },
      //   path: '/HRM',
      //   name: 'HRM_Dashboard',
      //   component: () => import('@/views/HRM/Dashboard.vue')
      // },
      {
        meta: {
          title: 'HRM-EmployeeManagement-AddEmployee',
          role: 'hr'
        },
        path: '/EmployeeManagement/AddEmployee',
        name: 'HRM_EmployeeManagement_AddEmployee',
        component: () => import('@/views/HRM/EmployeeManagement/AddEmployee.vue')
      },
      {
        meta: {
          title: 'HRM-EmployeeManagement-EmployeesList',
          role: 'hr'
        },
        path: '/EmployeeManagement/EmployeesList',
        name: 'HRM_EmployeeManagement_EmpoloyeesList',
        component: () => import('@/views/HRM/EmployeeManagement/EmployeesList.vue')
      },
      {
        meta: {
          title: 'HRM-EmployeeManagement-EmployeesSchedule',
          role: 'hr'
        },
        path: '/EmployeeManagement/EmployeesSchedule',
        name: 'HRM_EmployeeManagement_EmployessSchedule',
        component: () => import('@/views/HRM/EmployeeManagement/EmployeesSchedule.vue')
      },
      {
        meta: {
          title: 'HRM-EmployeeManagement-TimeCard',
          role: 'hr'
        },
        path: '/EmployeeManagement/TimeCard',
        name: 'HRM_EmployeeManagement_TimeCard',
        component: () => import('@/views/HRM/EmployeeManagement/TimeCard.vue')
      },
      {
        meta: {
          title: 'HRM-EmployeeManagement-Leaves',
          role: 'hr'
        },
        path: '/EmployeeManagement/Leaves',
        name: 'HRM_EmployeeManagement_Leaves',
        component: () => import('@/views/HRM/EmployeeManagement/Leaves.vue')
      },
      {
        meta: {
          title: 'HRM-EmployeeManagement-Performance',
          role: 'hr'
        },
        path: '/EmployeeManagement/Performance',
        name: 'HRM_EmployeeManagement_Performance',
        component: () => import('@/views/HRM/EmployeeManagement/Performance.vue')
      },
      {
        meta: {
          title: 'HRM-EmployeeManagement-CareerLifeCycle',
          role: 'hr'
        },
        path: '/EmployeeManagement/CareerLifeCycle',
        name: 'HRM_EmployeeManagement_CareerLifeCycle',
        component: () => import('@/views/HRM/EmployeeManagement/CareerLifeCycle.vue')
      },
      {
        meta: {
          title: 'HRM-Organogram-DefinePosition',
          role: 'hr'
        },
        path: '/Organogram/DefinePosition',
        name: 'HRM_Organogram_DefinePosition',
        component: () => import('@/views/HRM/Organogram/DefinePosition.vue')
      },
      {
        meta: {
          title: 'HRM-Organogram-PositionList',
          role: 'hr'
        },
        path: '/Organogram/PositonList',
        name: 'HRM_Organogram_PositionList',
        component: () => import('@/views/HRM/Organogram/PositionList.vue')
      },
      {
        meta: {
          title: 'HRM-Jobs-CreateJob',
          role: 'hr'
        },
        path: '/Jobs/CreateJob',
        name: 'HRM_Jobs_CreateJob',
        component: () => import('@/views/HRM/Jobs/CreateJob.vue')
      },
      {
        meta: {
          title: 'HRM-Jobs-ListJob',
          role: 'hr'
        },
        path: '/Jobs/ListJob',
        name: 'HRM_Jobs_ListJob',
        component: () => import('@/views/HRM/Jobs/ListJob.vue')
      },
      {
        meta: {
          title: 'HRM-Jobs-PostJob',
          role: 'hr'
        },
        path: '/Jobs/PostJob',
        name: 'HRM_Jobs_PostJob',
        component: () => import('@/views/HRM/Jobs/PostJob.vue')
      },
      {
        meta: {
          title: 'HRM-Hiring-ApplicationStatus',
          role: 'hr'
        },
        path: '/Hiring/ApplicationStatus',
        name: 'HRM_Hiring_ApplicationStatus',
        component: () => import('@/views/HRM/Hiring/ApplicationStatus.vue')
      },
      {
        meta: {
          title: 'HRM-Hiring-BackgroundCheck',
          role: 'hr'
        },
        path: '/Hiring/BackgroundCheck',
        name: 'HRM_Hiring_BackgroundCheck',
        component: () => import('@/views/HRM/Hiring/BackgroundCheck.vue')
      },
      {
        meta: {
          title: 'HRM-Hiring-Orientation',
          role: 'hr'
        },
        path: '/Hiring/Orientation',
        name: 'HRM_Hiring_Orientation',
        component: () => import('@/views/HRM/Hiring/Orientation.vue')
      },
      {
        meta: {
          title: 'Create-Announcement',
          role: 'hr'
        },
        path: '/Create/Announcement',
        name: 'Create_Announcement',
        component: () => import('@/views/HRM/Announcement/CreateAnnouncement.vue')
      },
      {
        meta: {
          title: 'Announcement-List',
          role: 'hr'
        },
        path: '/Announcement/List',
        name: 'Announcement_List',
        component: () => import('@/views/HRM/Announcement/AnnouncementList.vue')
      },
      {
        meta: {
          title: 'HRM-Reports',
          role: 'hr'
        },
        path: '/HRM/Reports',
        name: 'HRM_Reports',
        component: () => import('@/views/HRM/Reports/Reports.vue')
      },
      {
        meta: {
          title: 'Time-Card-History',
          role: 'employee'
        },
        path: '/TimeCardHistory',
        name: 'Time_Card_History',
        component: () => import('@/views/EMS/TimeCardHistory.vue')
      },
      {
        meta: {
          title: 'Time-Card',
          role: 'employee'
        },
        path: '/TimeCard',
        name: 'Time_Card',
        component: () => import('@/views/EMS/TimeCard.vue')
      },
      {
        meta: {
          title: 'Projects',
          role: 'employee'
        },
        path: '/Projects',
        name: 'Projects',
        component: () => import('@/views/EMS/Projects.vue')
      },
      {
        meta: {
          title: 'Tasks',
          role: 'employee'
        },
        path: '/tasks',
        name: 'Tasks',
        component: () => import('@/views/EMS/Tasks.vue')
      },
      {
        meta: {
          title: 'Task-Details',
          role: 'employee'
        },
        path: '/task/details/:id',
        name: 'Task_Details',
        component: () => import('@/views/EMS/TaskDetails.vue')
      },
      {
        meta: {
          title: 'Leave-Management',
          role: 'employee'
        },
        path: '/leave/management',
        name: 'Leave_Management',
        component: () => import('@/views/EMS/LeaveManagement.vue')
      },
      {
        meta: {
          title: 'Attendance',
          role: 'employee'
        },
        path: '/attendance',
        name: 'Attendance',
        component: () => import('@/views/EMS/Attendance.vue')
      },
      {
        meta: {
          title: 'Announcement',
          role: 'employee'
        },
        path: '/announcement',
        name: 'Announcement',
        component: () => import('@/views/EMS/Announcement.vue')
      },
      {
        meta: {
          title: 'Create-Project',
          role: 'project_manager'
        },
        path: '/create/project',
        name: 'Create_Project',
        component: () => import('@/views/PMS/CreateProject.vue')
      },
      {
        meta: {
          title: 'Project-Add-Task',
          role: 'project_manager'
        },
        path: '/project/addTask',
        name: 'Project_Add_Task',
        component: () => import('@/views/PMS/Task/AddTask.vue')
      },
      {
        meta: {
          title: 'Project-Pending-Task',
          role: 'project_manager'
        },
        path: '/project/pendingTask',
        name: 'Project_Pending_Task',
        component: () => import('@/views/PMS/Task/PendingTask.vue')
      },
      {
        meta: {
          title: 'Project-Completed-Task',
          role: 'project_manager'
        },
        path: '/project/completedTask',
        name: 'Project_Completed_Task',
        component: () => import('@/views/PMS/Task/CompletedTask.vue')
      },
      {
        meta: {
          title: 'Current-Project',
          role: 'project_manager'
        },
        path: '/current/project',
        name: 'Current_Project',
        component: () => import('@/views/PMS/ProjectList/CurrentProjects.vue')
      },
      {
        meta: {
          title: 'Pending-Project',
          role: 'project_manager'
        },
        path: '/pending/project',
        name: 'Pending_Project',
        component: () => import('@/views/PMS/ProjectList/PendingProjects.vue')
      },
      {
        meta: {
          title: 'Completed-Project',
          role: 'project_manager'
        },
        path: '/completed/project',
        name: 'Completed_Project',
        component: () => import('@/views/PMS/ProjectList/CompletedProjects.vue')
      },
      {
        meta: {
          title: 'Project-Teams',
          role: 'project_manager'
        },
        path: '/project/teams',
        name: 'Project_Teams',
        component: () => import('@/views/PMS/Team/MyTeams.vue')
      },
      {
        meta: {
          title: 'Project-AddTeam',
          role: 'project_manager'
        },
        path: '/project/addTeam',
        name: 'Project_AddTeam',
        component: () => import('@/views/PMS/Team/AddTeam.vue')
      },
      {
        meta: {
          title: 'TeamDetails'
        },
        path: '/teamDetails',
        name: 'teamDetails',
        component: () => import('@/views/PMS/Team/TeamDetails.vue')
      },
      {
        meta: {
          title: 'Profile'
        },
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/ProfileView.vue')
      },
      {
        meta: {
          title: 'ProjectDetails'
        },
        path: '/projectDetails',
        name: 'projectDetails',
        component: () => import('@/views/EMS/ProjectDetails.vue')
      },
      {
        meta: {
          title: 'Ui'
        },
        path: '/ui',
        name: 'ui',
        component: () => import('@/views/UiView.vue')
      },
      {
        meta: {
          title: 'Responsive layout'
        },
        path: '/responsive',
        name: 'responsive',
        component: () => import('@/views/ResponsiveView.vue')
      },
      {
        meta: {
          title: 'Error'
        },
        path: '/error',
        name: 'error',
        component: () => import('@/views/ErrorView.vue')
      }
    ]
  }
]

var router = createRouter({
  routes,
  history: createWebHistory('/')
})
router.beforeEach(async (to, from) => {
  if (to.name == 'login' && useAuthStore().isAuthenticated) {
    return { name: 'Home' }
  } else if (!useAuthStore().isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
  if (to.meta.role) {
    if (useAuthStore().user?.role == to.meta.role) {
      console.log('em')
      return true
    } else if (to.name !== 'Unauthorized') {
      router.push({
        name: 'Unauthorized'
      })
    }
  }

  //   else if(useAuthStore().user?.role == 'hr') {
  //     return { name: 'HRM_Dashboard' }
  //   }
  //  else if (useAuthStore().user?.role == 'employee' && to.name !== 'login') {
  //     return { name: 'HRM_Dashboard' }
  //   }
})
export default router
