import React, { useState, useEffect } from "react";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Container,
  Modal,
  Input,
  UncontrolledAlert,
  Button,
  ModalHeader,
  ModalBody,
} from "reactstrap";

function Dashboard() {
  const navigate = useNavigate();
  const [header, updateHeader] = useState({
    headers: { "x-access-token": localStorage.getItem("jwttoken") },
  });
  const [tableUserList, setTableUserList] = useState([]);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState("");
  const [age, setAge] = useState("");
  const [mfirstName, setmFirstName] = useState("");
  const [mlastName, setmLastName] = useState("");
  const [memail, setmEmail] = useState("");
  const [mmobile, setmmobile] = useState("");
  const [mage, setmAge] = useState("");
  const [model, setModel] = useState(false);
  const [headmodel, setHeadmodel] = useState(false);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    let response = await axios.get(
      `http://localhost:8080/api/admin/get/all/user/list`,
      header
    );
    console.log(response);
    if (response.data.status) {
      setTableUserList(response.data.data);
      console.log(response.data.data);
    } else {
      navigate("/");
    }
  };

  const [winnersColumn, setWinnerColumn] = useState([
    {
      dataField: "id",
      text: "id",
      sort: "desc",
    },
    {
      dataField: "menu",
      isDummyField: true,
      editable: false,
      text: "Manage",
      formatter: (cellContent, user) => (
        <div className="d-flex gap-3">
          <Link className="text-success" to="#">
            <Button
              className="btn btn-success save-user"
              onClick={() => handleUserClick(user)}
            >
              edit
            </Button>
          </Link>
          <Link className="text-danger" to="#" style={{ marginLeft: "10px" }}>
            <Button onClick={() => handleToShowModal(user)}>delete</Button>
          </Link>
        </div>
      ),
    },
    {
      dataField: "firstName",
      text: "firstName",
      sort: "desc",
    },
    {
      dataField: "lastName",
      text: "lastName",
      sort: "desc",
    },
    {
      dataField: "age",
      text: "age",
      sort: "desc",
    },
    {
      dataField: "mobile",
      text: "mobile",
      sort: "desc",
    },
    {
      dataField: "email",
      text: "email",
      sort: "desc",
    },
  ]);
  const [winnersList, setWinnersList] = useState([
    {
      sno: "1",
      help: "help",
      paymentid: "SSU1636352243",
      pricingplan: "₹ 4,500",
      goldamount: "4/12",
      paymentmethod: "11-11-2021 / 09:12pm",
      mydate: "11-11-2021",
      time: "09-12pm",
      action: "SSU1636352243",
      method: "Visa",
    },
    {
      date: "10-08-2021",
      sno: "2",
      pricingplan: "₹ 3,800",
      goldamount: "4/8",
      paymentid: "SSU1636352243",
      amount: "$ 180",
      paymentmethod: "10-11-2021 / 05:12pm",
      help: "help",
      time: "05-40pm",
      mydate: "10-11-2021",
      action: "SSU1636352243",
      method: "MasterCard",
    },
    {
      sno: "3",
      paymentid: "SSU1636352243",
      pricingplan: "₹ 3,600",
      goldamount: "6/18",
      date: "10-08-2021",
      amount: "$ 180",
      paymentmethod: "10-11-2021 / 12:09pm",
      help: "help",
      time: "12-09pm",
      mydate: "10-11-2021",
      action: "SSU1636352243",
      method: "Paypal",
    },
    {
      sno: "4",
      pricingplan: "₹ 4,200",
      paymentid: "SSU1636352243",
      goldamount: "4/12",
      date: "10-08-2021",
      amount: "$ 180",
      paymentmethod: "09-11-2021 / 10:31am",
      help: "help",
      time: "10-31am",
      mydate: "09-11-2021",
      action: "SSU1636352243",
      method: "MasterCard",
    },
    {
      sno: "5",
      pricingplan: "₹ 4,500",
      goldamount: "4/8",
      paymentid: "SSU1636352243",
      date: "10-08-2021",
      amount: "$ 180",
      paymentmethod: "10-11-2021 / 12:09pm",
      transactionId: "TB123898389",
      help: "help",
      time: "09-12am",
      mydate: "11-11-2021",
      action: "SSU1636352243",
      method: "Visa",
    },
    {
      sno: "6",
      pricingplan: "₹ 3,800",
      goldamount: "6/18",
      paymentid: "SSU1636352243",
      date: "10-08-2021",
      amount: "$ 180",
      paymentmethod: "09-11-2021 / 10:31am",
      transactionId: "TB123898389",
      help: "help",
      time: "05-40pm",
      mydate: "10-11-2021",
      action: "SSU1636352243",
      method: "MasterCard",
    },
    {
      sno: "7",
      pricingplan: "₹ 3,600",
      goldamount: "4/12",
      paymentid: "SSU1636352243",
      date: "10-08-2021",
      amount: "$ 180",
      paymentmethod: "11-11-2021 / 09:12pm",
      transactionId: "TB123898389",
      help: "help",
      time: "12-09pm",
      mydate: "10-11-2021",
      action: "SSU1636352243",
      method: "Paypal",
    },
    {
      sno: "8",
      pricingplan: "₹ 4,200",
      goldamount: "4/8",
      paymentid: "SSU1636352243",
      date: "10-08-2021",
      amount: "$ 180",
      paymentmethod: "10-11-2021 / 11:12pm",
      transactionId: "TB123898389",
      help: "help",
      time: "10-31am",
      mydate: "09-11-2021",
      action: "SSU1636352243",
      method: "MasterCard",
    },
    {
      sno: "9",
      pricingplan: "₹ 4,500",
      goldamount: "6/18",
      paymentid: "SSU1636352243",
      date: "10-08-2021",
      amount: "$ 180",
      paymentmethod: "04-11-2021 / 09:12pm",
      transactionId: "TB123898389",
      help: "help",
      time: "10-31am",
      mydate: "09-11-2021",
      action: "SSU1636352243",
      method: "MasterCard",
    },
    {
      sno: "10",
      pricingplan: "₹ 3,800",
      goldamount: "4/12",
      paymentid: "SSU1636352243",
      date: "10-08-2021",
      amount: "$ 180",
      paymentmethod: "23-11-2021 / 09:12pm",
      transactionId: "TB123898389",
      help: "help",
      time: "10-31am",
      mydate: "09-11-2021",
      action: "SSU1636352243",
      method: "MasterCard",
    },

    {
      sno: "11",
      pricingplan: "₹ 3,600",
      goldamount: "4/12",
      paymentid: "SSU1636352243",
      date: "10-08-2021",
      amount: "$ 180",
      paymentmethod: "01-11-2021 / 09:12pm",
      transactionId: "TB123898389",
      help: "help",
      time: "10-31am",
      mydate: "09-11-2021",
      action: "SSU1636352243",
      method: "MasterCard",
    },

    {
      sno: "12",
      pricingplan: "₹ 4,200",
      goldamount: "4/12",
      paymentid: "SSU1636352243",
      date: "10-08-2021",
      amount: "$ 180",
      paymentmethod: "31-11-2021 / 09:12pm",
      transactionId: "TB123898389",
      help: "help",
      time: "10-31am",
      mydate: "09-11-2021",
      action: "SSU1636352243",
      method: "MasterCard",
    },
  ]);
  const { SearchBar } = Search;
  const pageOptions = {
    sizePerPage: 12,
    // totalSize: this.state.users.length, // replace later with size(users),
    custom: true,
  };
  const defaultSorted = [
    // {
    //   dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
    //   order: "desc", // desc or asc
    // },
  ];

  const handleUserClick = (arg) => {
    setId(arg.id);
    setmAge(arg.age);
    setmEmail(arg.email);
    setmFirstName(arg.firstName);
    setmLastName(arg.lastName);
    setmmobile(arg.mobile);
    setModel(true);
  };
  const handleToShowModal = (arg) => {
    setId(arg.id);

    setHeadmodel(true);
  };

  //  email, firstName, lastName, mobile, age
  const post = async () => {
    let response = await axios.post(
      `http://localhost:8080/api/admin/add/user`,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        mobile: mobile,
      },
      header
    );
    console.log(response);
    if (response.data.status) {
      getUserList();
      alert("User added successfully");
    } else {
      alert(response.data.message);
    }
  };

  const deleteFun = async () => {
    let response = await axios.delete(
      `http://localhost:8080/api/admin/delete/user/${id}`,

      header
    );
    console.log(response);
    if (response.data.status) {
      getUserList();
      setHeadmodel(false);
      alert("User deleted successfully");
    } else {
      alert(response.data.message);
    }
  };

  // id, email, firstName, lastName, mobile, age
  const updateFun = async () => {
    let response = await axios.patch(
      `http://localhost:8080/api/admin/update/user`,
      {
        id: id,
        email: memail,
        firstName: mfirstName,
        lastName: mlastName,
        mobile: mmobile,
        age: mage,
      },

      header
    );
    console.log(response);
    if (response.data.status) {
      getUserList();
      setModel(false);
      alert("User updated successfully");
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div>
      <Row className="align-items-center">
        <Modal id="modal_to-delete" isOpen={headmodel}>
          <ModalHeader> Are you sure you want to delete</ModalHeader>
          <ModalBody>
            <Button
              className="btn btn-danger mr-3"
              onClick={() => {
                setHeadmodel(!headmodel);
              }}
            >
              Cancel
            </Button>
            <Button className="btn btn-primary" onClick={deleteFun}>
              Ok
            </Button>
          </ModalBody>
        </Modal>
        <Col lg="3">
          <label>firstName</label>
          <Input
            type="text"
            className="form-control"
            placeholder="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label htmlFor="jobs-input" className="font-size-18">
            Last Name
          </label>
          <Input
            type="text"
            className="form-control"
            placeholder="last name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label htmlFor="jobs-input" className="font-size-18">
            age
          </label>
          <Input
            type="text"
            className="form-control"
            placeholder="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </Col>
        <Col lg="3">
          <label htmlFor="jobs-input" className="font-size-18">
            Mobile
          </label>
          <Input
            type="text"
            className="form-control"
            placeholder="mobile"
            value={mobile}
            onChange={(e) => {
              setmobile(e.target.value);
            }}
          />
          <label htmlFor="jobs-input" className="font-size-18">
            Email
          </label>
          <Input
            type="text"
            className="form-control"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            onClick={post}
            style={{ width: "150px", height: "40px", marginTop: "50px" }}
          >
            Submit
          </Button>
        </Col>
      </Row>
      <PaginationProvider
        pagination={paginationFactory(pageOptions)}
        keyField="id"
        columns={winnersColumn}
        data={tableUserList}
      >
        {({ paginationProps, paginationTableProps }) => (
          <ToolkitProvider
            keyField="id"
            columns={winnersColumn}
            data={tableUserList}
            search
          >
            {(toolkitprops) => (
              <React.Fragment>
                <div>
                  <div xl="12">
                    <div className="search-box">
                      <div className="position-relative">
                        <SearchBar {...toolkitprops.searchProps} />
                        <i className="bx bx-search-alt search-icon" />
                        <div className="shopSearchIcon1">
                          {/* <img src={search} alt="" /> */}
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <BootstrapTable
                        {...toolkitprops.baseProps}
                        {...paginationTableProps}
                        // selectRow={selectRow}
                        defaultSorted={defaultSorted}
                        classes={"table align-middle table-nowrap table-hover"}
                        bordered={false}
                        striped={false}
                        responsive
                      />
                      <Modal isOpen={model}>
                        <ModalHeader tag="h4">
                          User
                          <Button
                            onClick={() => setModel(!model)}
                            close
                          ></Button>
                        </ModalHeader>

                        <ModalBody>
                          <Row form>
                            <Col className="col-12">
                              <div className="mb-3">
                                <Input
                                  name="name"
                                  label="Name"
                                  type="text"
                                  placeholder="Name"
                                  value={mfirstName}
                                  onChange={(e) => {
                                    setmFirstName(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="mb-3">
                                <Input
                                  name="designation"
                                  label="LastName"
                                  type="text"
                                  placeholder="Last Name"
                                  value={mlastName}
                                  onChange={(e) => {
                                    setmLastName(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="mb-3">
                                <Input
                                  name="
                                            age"
                                  label="
                                            age"
                                  type="text"
                                  placeholder="
                                            age"
                                  value={mage}
                                  onChange={(e) => {
                                    setmAge(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="mb-3">
                                <Input
                                  name="
                                            mobile"
                                  label="
                                            mobile"
                                  type="text"
                                  placeholder="
                                            mobile"
                                  value={mmobile}
                                  onChange={(e) => {
                                    setmmobile(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="mb-3">
                                <Input
                                  name="
                                            email"
                                  label="
                                            email"
                                  type="text"
                                  placeholder="
                                            email"
                                  value={memail}
                                  onChange={(e) => {
                                    setmEmail(e.target.value);
                                  }}
                                />
                              </div>

                              {/* <Pre onClick={() => this.deletePreview()}>
                                <img src={deletee} alt="delete" />
                              </Pre> */}
                              {/* {this.state
                                                          .modalPreist !==
                                                        "" ? (
                                                          <Col lg="3">
                                                            <CardImages1>
                                                              <Cards>
                                                                <Preview>
                                                                  <img
                                                                    data-dz-thumbnail=""
                                                                    className="avatar-sm rounded bg-light"
                                                                    src={
                                                                      this.state
                                                                        .modalPreist
                                                                    }
                                                                  />
                                                                 
                                         
                                                                </Preview>
                                                              </Cards>
                                                            </CardImages1>
                                                          </Col>
                                                        ) : (
                                                         null
                                                        )} */}
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <br />
                              <div className="text-end">
                                <button
                                  type="submit"
                                  onClick={() => {
                                    updateFun();
                                  }}
                                  className="btn btn-success save-user"
                                >
                                  Update
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </ModalBody>
                      </Modal>
                    </div>
                  </div>
                </div>
                {/* <div className="align-items-md-center mt-30">
                        <div className="pagination pagination-rounded justify-content-end mb-2">
                          <PaginationListStandalone {...paginationProps} />
                        </div>
                      </div> */}
              </React.Fragment>
            )}
          </ToolkitProvider>
        )}
      </PaginationProvider>
    </div>
  );
}

export default Dashboard;
