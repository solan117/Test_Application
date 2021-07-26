import React, { Component } from 'react';
import { Container, Table  } from 'reactstrap';
import AppNavbar from './AppNavbar';

class CustomerView extends Component {

  constructor(props) {
    super(props);
    this.state = { customers: [{Rentals:[{Payments:[{Amount:null,"Payment Date":null,"Payment Id":null}]}]}]};
    }

  componentDidMount() {
    fetch("http://localhost:5000/customerList/"+this.props.match.params.id, { mode: "cors" })
            .then(response => response.json())
            .then(data => {this.setState({customers: [data]});})
            .catch((err) => { console.log(err)});
    
}
  
  render() {
    const {customers} = this.state;
    const {Rentals} = this.state.customers[0];
    console.log(Rentals)
        const customerView = customers.map(customer => {
          return <tr key={customer._id}>
            <td>{customer._id}</td>
            <td>{customer["First Name"]}</td>
            <td>{customer["Last Name"]}</td>
            <td>{customer.Address}</td>
            <td>{customer.City}</td>
            <td>{customer.Country}</td>
            <td>{customer.Phone}</td>
            <td>{customer.District}</td>
          </tr>
        });
        const movieView = Rentals.map(movie =>{
          return <tr key={movie.rentalId}>
            <td>{movie["Film Title"]}</td>
            <td>{movie.filmId}</td>
            <td>{movie.Payments[0].Amount}</td>
            <td>{movie.Payments[0]["Payment Date"]}</td>
            <td>{movie.Payments[0]["Payment Id"]}</td>
            <td>{movie["Rental Date"]}</td>
            <td>{movie.rentalId}</td>
            <td>{movie["Return Date"]}</td>
            <td>{movie.staffId}</td>
            
          </tr>
        });
        return (
          <div>
            <AppNavbar/>
            <Container fluid>
              <h3>Customer Details</h3>
              <Table className="mt-4">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Phone</th>
                    <th>District</th>   
                  </tr>
                </thead>
                <tbody>
                {customerView}
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

export default CustomerView;