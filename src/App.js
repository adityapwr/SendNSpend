import "./styles.css";

// import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
// import FormSizeDemo from "./Form";
// import Hero from "./Hero";
// import { Typography, List, Card } from "antd";

// const { Title } = Typography;

// const { Header, Footer, Content } = Layout;

import Form from "./Form";
import CardGrid from "./Hero";

export default function App() {
  return (
    <div className="bg-light bg-gradient">
      <nav className="navbar navbar-light bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span>
              <img
                src="/images/logo.png"
                alt="SendNSpend"
                width="67"
                height="25"
                className="d-inline-block align-text-top"
              />
            </span>
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-xs-12 mx-auto my-2 order-2 order-sm-2 order-md-1 order-lg-1">
            <h5>Prepaid Card for Every Payment Need</h5>
            <h6>Choose your card program to get started</h6>
            <CardGrid />
          </div>
          <div className="col-sm-12 col-md-4 col-xs-12 mx-auto my-2 py-2 bg-light order-sm-1 order-1 order-md-2 order-lg-2">
            {/* <h5>Transacting made awesome</h5> */}
            <div class="card border-primary mb-3">
              <div class="card-header">
                Get in touch with our customer success team and get your
                institution your very own Prepaid Card.
              </div>
              <div class="card-body text-primary">
                <Form />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p class="text-center">© 2021. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
