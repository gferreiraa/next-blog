import { Row, Col, Media, Image } from "react-bootstrap";

const AuthIntro = () => 
    <Row>
      <Col md="8">
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://avatars0.githubusercontent.com/u/21059225?s=460&u=de05cab4f56cb2707e1ed0a76e02feb9ad564b66&v=4"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
              My name is Getúlio Rafael Ferreira and I am an experienced
              software engineer and freelance developer. and this is my blog
              page.
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>

export default AuthIntro;