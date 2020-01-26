import React from "react";
import { PageHeader, Row, Col, Statistic } from "antd";

const Dashboard = ({
  advancesAmount,
  workersCount,
  documentsCount,
  processesCount,
  processAmount: { material, scrap, fuel, carbon },
  paymentsAmount,
  paymentsMonthlyCount,
  paymentsCount
}) => (
  <>
    <PageHeader ghost={false} title="Monthly statistic's"></PageHeader>

    <Row style={{ padding: "14px 24px" }}>
      <Col span={3}>
        <Statistic title="Processes" value={processesCount} />
      </Col>
      <Col span={3}>
        <Statistic title="Material" value={material} suffix="KG" />
      </Col>
      <Col span={3}>
        <Statistic title="Scrap" value={scrap} suffix="KG" />
      </Col>
      <Col span={3}>
        <Statistic title="Fuel" value={fuel} suffix="L" />
      </Col>
      <Col span={3}>
        <Statistic title="Carbon" value={carbon} suffix="KG" />
      </Col>
    </Row>
    <Row style={{ padding: "14px 24px" }}>
      <Col span={3}>
        <Statistic title="Advances" value={advancesAmount} precision={2} />
      </Col>
      <Col span={3}>
        <Statistic
          title="Workers Salary"
          value={paymentsAmount}
          precision={2}
          suffix="ZŁ"
        />
      </Col>
      <Col span={3}>
        <Statistic title="Workers Salary Count" value={paymentsMonthlyCount} />
      </Col>
    </Row>
    <PageHeader ghost={false} title="Overall statistic's"></PageHeader>
    <Row style={{ padding: "14px 24px" }}>
      <Col span={3}>
        <Statistic title="Workers" value={workersCount} />
      </Col>
      <Col span={3}>
        <Statistic title="Documents" value={documentsCount} />
      </Col>
      <Col span={3}>
        <Statistic title="Payments" value={paymentsCount} />
      </Col>
    </Row>
  </>
);

export default Dashboard;
