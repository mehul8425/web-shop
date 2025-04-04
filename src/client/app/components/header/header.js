import headerTemplate from './header.ejs';

export default async function renderHeader() {
  document.getElementById('header').innerHTML = headerTemplate();
}
