export default function () {

    if ($('.page-type-product').length || $('.page-type-cart').length) {
        let tabAlert;
        let tabTimeout;
        let titleSwitch = true;
        const originalTitle = document.title;
        let title = "";
    
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState != "visible") {
                tabTimeout = setTimeout(() => {
                    tabAlert = setInterval(() => {
                        if (titleSwitch) {
                            title = "!!! DON'T RACE OFF !!!";
                        } else {
                            title = "!!! COME BACK !!!";
                        }
                        document.title = title;
                        titleSwitch = !titleSwitch
                    }, 2000);
                }, 18000);
            } else {
                document.title = originalTitle;
                clearInterval(tabAlert);
                clearTimeout(tabTimeout);
            }
        });
    }
}