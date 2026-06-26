export default function () {
    const dynoMap = fetch('https://store-fh9wsjv2.mybigcommerce.com/content/dynograph/dynograph-map.json').then(res => res.json()).then(res => {
        const productId = $('.productView').data('product-id');
        const map = res[productId];

        if (map) {
            getDynoData(map.graphCar, map.graphTitle, '/content/dynograph/dyno-graphs/' + map.stockFile, '/content/dynograph/dyno-graphs/' + map.moddedFile);

            $('.tab-dynograph').addClass('show');

            $('.tab-dynograph-content').addClass('show');

            $('.dynograph-init').each((i, el) => {
                $(el).on('click', () => {
                    $('.dynograph-wrapper').addClass('show');
                    console.log('clicked, re-rendered 1');
                    resizeDynoGraph();
                });
            });

            $('.tab-shipping').on('click', () => {
                $('.tab-dynograph-content').removeClass('show');
            });

            $('.tab-description').on('click', () => {
                $('.tab-dynograph-content').removeClass('show');
            });

            $('.tab-dynograph').on('click', () => {
                $('.tab-dynograph-content').addClass('show');
                console.log('clicked, re-rendered 3');
                resizeDynoGraph();
            });

            $(window).on('resize', resizeDynoGraph);
        }
    });
}