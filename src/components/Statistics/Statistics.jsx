import React from 'react';
import { StatisticsList, StatisticsListItem } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <StatisticsList>
        <StatisticsListItem>Good: {good}</StatisticsListItem>
        <StatisticsListItem>Bad: {bad}</StatisticsListItem>
        <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
        <StatisticsListItem>Total: {total}</StatisticsListItem>
        <StatisticsListItem>
          Positive feedback: {positivePercentage} %
        </StatisticsListItem>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
