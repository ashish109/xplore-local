'use strict';

app.constant('URL',{
	// baseUrl : 'http://localhost:3000/',
	baseUrl: 'http://192.168.1.100:3000/'
});

app.constant('OTP_URL',{
	baseUrl : 'http://2factor.in/API/V1/b5ec5f1b-fda3-11e6-9462-00163ef91450/'
});

app.constant('googleAPI',{
	key : 'AIzaSyCKyjAy5KGgALWUBz4kFL2C3ju2Fd4BUHM',
	mapsUrl : 'https://maps.googleapis.com/maps/api/place/nearbysearch/',
	imageUrl : 'https://maps.googleapis.com/maps/api/place/photo?photoreference='

	// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.937855,%2077.691381&keyword=hotel&radius=1500&key=AIzaSyCKyjAy5KGgALWUBz4kFL2C3ju2Fd4BUHM

	// https://maps.googleapis.com/maps/api/place/photo?photoreference=PHOTO_REFERENCE&sensor=false&maxheight=MAX_HEIGHT&maxwidth=MAX_WIDTH&key=YOUR_API_KEY

});