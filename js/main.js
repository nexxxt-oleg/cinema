if (window.innerWidth > 768) {
    let popoverTriggerList = [].slice.call(document.querySelectorAll('.modal-body__film-session__item'))
    let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
} else {

    let mobileSliderInfo = new Swiper("#mobileSliderInfo", {
        slidesPerView: "auto",
        spaceBetween: 10,
    });
    let mobSliderTab = new Swiper("#mobSliderTab", {
        slidesPerView: "auto",
        spaceBetween: 20,
    });

}

