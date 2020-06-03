// Code MovieReviews Here
import React from "react";

// const Review = ({ headline, byline, link, summary_short }) => {
//   return (
      // {/* <div key={headline} className="review">
      //   <header>
      //     <a className="review-link" href={link.url}>
      //       {headline}
      //     </a>
      //     <br />
      //     <span className="author">{byline}</span>
      //   </header>
      //   <blockquote>{summary_short}</blockquote>
      // </div>; */}
//   );
// };

const Review = (props) => {
  const { headline, byline, link, summary_short } = props.review;
  return (
    <div>
      <div key={headline} className="review">
        <header>
          <a className="review-link" href={link.url}>
            {headline}
          </a>
          <br />
          <span className="author">{byline}</span>
        </header>
        <blockquote>{summary_short}</blockquote>
      </div>
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {/* {reviews.map(Review)} */}
    {reviews.map((review, idx) => {
      return <Review key={idx} review={review}/>
    })}
  </div>
);

MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;
