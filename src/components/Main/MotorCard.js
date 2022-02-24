import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import PropTypes from 'prop-types';

const MotorCard = ({ motor, onClick }) => {
  const {
    name, image, description, mediumText,
  } = motor;
  return (
    <button type="button" className="bg-transparent borderless" onClick={() => { onClick(); }}>
      <div className="card borderless">
        <div className="card-image ">
          <img src={image} alt={name} className="motor-card-image" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted motor-card-description">{mediumText}</p>
          <p className="card-text text-muted motor-card-description">{description}</p>
          <p className="card-text d-flex justify-content-center">
            <div className="rounded-circle border border-muted border-2 card-icon-circle justify-content-center align-items-center d-flex mx-1 text-muted">
              <FaFacebookF />
            </div>
            <div className="rounded-circle border border-muted border-2 card-icon-circle justify-content-center align-items-center d-flex mx-1 text-muted">
              <BsTwitter />
            </div>
            <div className="rounded-circle border border-muted border-2 card-icon-circle justify-content-center align-items-center d-flex mx-1 text-muted">
              <BsVimeo />
            </div>
          </p>
        </div>
      </div>
    </button>
  );
};

MotorCard.propTypes = {
  motor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mediumText: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MotorCard;
