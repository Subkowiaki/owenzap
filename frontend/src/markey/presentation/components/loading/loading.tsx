import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactLoading from "react-loading";
import { MarkeyColors } from "../../markey-desing-system/markey_colors";
import { SubtitleH4 } from "../titles/titles";

export const Loading: React.FC = () => {
  return (
    <Row className="justify-content-md-center">
      <Col xs={5}></Col>
      <Col>
        <ReactLoading type="bars" color={MarkeyColors.brandPrimary} />
        <SubtitleH4 title="Aguarde.."/>
      </Col>
      <Col xs={3}></Col>
    </Row>
  );
}