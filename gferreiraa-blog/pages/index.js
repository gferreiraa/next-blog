import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthIntro from "components/AuthIntro";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";

export default function Home() {
  return (
    <PageLayout>
      <AuthIntro />
      <hr />
      <Row className="mb-5">
        <Col md="10">
          <CardListItem />
        </Col>
        <Col md="4">
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  );
}
