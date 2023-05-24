

# Mongoose Flights" Lab

## Intro

For this lab, lets create a database of Flights and use a model of Flights and Airports.

You'll begin by creating a `mongoose-flights` project using our usual commands (feel free to reference previous lessons for this!)
```sh
npm init -y
npm i mongoose
```

What folders and files we will we need to create as well?

## Exercises

1) Create a **config/database.js** module that connects to a database.


2) Create a Model of Airport with the following properties:

	| Property | Type |
	|---|---|
	| `name`| `String`|  (Logan, LaGuardia, Heathrow, O'Hare, Pearson...)
	| `location`| `String`| (Boston, New York, London, Chicago, Toronto...)
	| `code`| `String`|    (LGN, LGA, HRT, OHR, YYZ...)



3) Create a `Flight` Model with the following properties:

	| Property | Type |
	|---|---|
	| `airline`| `String`| ('American', 'Southwest', 'Delta'...)
	 |'flight number |`Integer`| 
	  |---|---| 
	   |---|---| 

12. Implement the following User Stories:
	- AAU, I want to view a list of all flights (`index` functionality) that displays each flight's airline, airport, flight no., and departure date/time (consider formatting the `departs` property).
	
	- AAU, I want to create flights by entering the information on a page (`new` functionality) that has a form and submitting it.

	- AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:
		- `ALL FLIGHTS`, and
		- `ADD FLIGHT`

#### Hints:

- Checkout the [`<input type="datetime-local">`
](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) to assist users in entering valid date/time values.

- In the form for adding a new Flight, use a `<select name="airport">` to assign the flight's `airport`. Since they don't change, it's okay to hard-code the `<option>` elements, e.g., `<option value="DEN" selected>`. Same for the `airline` property (use a `<select>`).

## Bonuses

1. Display the default departure date when displaying the new flight form.

	Hints:
	1. In the flight controller's `new` action, you could create an in-memory flight like this:<br>`const newFlight = new Flight();`<br>  This in-memory flight doc would have the default departure date set properly based on the logic in the function you assigned to `default`.
	2. Just like any other data you want to access/display in a view template, that data needs to be passed by the controller action when it calls `res.render`, however…
	3. Although an input of `type="datetime-local"` will display a date assigned to its `value` attribute, that date value needs to be formatted as a string matching this format: `yyyy-MM-ddThh:mm` (yes, a “T” character is used to separate the date portion from the time portion).  One way of obtaining the properly formatted string is to use the following approach:<br>

```js
const newFlight = new Flight();
// Obtain the default date
const dt = newFlight.departs;
// Format the date for the value attribute of the input
let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
res.render('flights/new', { departsDate });
```

2. Code these additional User Stories:
	- AAU, I want to view the list of flights by departure date in ascending order.
	
	- AAU, I want the flights in the list to be displayed using red text if the flight's departure date has passed.

