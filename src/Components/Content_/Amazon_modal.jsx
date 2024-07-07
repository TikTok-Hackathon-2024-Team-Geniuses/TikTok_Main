import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


export const AmazonBoxContainer = styled.div`
  background: white;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, .4);
  width: 200px;
  text-align: center;
`;
export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: black;
`;

export const ProductRating = styled.p`
  font-size: 12px;
  color: black;
  margin-bottom: 5px;
`;

export const StarContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const StarIcon = styled(FontAwesomeIcon)`
  color: #f8ce0b; /* Yellow color for stars */
  margin-right: 2px; /* Space between stars */
`;

export const StarRating = ({ rating }) => {
  // Parse the rating string to extract the numeric rating
  const numericRating = parseFloat(rating.split(" ")[0]);

  const solidStars = Math.floor(numericRating); // Number of solid stars
  const remainingStars = 5 - solidStars; // Number of regular stars

  return (
    <StarContainer>
      {[...Array(solidStars)].map((star, index) => (
        <StarIcon key={index} icon={solidStar} />
      ))}
      {[...Array(remainingStars)].map((star, index) => (
        <StarIcon key={solidStars + index} icon={regularStar} />
      ))}
      <span style={{ marginLeft: "5px" }}>{rating}</span>
    </StarContainer>
  );
};

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;
