fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		 "X-RapidAPI-Host":  "quotes15.p.rapidapi.com",
		 "X-RapidAPI-Key":  "9de2263e54msh57383d13043c0d4p1c23aejsn4bb1855cfb27"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
	console.log(response.content);
})
.catch(err => {
	console.error(err);
});