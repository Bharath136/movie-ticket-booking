const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    type: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});


const movieSchema = new mongoose.Schema({
    imageUrl:{type:String, required: true},
    title: { type: String, required: true },
    genre: { type: String, required: true },
    duration: { type: Number, required: true },
    releaseDate: { type: Date, required: true },
    director: { type: String, required: true },
    cast: [String],
    language: { type: String, required: true },
    rating: { type: Number, required: true },
    ticketPrice: { type: Number, required: true },
    theatre: {
      type: [{
        name: { type: String, required: true },
        timings: { type: String, required: true },
        location: {type: String, required: true},
        ticketPrice: {type: Number, required: true},
        seatsAvailable: { type: Number, required: true },
        reservedSeats: [{
            seat: { type: String, required: true }
          }],
      }],
      required: true
    }
  });
  

const theatreSchema = new mongoose.Schema({
    theatreName: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    password: { type: String, required: true },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    theatre: { type: mongoose.Schema.Types.ObjectId, ref: 'Theatre', required: true },
    totalPrice: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    showtime: { type: Date, required: true },
    seatNumbers: [{ type: String, required: true }],
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, default: 'pending' }
});

const Users = mongoose.model('User', userSchema);
const Movie = mongoose.model('Movie', movieSchema);
const Theatre = mongoose.model('Theatre', theatreSchema);
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { Users, Movie, Theatre, Booking };
