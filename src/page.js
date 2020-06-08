import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserListRequest } from "./redux/action/UserAction";
import { Tab, Nav, Col, Row, Button } from "react-bootstrap";
import { Formik } from "formik";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compareSummary: [],
    };
  }
  componentWillMount() {
    const { userList } = this.props;
    userList();
  }

  getEmployeeList = () => {
    const { userDetails } = this.props;
    const { userListData } = userDetails;
    let newArray = []; 
    let uniqueObject = {}; 
    for (let i in userListData) { 
        let objTitle = userListData[i]['domain']; 
        uniqueObject[objTitle] = userListData[i]; 
    } 
    for (let i in uniqueObject) { 
        newArray.push(uniqueObject[i]); 
    } 
    return newArray;
  }

  render() {
    const { userDetails } = this.props;
    const { userListData } = userDetails;
    return (
      <div className="container">
        <Tab.Container id="left-tabs-example">
          <Row>
            <Col sm={3}>
              {userDetails.userListData &&
                userListData.map((item, index) => {
                  return (
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey={index}>{item.name}</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  );
                })}
            </Col>
            <Col sm={9}>
              {userDetails.userListData &&
                userListData.map((item, index) => {
                  return (
                    <Tab.Content>
                      <Tab.Pane eventKey={index}>
                        <Formik
                          initialValues={{
                            email: item.emailId,
                            name: item.name,
                            domain: item.domain,
                            employeeId: item.employeeId,
                            role: item.role,
                          }}
                          onSubmit={async (values) => {
                            await new Promise((resolve) =>
                              setTimeout(resolve, 500)
                            );
                            alert(JSON.stringify(values));
                          }}
                        >
                          {(props) => {
                            const {
                              values,
                              isSubmitting,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                            } = props;
                            return (
                              <form onSubmit={handleSubmit}>
                                <input
                                  id="name"
                                  type="text"
                                  value={values.name}
                                  disabled
                                />
                                <input
                                  id="email"
                                  type="text"
                                  value={values.email}
                                  disabled
                                />
                                <input
                                  id="employeeId"
                                  type="text"
                                  value={values.employeeId}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <input
                                  id="role"
                                  type="text"
                                  value={values.role}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <select
                                  name="domain"
                                  value={values.domain}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  style={{ display: "block", width: "100%", textAlign: "center" }}
                                >
                                 {this.getEmployeeList().map((e, key) => {
                                      return (
                                        <option key={key} value={e.domain}>
                                          {e.domain}
                                        </option>
                                      );
                                    })}
                                </select>
                                <Button type="submit" disabled={isSubmitting}>
                                  Submit
                                </Button>
                              </form>
                            );
                          }}
                        </Formik>
                      </Tab.Pane>
                    </Tab.Content>
                  );
                })}
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.UserData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  userList: (userData) => dispatch(getUserListRequest(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
