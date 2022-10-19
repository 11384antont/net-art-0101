async function getMapData() {
    const response = await fetch("/getmapkey");
    const data = await response.json();


    mapboxgl.accessToken = data.token;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [126.9740863, 37.5638561], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });
    const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([126.9740863, 37.5638561])
        .setHTML('<h1>1997~2004, 2009~2020</h1>')
        .addTo(map);
    const popup_two = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([100.6331108, 13.72459955])
        .setHTML('<h1>2004~2009</h1>')
        .addTo(map);
    const popup_three = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([-73.97967966, 40.69748789])
        .setHTML('<h1>2020~</h1>')
        .addTo(map);
}

getMapData();