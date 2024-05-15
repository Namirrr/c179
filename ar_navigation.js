let coordinates = {}
$(document).ready(function() {
    get_coordinates()
})

function get_coordinates() {
    let searchParam = new URLSearchParams(window.location.search)
    if(searchParam.has('source') && searchParam.has('destination')) {
        let source = searchParam.get('source')
        let destination = searchParam.get('destination')

        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]

    } else {
        alert("Coordinates not selected.")
        window.history.back()
    }
}
