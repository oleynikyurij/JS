function maps() {
  let tab = document.getElementsByClassName("location-button__map"),
    // map =	document.getElementById('map'),
    adress = document.getElementById("adress"),
    getAdress = document.getElementsByClassName(
      "form-button__add button button__big"
		)[0];
		if (window.location.pathname != '/location.html') {
			return false;
		};

  //переключение табов
  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function() {
      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active-tab");
        // console.log(tab[i]);
      }
			this.classList.add("active-tab");
			if (tab[i].classList.contains('location-button__map-1') ) {
				//инициализация карты Google
				initGoogleMap();
			} else {
				initYandexMap();
			}
    });
	};
	initGoogleMap();
	//создание карты Google
  function initGoogleMap() {
    //создаём объект с координатами
    let myLatlng = new google.maps.LatLng(47.946246, 33.441013);
    let mapOption = {
      zoom: 16,
      //позиционируем карту
      center: myLatlng,
      //тип карты
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //инициализируем карту
    let map = new google.maps.Map(document.getElementById("map"), mapOption);
    //маркер
    let marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "Место торжества"
    });
    let contentString =
      "<div>Тут будет проходить торжественное мероприятие</div>";
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    //отображение маркера
    google.maps.event.addListener(marker, "click", function() {
      infowindow.open(map, marker);
		});
		
		//определение новых координат по адресу
    let geocoder = new google.maps.Geocoder();
    getAdress.addEventListener('click', function(e) {
      e.preventDefault();
			geocodeAdress(geocoder, map);
			adress.value = '';
    });
    function geocodeAdress(geocoder, map) {
      geocoder.geocode({ 'address': adress.value }, function(result, status) {
        if (status === "OK") {
          map.setCenter(result[0].geometry.location);
          let marker = new google.maps.Marker({
						position: result[0].geometry.location,
						map: map,
						title: "Место торжества"
          });
        } else {
          console.log(status);
        }
      });
    }
	}

	function initYandexMap(){  

		let map= new ymaps.Map("map", {
				center: [47.946246, 33.441013],
				zoom: 16
		}); 
		
		let mark = new ymaps.Placemark([47.946246, 33.441013]);
		map.geoObjects.add(mark);
}
	


  
}

module.exports = maps;
