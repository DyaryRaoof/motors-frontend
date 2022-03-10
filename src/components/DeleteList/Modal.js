import PropTypes from 'prop-types';

const Modal = ({ onOKPressed }) => (
  <div>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to delete this motorcyle?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => onOKPressed()}>OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  onOKPressed: PropTypes.func.isRequired,
};

export default Modal;
