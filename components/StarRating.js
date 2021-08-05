import * as React from "react";
import { Rating } from "react-native-ratings";

const StarRating = () => (
  <Rating
    type="custom"
    ratingCount={5}
    imageSize={15}
    ratingBackgroundColor="skyblue"
    ratingColor="red"
    tintColor="blue"
  />
);

export default StarRating;
