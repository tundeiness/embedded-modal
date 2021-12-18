import React, { useState } from 'react';
import { BiEnvelope } from 'react-icons/bi';
import TeamData from '../../../helper/team';
import Avatar from '../../../static/assets/profile/C Semo.png';
import RemoveModal from '../profile-team/edit-team/remove-modal/remove-modal';
import EditRoleModal from '../profile-team/edit-team/edit-role-modal/edit-role';
import { CgChevronUpO } from 'react-icons/cg';
import AddMember from '../profile-team/add-member/add-member';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import screenWidth from '../../../hooks/viewPortHook';
import './team.scss';

const team = () => {
  const [showRemove, setShowRemove] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const { width } = screenWidth();
  const breakpoint = 480;

  return (
    <section className="mx-lg-4 pb-md-5">
      <div className="row d-flex flex-column gx-0">
        <div className="col-12 col-md-12 col-lg-12 col-xl-8 d-flex flex-column team">
          <h4 className="mt-md-5 mb-md-4">Team</h4>
          <div className="row d-flex flex-wrap gx-0 mb-3 mb-md-0">
            {TeamData.map((item) => {
              const [dropdownOpen, setDropdownOpen] = useState(false);
              const toggle = () => setDropdownOpen((prevState) => !prevState);

              return (
                <div className="col-12 col-md-6 col-lg-6 gx-3 gy-3">
                  <div key={item.id} className="card">
                    <div className="d-flex flex-row justify-content-between justify-content-md-between pb-2">
                      <div className="d-flex flex-lg-row flex-column">
                        <div className="avatar d-flex flex-column ms-md-2 ms-lg-3 me-lg-2">
                          <div className="avatar-box pt-3">
                            <img
                              className="img img-fluid"
                              src={Avatar}
                              alt={item.name}
                            />
                          </div>
                        </div>
                        <div className="staff-identity d-flex flex-column pt-4">
                          <p>{item.name}</p>
                          <p>{item.role}</p>

                          {width > breakpoint ? (
                            <span className="d-inline-block mb-2">
                              <BiEnvelope className="mail" />{' '}
                              <span>{item.email}</span>
                            </span>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                      <div className="content-editor ps-md-0 pe-md-0 ps-lg-2 pe-lg-2">
                        <div className="content-editor-wrapper d-flex flex-column">
                          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle>
                              <IoEllipsisVerticalSharp />
                            </DropdownToggle>
                            <DropdownMenu>
                              <>
                                <li
                                  className="dropdown-menu__item"
                                  onClick={() => setShowRemove(!showRemove)}>
                                  Remove
                                </li>
                              </>
                              <>
                                <li
                                  className="dropdown-menu__item"
                                  onClick={() => setShowEdit(!showEdit)}>
                                  Edit Role
                                </li>
                              </>
                            </DropdownMenu>
                          </Dropdown>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}{' '}
          </div>
        </div>

        <EditRoleModal show={showEdit} onClose={() => setShowEdit(false)} />
        <RemoveModal show={showRemove} onClose={() => setShowRemove(false)} />
        <div className="row gx-0">
          <div className="col-12 col-md-12 col-lg-12 col-xl-8 d-flex flex-column  bottom-matter py-1 px-3 py-md-3 px-md-3">
            <div className="top-section pb-3">
              <span>Invite to Team</span>
              <CgChevronUpO className="chevron-up-icon" />
            </div>
            <p>
              Sit pretium adipiscing mi egestas vel nulla urna laoreet. Ipsum
              nibh consequat nisi porttitor suspendisse id ut. Elit, eget ac sed
              fringilla mattis.
            </p>
            <div className="btn-wrapper">
              <button
                className="add-member"
                onClick={() => setShowAdd(!showAdd)}>
                Add a Member
              </button>
            </div>
            <AddMember
              title="Add Team Mate"
              show={showAdd}
              onClose={() => setShowAdd(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default team;
