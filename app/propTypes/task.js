import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}).isRequired;
