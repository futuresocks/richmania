use richmandb;
db.dropDatabase();

db.albums.insert([{
  title: "I Jonathan",
  artist: "Jonathan Richman",
  year: 1992,
  songs: ["Parties in the U.S.A.", "Tandem Jump", "You Can't Talk to the Dude", "Velvet Underground", "I Was Dancing in the Lesbian Bar", "Rooming House on Venice Beach", "That Summer Feeling", "Grunion Run", "A Higher Power", "Twilight in Boston"],
  image: "https://upload.wikimedia.org/wikipedia/en/3/33/I%2C_Jonathan.jpg"
},
{
  title: "Rockin' and Romance",
  artist: "Jonathan Richman & The Modern Lovers",
  year: 1985,
  songs: ["The Beach", "My Jeans", "Down in Bermuda", "The U.F.O. Man", "I Must Be King", "Vincent van Gogh", "Walter Johnson", "I'm Just Beginning to Live", "The Fenway", "Chewing Gum Wrapper", "The Baltimores","Up in the Sky Sometime","Now Is Better Than Before"],
  image: "https://upload.wikimedia.org/wikipedia/en/2/2a/Rockin%27_%26_Romance.jpg"
},
{
  title: "The Modern Lovers",
  artist: "The Modern Lovers",
  year: 1976,
  songs: ["Roadrunner","Astral Plane","Old World","Pablo Picasso","She Cracked","Hospital", "Someone I Care About", "Girlfriend", "Modern World"],
  image: "https://upload.wikimedia.org/wikipedia/en/d/da/The_Modern_Lovers_%28album%29.jpg"
},
{
  title: "Jonathan Richman and the Modern Lovers",
  artist: "Jonathan Richman and the Modern Lovers",
  year: 1976,
  songs: ["Rockin' Shopping Center", "Back in the U.S.A.", "Important in Your Life", "New England", "Lonely Financial Zone", "Hi Dear", "Abominable Snowman in the Market", "Hey There Little Insect", "Here Come the Martian Martians", "Springtime", "Amazing Grace"],
  image: "https://upload.wikimedia.org/wikipedia/en/e/e2/Jonathanrichmanandthemodernlovers.jpg"
},
{
  title: "Modern Lovers Live",
  artist: "The Modern Lovers",
  year: 1978,
  songs: ["I'm A Little Airplane (live)", "Hey There Little Insect (live)", "Egyptian Reggae (live)", "Ice Cream Man (live)", "I'm A Little Dinosaur (live)", "My Little Kookenhaken (live)", "South American Folk Song (live)", "New England	(live)", "The Morning Of Our Lives (live)"],
  image: "https://www.musiconvinyl.com/fotos/2474_foto1_product_xl.jpg",
}
]);
