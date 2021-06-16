//let exampleEl = document.querySelector('.modal-body__film-session__item')
//new bootstrap.Popover(exampleEl);

var popoverTriggerList = [].slice.call(document.querySelectorAll('.modal-body__film-session__item'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})
