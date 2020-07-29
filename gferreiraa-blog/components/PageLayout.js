import { Container } from "react-bootstrap";
import BlogNavbar from "./BlogNavbar";
import Footer from "./Footer";

export default function PageLayout({ children, className }) {
  return (
    <Container>
      <BlogNavbar />
      <div className={`page-wrapper ${className}`}>{children}</div>
      <Footer />
    </Container>
  );
}
