import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table } from "reactstrap";
import AppNavbar from './AppNavbar';

class MovieView extends Component {

  constructor(props) {
    super(props);
    this.state = { movie: {}, customers:[], Actors:[]};
    }

  componentDidMount() {
    fetch("http://localhost:5000/movieList/"+this.props.match.params.id, { mode: "cors" })
            .then(response => response.json())
            .then(data => {this.setState({movie: data.movies, customers: data.customers, Actors: data.movies.Actors })})
            .catch((err) => { console.log(err)});    
}
  
  render() {
    const {movie} = this.state;
    const {customers} = this.state;
    const {Actors} = this.state;
    const customerList = customers.map(customer => {
        return <tr key={customer._id}>
          <td><Link to={"/customer/" + customer._id}>{customer._id}</Link></td>
          <td>{customer["First Name"]}</td>
          <td>{customer["Last Name"]}</td>
        </tr>
      });
        const actorList = Actors.map(actor => {
          return <tr key={actor.actorId}>
            <td>{actor.actorId}</td>
            <td>{actor["First name"]}</td>
            <td>{actor["Last name"]}</td>
            
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
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Length</th>
                    <th>Rating</th>
                    <th>Rental Duration</th>
                    <th>Replacement Cost</th>
                    <th>Special Features</th>
                    
                  </tr>
                  
                </thead>
                <tbody>
                <tr key={movie._id}>
            <td>{movie._id}</td>
            <td>{movie.Title}</td>
            <td>{movie.Category}</td>
            <td>{movie.Description}</td>
            <td>{movie.Length}</td>
            <td>{movie.Rating}</td>
            <td>{movie["Rental Duration"]}</td>
            <td>{movie["Replacement Cost"]}</td>
            <td>{movie["Special Features"]}</td>
            
          </tr>
                </tbody>
              </Table>
              <h3>Actors of this movie</h3>
              <Table className="mt-4">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>   
                  </tr>
                </thead>
                <tbody>
                { actorList }
                </tbody>
              </Table>

              <h3>Customer Who rented this movie</h3>
              <Table className="mt-4">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>   
                  </tr>
                </thead>
                <tbody>
                { customerList }
                </tbody>
              </Table>
            </Container>
          </div>
        );
  }}

export default MovieView;