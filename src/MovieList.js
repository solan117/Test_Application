import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: [], isLoading: true };
        }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch("http://localhost:5000/movieList", { mode: "cors" })
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data, isLoading: false }));
    }

    render() {
        const {movies, isLoading} = this.state;
    
        if (isLoading) {
          return <p>Loading...</p>;
        }
    
        const MovieList = movies.map(movie => {
          return <tr key={movie._id}>
            <td>{movie._id}</td>
            <td>{movie.Title}</td>
            <td>{movie.Category}</td>
            <td>{movie.Rating}</td>
            <td>
                <ButtonGroup>
                <Button size="sm" color="primary" tag={Link} to={"/movie/" + movie._id}>View</Button>
                </ButtonGroup>
            </td>
          </tr>
        });
    
        return (
          <div>
            <AppNavbar/>
            <Container fluid>
              <h3>Movie List</h3>
              <Table className="mt-4">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Rating</th>   
                  </tr>
                </thead>
                <tbody>
                {MovieList}
                </tbody>
              </Table>
            </Container>
          </div>
        );
      }
};
export default MovieList;