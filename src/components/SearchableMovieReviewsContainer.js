import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(reviewData => {
      this.setState((prevState) => ({
        ...prevState,
        searchTerm: "",
        reviews: reviewData.results,
      }));
    })
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>Enter Search Term:</label>
          <br />
          <input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
