import React from 'react';
import Avatar from '../../../../../static/assets/profile/C Semo.png';
import './remove-modal.scss';

const RemoveModal = ({ show, name, email, onClose }) => {
  return (
    <div className={`modal-container ${show ? 'show' : ''}`} onClick={onClose}>
      <div
        className="modal-content-remove"
        onClick={(e) => e.stopPropagation()}>
        <div className="modal-body-remove">
          <div className="card d-flex flex-row">
            <div className="avatar">
              <div className="avatar-wrapper d-flex flex-column">
                <div className="avatar-box">
                  <img className="img img-fluid" src={Avatar} alt="name" />
                </div>
              </div>
            </div>

            <div className="remove-identity d-flex flex-column">
              <p>Jack Frost</p>
              <span>lorem@sunbeam.studio</span>
            </div>
          </div>
        </div>
        <p className="take-action"> Do You want to Remove this Teammate?</p>
        <div className=" d-flex flex-row justify-content-between action-remove">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="remove-button" onClick={onClose}>
            Remove User
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveModal;
