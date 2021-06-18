if (window.innerWidth > 768) {
    let popoverTriggerList = [].slice.call(document.querySelectorAll('.modal-body__film-session__item'))
    let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
}

