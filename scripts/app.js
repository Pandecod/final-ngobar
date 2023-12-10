const sidebar = document.querySelector('#sidebar');
const buttonToggler = document.querySelector('.navigation__toggler');
const buttonCloser = document.querySelector('.navigation__closer');
const Elemenprojek = document.querySelector('#value-projct-complete');
const Valuepro = document.querySelector('#value-experiance');
const elementNavigationMenus = document.querySelector('navigation__menus');

// value

const containerValue = {
  projekComplete: 420,
  yearExperience: '30+',
};
console.log(containerValue);

/**
 * Untuk menampilkan sidebar ketika diklik
 *
 * Cara baca:
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  sidebar.classList.remove('hide');
});

/**
 * Untuk menutup sidebar ketika diklik
 *
 * Cara baca:
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener('click', () => {
  sidebar.classList.remove('show');
  sidebar.classList.toggle('hide');
});

// inject

// Valueprojek.append("");
Elemenprojek.append(containerValue.projekComplete);

Valuepro.append(containerValue.yearExperience);

const navigationMenus = [
  {
    titel: 'Work',
    link: '/#',
  },
  {
    titel: 'About',
    link: '/#',
  },
  {
    titel: 'Service',
    link: '/#',
  },
  {
    titel: 'Contact',
    link: '/#',
  },
];

navigationMenus.map((navigation) => {});
