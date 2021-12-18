import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Avatar from '../../../../../static/assets/profile/C Semo.png';
import './edit-role.scss';
const EditRole = ({ show, onClose }) => {
  return (
    <div className={`modal-container ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content-role" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body-role">
          <div className="card d-flex flex-row">
            <div className="avatar">
              <div className="avatar-wrapper d-flex flex-column">
                <div className="avatar-box">
                  <img className="img img-fluid" src={Avatar} alt="name" />
                </div>
              </div>
            </div>

            <div className="edit-role d-flex flex-column">
              <p>Jack Frost</p>
              <span>lorem@sunbeam.studio</span>
            </div>
            <span className="role-close" onClick={onClose}>
              <IoMdClose />
            </span>
          </div>
          <div className="radio-wrap">
            <div className="radio-row d-flex flex-row">
              <span className="input-group">
                <input type="radio" aria-label="..." />
                <span>Partner</span>
              </span>
              <span className="input-group">
                <input type="radio" aria-label="..." />
                <span>Sales Mgr</span>
              </span>
            </div>
            <div className="radio-row d-flex flex-row">
              <span className="input-group">
                <input type="radio" aria-label="..." />
                <span>Sys.Mgr</span>
              </span>
              <span className="input-group">
                <input type="radio" aria-label="..." />
                <span>Payroll Mgr</span>
              </span>
            </div>
            <div className="radio-row d-flex flex-row">
              <span className="input-group">
                <input type="radio" aria-label="..." />
                <span>Accountant</span>
              </span>
              <span className="input-group">
                <input type="radio" aria-label="..." />
                <span>Project Mgr</span>
              </span>
            </div>
            <div className="radio-row d-flex flex-row">
              <span className="input-group">
                <input type="radio" aria-label="..." />
                <span>Observer</span>
              </span>
              <span className="input-group">
                <input type="radio" aria-label="..." />
                <span>Employee</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRole;
