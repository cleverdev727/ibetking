import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/desktop/Home.vue'
import Login from '../views/desktop/Login.vue'
import Signup from '../views/desktop/Signup.vue'
import Casino from '../views/desktop/Casino.vue'
import Account from '../views/desktop/Account.vue'
import Deposit from '../views/desktop/Deposit.vue'
import Withdraw from '../views/desktop/Withdraw.vue'
import Transactions from '../views/desktop/Transactions.vue'
import Statement from '../views/desktop/Statement.vue'
import Exposure from '../views/desktop/Exposure.vue'
import BetHistory from '../views/desktop/BetHistory.vue'
import Bonus from '../views/desktop/Bonus.vue'
import MobileHome from '../views/mobile/Home.vue'
import MobileLogin from '../views/mobile/Login.vue'
import MobileSignup from '../views/mobile/Signup.vue'
import MobileCasino from '../views/mobile/Casino.vue'
import MobileAccount from '../views/mobile/Account.vue'
import MobileDeposit from '../views/mobile/Deposit.vue'
import MobileWithdraw from '../views/mobile/Withdraw.vue'
import MobileTransactions from '../views/mobile/Transactions.vue'
import MobileStatement from '../views/mobile/Statement.vue'
import MobileExposure from '../views/mobile/Exposure.vue'
import MobileBetHistory from '../views/mobile/BetHistory.vue'
import MobileBonus from '../views/mobile/Bonus.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/mobile',
    component: MobileHome
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/mobile/login',
    component: MobileLogin
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/mobile/signup',
    component: MobileSignup
  },
  {
    path: '/casino',
    component: Casino
  },
  {
    path: '/mobile/casino',
    component: MobileCasino
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/deposit',
    component: Deposit
  },
  {
    path: '/withdraw',
    component: Withdraw
  },
  {
    path: '/transactions',
    component: Transactions
  },
  {
    path: '/statement',
    component: Statement
  },
  {
    path: '/exposure',
    component: Exposure
  },
  {
    path: '/bet-history',
    component: BetHistory
  },
  {
    path: '/bonus',
    component: Bonus
  },
  {
    path: '/mobile/account',
    component: MobileAccount
  },
  {
    path: '/mobile/deposit',
    component: MobileDeposit
  },
  {
    path: '/mobile/withdraw',
    component: MobileWithdraw
  },
  {
    path: '/mobile/transactions',
    component: MobileTransactions
  },
  {
    path: '/mobile/statement',
    component: MobileStatement
  },
  {
    path: '/mobile/exposure',
    component: MobileExposure
  },
  {
    path: '/mobile/bet-history',
    component: MobileBetHistory
  },
  {
    path: '/mobile/bonus',
    component: MobileBonus
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;