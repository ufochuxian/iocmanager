import React from 'react'
// import {Row, Col} from 'antd'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from './components/Header'
import Footer from "./components/Footer";


export default class Admin extends React.Component {
  render() {
    return (
        <Grid fluid>
          <Row>
            <Col xs={6} md={3}>
              Hello, world!
            </Col>
          </Row>
        </Grid>
    );
  }
}