import React, { Component } from 'react';
import { Container, Table  } from 'reactstrap';
import AppNavbar from './AppNavbar';

class MovieView extends Component {

  constructor(props) {
    super(props);
    this.state = { movies: []};
    }

  componentDidMount() {
    fetch("http://localhost:5000/movieList/"+this.props.match.params.id, { mode: "cors" })
            .then(response => console.log(response.json()))
            .then(data => {this.setState({movies: [data]})})
            .catch((err) => { console.log(err)});    
}
  
  render() {
    const {movies} = this.state;
    //const {Rentals} = this.state.customers[0];
    //console.log(Rentals)
        // const actorView = actors.map(customer => {
        //   return <tr key={customer._id}>
        //     <td>{customer._id}</td>
        //     <td>{customer["First Name"]}</td>
        //     <td>{customer["Last Name"]}</td>
        //     <td>{customer.Address}</td>
        //     <td>{customer.City}</td>
        //     <td>{customer.Country}</td>
        //     <td>{customer.Phone}</td>
        //     <td>{customer.District}</td>
        //   </tr>
        // });
        console.log(movies);
        const movieView = movies.map(movie =>{
          return <tr key={movie._id}>
            <td>{movie._id}</td>
            <td>{movie.Category}</td>
            <td>{movie.Description}</td>
            <td>{movie.Length}</td>
            <td>{movie.Rating}</td>
            <td>{movie["Rental Duration"]}</td>
            <td>{movie["Replacement Cost"]}</td>
            <td>{movie["Special Features"]}</td>
            <td>{movie.Title}</td>
          </tr>
        });
        return (
          <div>
            <AppNavbar/>
            <Container fluid>
              <h3>Movie Details</h3>
              <Table className="mt-4">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Length</th>
                    <th>Rating</th>
                    <th>Rental Duration</th>
                    <th>Replacement Cost</th>
                    <th>Special Features</th>
                    <th>Title</th>   
                  </tr>
                </thead>
                <tbody>
                {movieView}
                </tbody>
              </Table>
              <Table className="mt-4">
                <thead>
                  <tr>
                    <th>Film Title</th>
                    <th>FlimId</th>
                    <th>Payment Amount</th>
                    <th>Payment Date</th>
                    <th>Payment Id</th>
                    <th>RentalDate</th>
                    <th>RentalId</th>
                    <th>ReturnDate</th>  
                    <th>StaffId</th>   
                  </tr>
                </thead>
                <tbody>
                { movieView }
                </tbody>
              </Table>
            </Container>
          </div>
        );
  }}

export default MovieView;