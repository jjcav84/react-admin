import React from 'react'
import { Card, Col, Row, View, Mask, CardBody, CardTitle, CardText, CardFooter, Fa } from 'mdbreact';

const ProfilePage =  () => {
  return (
    <React.Fragment>
        <Row className="justify-content-center">
        <Col>
        <section className="text-center pb-3">
          <Row className="d-flex justify-content-center">
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <View>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </View>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <View>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </View>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <View>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </View>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" xl="5" className="mb-3">
              <Card className="d-flex mb-5">
                <view-wrapper>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
                  <Mask overlay="white-slight"/>
                </view-wrapper>
                <CardBody>
                  <CardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </CardTitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <Fa icon="photo" className="ml-1"/>
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </section>
      </Col>
    </Row>
    </React.Fragment>
  );
}

export default ProfilePage;