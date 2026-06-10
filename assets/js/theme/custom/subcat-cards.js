export default function categorySubcatCards() {
  const products = $('.card');
  if (!products.length) return;

  products.each((i, el) => {
    console.log($(el).data('categories'));
  });

  
}
