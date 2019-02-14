# PANIC BUTTON

When nothing works, there is one solution left. Panic Button!!!!

## to install 

`npm i panic-button -s`

## Example 

See `docs` folder

```javascript
import PanicButton from "panic-button";

PanicButton.aaaa();

```

## demo 

[demo](https://qunabu.github.io/panic-button/)

## Settings 

You can pass some settings in the `aaaa` method 

```javascript 
  settings: {
    sound: 'https://freesound.org/data/previews/348/348310_6165769-lq.mp3', // AAAAA sound
    img: 'https://i.imgur.com/rwNqqt7.gif', // AAAAA gify 
    timeout: 2000, // HOW LONG DOES AAAA LAST on the PAGE
    giphyApiKey: '', // https://developers.giphy.com/ GIPHY API KEY
    giphyQuery: 'panic' // GIPHY API KE query, eg https://giphy.com/search/panic
  },
```

Example 

```javascript
PanicButton.aaaa({
    sound: 'https://freesound.org/data/previews/348/348310_6165769-lq.mp3',
    img: 'https://i.imgur.com/rwNqqt7.gif', 
    timeout: 5000, 
    giphyApiKey: 'XXXXX',
    giphyQuery: 'wtf' 
});
```

## GIPHY

Once you provide a GIPHY API KEY each time you call `aaaa` a random gif will be shown, eg [demo](https://qunabu.github.io/panic-button/)