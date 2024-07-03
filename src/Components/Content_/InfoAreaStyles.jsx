import styled from 'styled-components';

export const InfoArea = styled.div`
  text-align: center; /* Center align the text */
`;

export const ItemName = styled.p`
  font-size: 1rem; /* Adjust as needed */
  color: black;
  margin-bottom: 8px; /* Example margin, adjust as needed */
  text-decoration: none; /* Example, adjust based on your design */
  display: block; /* Example display, adjust based on your layout */
  margin-top: 8px;
`;

export const ItemPrice = styled.p`
  font-size: 1.5rem; /* Larger font size for the price */
  color: black; /* Amazon's price color */
  font-weight: bold; /* Make the price bold */
  margin-bottom: 8px;
  margin-left: 30px;
  display: flex;
`;

export const ItemColor = styled.p`
  font-size: 1rem; /* Smaller font size for the color description */
  color: #555; /* Lighter color for the color description */
  margin-top: 8px; /* Spacing above the color description */
  display: flex; /* To align color swatches horizontally */
  margin-left: 30px;
  flex-direction: column;
  align-items: left;
`;

export const ColorLabel = styled.span`
  display: flex;
`;

export const ColorSwatch = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${props => props.color || 'transparent'};
  border: 1px solid #ddd;
  border-radius: 50%;
  margin-bottom: 5px; /* Adjust margin to space elements properly */
`;