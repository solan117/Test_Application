import React, { Component } from "react";
import { Container, Table } from "reactstrap";
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = { customers: [], isLoading: true };
        }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch("http://localhost:5000/customerList", { mode: "cors" })
            .then((response) => response.json())
            .then((data) => this.setState({ customers: data, isLoading: false }));
    }

    render() {
        const {customers, isLoading} = this.state;
    
        if (isLoading) {
          return <p>Loading...</p>;
        }
    
        const customerList = customers.map(customer => {
          return <tr key={customer._id}>
            <td><Link to={"/customer/" + customer._id}>{customer._id}</Link></td>
            <td>{customer["First Name"]}</td>
            <td>{customer["Last Name"]}</td>
            <td>{customer.Address}</td>
            <td>{customer.City}</td>
            <td>{customer.Country}</td>
            <td>{customer.Phone}</td>
            <td>{customer.District}</td>
          </tr>
        });
    
        return (
          <div>
            <AppNavbar/>
            <Container fluid>
              <h3>Customer List</h3>
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
                {customerList}
                </tbody>
              </Table>
            </Container>
          </div>
        );
      }
};
export default CustomerList;