import axiosBase from 'axios'
export const axios = axiosBase.create({
  baseURL:
    'https://script.google.com/macros/s/AKfycbz_FywA5T97mysGudnUE63TyqW78LUFHlNXJ46_qM27o-_-fDJ_q-TLHxwjjxFYLVua/exec',
  headers: {
    'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
})
