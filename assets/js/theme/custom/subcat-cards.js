export default function categorySubcatCards() {
  const products = $('.card');
  if (!products.length) return;

  console.log()

  products.each((i, el) => {
    console.log($(el).data('categories'));
  });

  
}
