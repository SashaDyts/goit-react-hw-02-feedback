import React from 'react';
import { ButtonsList, ButtonsListItem, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ data, onButtonClick }) => {
  //   console.log(data);
  return (
    <>
      <ButtonsList>
        {data.map(name => {
          return (
            <ButtonsListItem key={name}>
              <Button
                type="button"
                onClick={() => {
                  onButtonClick(name);
                }}
              >
                {name}
              </Button>
            </ButtonsListItem>
          );
        })}
      </ButtonsList>
    </>
  );
};

FeedbackOptions.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
