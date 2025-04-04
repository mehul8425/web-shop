import Navigo from 'navigo';
import Home from './app/pages/home/home';
import About from './app/pages/about/about';
import Contact from './app/pages/contact/contact';
import ListProducts from './app/pages/list-products/list-products';
import CreateProduct from './app/pages/create-product/create-product';
import renderHeader from './app/components/header/header';

const router = new Navigo('/', { hash: false });

window.addEventListener('DOMContentLoaded', async () => {
  await renderHeader();

  router
    .on('/', Home)
    .on('/about', About)
    .on('/contact', Contact)
    .on('/list-products', ListProducts)
    .on('/create-product', CreateProduct)
    .notFound(() => {
      document.getElementById('app').innerHTML = '<h2>404 Not Found</h2>';
    })
    .resolve();

  document.addEventListener('click', (e) => {
    const target = e.target.closest('[route]');
    if (target) {
      e.preventDefault();
      router.navigate(target.getAttribute('route'));
    }
  });
});
