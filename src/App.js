import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const bulbsArr = [
  {
    title: "Halco Dimmable 8W 2200K Vintage ST19 Filament LED Bulb",
    price: 25.78,
    imageUrl: "/img/bulbs/1.jpg",
  },
  {
    title:
      "Philips Dimmable 4.5W 2000K Vintage T10 Filament LED Bulb, Title 20",
    price: 10.99,
    imageUrl: "/img/bulbs/2.jpg",
  },
  {
    title: "Bulbrite 25W 120V T6 Nostalgic Decorative Bulb, E12 Base",
    price: 7.49,
    imageUrl: "/img/bulbs/3.jpg",
  },
  {
    title: "Bulbrite 60W 120V Grand Nostalgic Decorative Bulb, E26 Base",
    price: 35.99,
    imageUrl: "/img/bulbs/4.jpg",
  },
  {
    title: "Satco 40W 120V G25 Amber Filament, Nostalgic E26 Base",
    price: 5.99,
    imageUrl: "/img/bulbs/5.jpg",
  },
  {
    title: "Bulbrite 6W 120V Silicone Dipped S6 Decorative Flame E12 Base",
    price: 32.99,
    imageUrl: "/img/bulbs/6.jpg",
  },
  {
    title: "Satco 20W 120V T9 Vintage Decorative Bulb, E26 Base",
    price: 15.99,
    imageUrl: "/img/bulbs/7.jpg",
  },
  {
    title: "Bulbrite 60W 120V A19 Nostalgic Decorative Bulb, E26 Base",
    price: 7.99,
    imageUrl: "/img/bulbs/8.jpg",
  },
  {
    title: "Bulbrite 40W 120V Clear Antique Replica Globe Bulb, E26 Base",
    price: 12.95,
    imageUrl: "/img/bulbs/9.jpg",
  },
  {
    title:
      "Bulbrite Dimmable 2.5W 2100K Vintage T6 Filament LED Bulb, Enclosed Fixture Rated",
    price: 38.95,
    imageUrl: "/img/bulbs/10.jpg",
  },
  {
    title: "Satco Dimmable 4.5W 2700K T10 LED Filament Bulb",
    price: 40.95,
    imageUrl: "/img/bulbs/11.jpg",
  },
  {
    title:
      "Bulbrite 40W 130V Satin ThreadSpun Antique Decorative Bulb, E26 Base",
    price: 15.95,
    imageUrl: "/img/bulbs/12.jpg",
  },
  {
    title: "Halco Dimmable 4.5W 2700K T14 Filament LED Bulb",
    price: 9.95,
    imageUrl: "/img/bulbs/13.jpg",
  },
  {
    title: "Bulbrite 40W 120V T9 Nostalgic Spiral Decorative Bulb, E26 Base",
    price: 7.95,
    imageUrl: "/img/bulbs/14.jpg",
  },
  {
    title: "Bulbrite 60W 120V ET25 Grand Nostalgic Decorative Bulb, E26 Base",
    price: 37.95,
    imageUrl: "/img/bulbs/15.jpg",
  },
  {
    title: "Bulbrite 25W 120V A23 Nostalgic Decorative Bulb, E26 Base",
    price: 8.95,
    imageUrl: "/img/bulbs/16.jpg",
  },
  {
    title:
      "Satco 25W Amber Filament Nostalgic Bent Tip Decorative Bulb, E12 Base",
    price: 4.95,
    imageUrl: "/img/bulbs/17.jpg",
  },
  {
    title: "Bulbrite 40W 120V T14 Nostalgic Decorative Bulb, E26 Base",
    price: 8.95,
    imageUrl: "/img/bulbs/18.jpg",
  },
  {
    title: "Bulbrite 40 Watt, 120 Volt Amber 'Marble' Globe Bulb",
    price: 12.99,
    imageUrl: "/img/bulbs/19.jpg",
  },
  {
    title:
      "Philips Non-Dimmable 5.5W 2000K Vintage A50 Filament LED Bulb, Enclosed Rated",
    price: 26.99,
    imageUrl: "/img/bulbs/20.jpg",
  },
  {
    title:
      "Bulbrite 40W 130V Amber ThreadSpun Antique Decorative Bulb, E26 Base",
    price: 4.99,
    imageUrl: "/img/bulbs/21.jpg",
  },
  {
    title: "Westinghouse 3W 120V Flicker Flame Decorative Bulb, E12 Base",
    price: 2.99,
    imageUrl: "/img/bulbs/22.jpg",
  },
  {
    title:
      "Bulbrite 40W 130V Satin ThreadSpun Antique Decorative Bulb, E26 Base",
    price: 22.99,
    imageUrl: "/img/bulbs/23.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      {/* <Drawer /> */}
      <Header />
      <div className="content">
        <div className="search">
          <h1 className="title"> All Bulbs</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="bulbs">
          {bulbsArr.map((val) => (
            <Card
              title={val.title}
              price={val.price}
              imageUrl={val.imageUrl}
              onClick={() => console.log(val)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
