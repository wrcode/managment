import React from "react";
import { prop } from "ramda";
import {
  PageHeader,
  Button,
  Form,
  Input,
  Row,
  Col,
  Select,
  DatePicker
} from "antd";
import moment from "moment";

const { MonthPicker } = DatePicker;

const CreateAdvance = ({ handleSubmit, editData, form, workers }) => {
  const { getFieldDecorator } = form;
  const { Option } = Select;
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={editData ? "Update Advance" : "Create Advance"}
        extra={[
          <Button form="advanceForm" key="submit" htmlType="submit">
            {editData ? "Update" : "Submit"}
          </Button>
        ]}
      ></PageHeader>

      <Form
        id="advanceForm"
        style={{ padding: "0 25px" }}
        onSubmit={handleSubmit}
      >
        <Row>
          <Col span={12}>
            <Form.Item label="Worker">
              {getFieldDecorator("worker", {
                initialValue: prop("worker")(editData)
              })(
                <Select placeholder="Choose Worker">
                  {workers.map(({ id, name, surname }) => (
                    <Option value={id}>
                      {name} {surname}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>

            <Form.Item label="Amount">
              {getFieldDecorator("amount", {
                initialValue: prop("amount")(editData)
              })(<Input placeholder="Amount" addonAfter="ZŁ" />)}
            </Form.Item>
          </Col>
          <Col span={11} offset={1}>
            <Form.Item label="Date">
              {getFieldDecorator("date")(
                <DatePicker
                  placeholder={
                    prop("date")(editData) &&
                    moment(prop("date")(editData)).format("MMMM Do YYYY")
                  }
                />
              )}
            </Form.Item>

            <Form.Item label="Month">
              {getFieldDecorator("month")(
                <MonthPicker
                  placeholder={
                    prop("month")(editData) &&
                    moment(prop("month")(editData)).format("MMMM YYYY")
                  }
                />
              )}
            </Form.Item>
            <Form.Item style={{ display: "none" }}>
              {getFieldDecorator("id", {
                initialValue: prop("id")(editData)
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CreateAdvance;
