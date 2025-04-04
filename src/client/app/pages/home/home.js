import template from './home.ejs';

export default async function Home(route) {
  const data = await onInit(route);
  document.getElementById('app').innerHTML = template(data);
  onRender();
}

async function onInit(route) {
  return {}; // Any info you want to load
}

function onRender() {
  // Things to do after loading the page
}
