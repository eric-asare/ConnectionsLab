// data to serve
let superCars = {
    lamborghini: {
        price: 30000,
        image: "https://eric-asare.github.io/ConnectionsLab/week6/images/lamborghini.jpeg",
        model: "Aventador"
    },
    ferrari: {
        price: 20000,
        image: "https://eric-asare.github.io/ConnectionsLab/week6/images/ferrari.jpeg",
        model: "Spider"
    },
    bugatti: {
        price: 10000,
        image: "https://eric-asare.github.io/ConnectionsLab/week6/images/bugatti.jpeg",
        model: "Chiron"
    }

}

// express setup
let express = require('express');

let app = express();

app.use('/', express.static('public'))

// Get all cars or cars with a min price
app.get('/cars', (req, res) => {
    let maxPriceSuperCars = {}
    let maxPrice = req.query.priceSmallerThan;

    for (carName in superCars) {
        let car = superCars[carName]

        if (car.price <= maxPrice) {
            maxPriceSuperCars[carName] = car;
        }
    }

    if (maxPrice) {
        res.json(maxPriceSuperCars);
    } else {
        res.json(superCars)
    }
})

// get a specific car
app.get('/cars/:car', (req, res) => {
    // parameters
    nameOfCar = req.params.car;
    if (!superCars[nameOfCar]) {
        res.json({
            error: "data not available"
        })
    }

    res.json(superCars[nameOfCar]);
})






app.listen(9000, () => {
    console.log("the server is up and running");
})