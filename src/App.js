import "./styles.css";
import "antd/dist/antd.css";

import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import FormSizeDemo from "./Form";
import Hero from "./Hero";
import { Typography, List, Card } from "antd";

const { Title } = Typography;

const { Header, Footer, Content } = Layout;

export default function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "15px 15px" }}>
        <div className="site-layout-content">
          <Title style={{ textAlign: "center" }}>SendNSpend</Title>
          <Title style={{ textAlign: "center" }} level={2}>
            Choose your card program to get started
          </Title>
          <Row>
            <Col
              span={{ xs: 24, sm: 24, md: 12, lg: 12 }}
              xs={{ order: 2 }}
              sm={{ order: 2 }}
              md={{ order: 1 }}
              lg={{ order: 1 }}
            >
              <Hero />
            </Col>
            <Col
              span={{ xs: 24, sm: 24, md: 12, lg: 12 }}
              xs={{ order: 1 }}
              sm={{ order: 1 }}
              md={{ order: 2 }}
              lg={{ order: 2 }}
            >
              <FormSizeDemo style={{ width: "100%" }} />
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>SendNSpend ©2021</Footer>
    </Layout>
  );
}
