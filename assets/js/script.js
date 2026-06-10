// ===== Burger menu =====
const iconBlock = document.getElementById('iconBlock')
const iconOpen = document.getElementById('iconOpen')
const iconClose = document.getElementById('iconClose')
const mainMenu = document.getElementById('mainMenu')

iconBlock.addEventListener('click', () => {
  iconOpen.classList.toggle('d-none')
  iconClose.classList.toggle('d-none')
  mainMenu.classList.toggle('menu-open')
})

// ===== Login modal =====
const loginBtn = document.getElementById('loginBtn')
const closeModal = document.getElementById('closeModal')
const modal = document.getElementById('modal')

loginBtn.addEventListener('click', () => {
  modal.classList.remove('d-none')
})

closeModal.addEventListener('click', () => {
  modal.classList.add('d-none')
})

// ===== Guarantee cards render =====
const guarantees = [
  { icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>', title: '100% Uptime Guarantee', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
  { icon: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>', title: 'Safe and Secured', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
  { icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>', title: 'Our Dedicated Support', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
  { icon: '<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/>', title: 'Domain Transfer', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
  { icon: '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>', title: 'DNS Control', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
  { icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>', title: 'Fast Loaded', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
]

const guaranteeList = document.getElementById('guaranteeList')
guaranteeList.innerHTML = guarantees.map(item => `
  <div class="guarantee-card col-1-2">
    <div class="card-icon">
      <svg viewBox="0 0 24 24">${item.icon}</svg>
    </div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  </div>
`).join('')

// ===== Pricing cards render =====
const plans = [
  { name: 'Free', price: '0', tagline: '100% free. Forever', bandwidth: '150 GB', storage: '100 GB', overage: '$1.00 / GB' },
  { name: 'Startup', price: '19', tagline: 'All features are included', bandwidth: '450 GB', storage: '400 GB', overage: '$2.00 / GB' },
  { name: 'Premium', price: '49', tagline: 'All features are included', bandwidth: '250 GB', storage: '200 GB', overage: '$5.00 / GB' },
  { name: 'Pro', price: '99', tagline: 'All features are included', bandwidth: '450 GB', storage: '400 GB', overage: '$20.00 / GB' },
]

const pricingList = document.getElementById('pricingList')
pricingList.innerHTML = plans.map(plan => `
  <div class="pricing-card">
    <p class="plan-name">${plan.name}</p>
    <div class="price-wrap">
      <span class="dollar">$</span>
      <span class="amount">${plan.price}</span>
    </div>
    <p class="plan-tagline">${plan.tagline}</p>
    <ul class="plan-features">
      <li><span>Enjoy All The Features</span></li>
      <li><strong>${plan.bandwidth}</strong><span>Bandwidth</span></li>
      <li><strong>${plan.storage}</strong><span>Storage</span></li>
      <li><span>${plan.overage}</span><span>Overages</span></li>
      <li><span>All features</span></li>
    </ul>
    <button class="btn-plan">Choose Plan</button>
  </div>
`).join('')

// ===== Tab switching =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'))
    this.classList.add('active')
    document.getElementById(this.dataset.tab).classList.add('active')
  })
})
