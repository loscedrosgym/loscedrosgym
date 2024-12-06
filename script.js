function initMap() {
    //const gymLocation = { lat: -34.95614098749743, lng: -57.95997854364555 };
    //const gymLocation = { lat: -34.956109, lng: -57.959979 };
    const gymLocation = { lat: -34.956229907226536, lng: -57.95985830059817 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: gymLocation,
    });

    const marker = new google.maps.Marker({
        position: gymLocation,
        map: map,
        title: "Los Cedros Gimnasio",
    });

    const infoWindowContent = `
        <div style="text-align: center;">
            <h5>Los Cedros Gimnasio</h5>
            <a href="https://www.google.com/maps?ll=-34.956239,-57.960019&z=20&t=m&hl=es-ES&gl=US&mapclient=apiv3&cid=13135505604116024537" target="_blank" style="color: blue; text-decoration: underline;">Ver en Google Maps</a>
        </div>
    `;

    const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent,
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

