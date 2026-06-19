
document.querySelector('.south-btn').addEventListener('click', function (e) {
    e.preventDefault()

    let city = document.getElementById('cityFilter').value
    let category = document.getElementById('categoryFilter').value
    let bedrooms = document.getElementById('bedroomFilter').value
    let bathrooms = document.getElementById('bathroomFilter').value

    let properties = document.querySelectorAll('.property-item')
    let visibleCount = 0

    properties.forEach(function (property) {

        let propertyCity = property.dataset.city
        let propertyCategory = property.dataset.category
        let propertyBedrooms = property.dataset.bedrooms
        let propertyBathrooms = property.dataset.bathrooms

        let show = true

        if (city && propertyCity !== city) show = false
        if (category && propertyCategory !== category) show = false
        if (bedrooms && propertyBedrooms !== bedrooms) show = false
        if (bathrooms && propertyBathrooms !== bathrooms) show = false

        if (show) {
            property.style.display = 'block'
            visibleCount++
        } else {
            property.style.display = 'none'
        }
    })

    let message = document.getElementById('noResultsMessage')

    if (visibleCount === 0) {
        message.style.display = 'block'
    } else {
        message.style.display = 'none'
    }

})