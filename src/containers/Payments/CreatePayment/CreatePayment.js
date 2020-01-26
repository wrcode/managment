import React from "react";
import { prop } from "ramda";
import {
  PageHeader,
  Button,
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Select
} from "antd";
import moment from "moment";

const { MonthPicker } = DatePicker;
const { Option } = Select;

const CreatePayment = ({
  handleSubmit,
  editData,
  workers,
  form,
  advancesAmount,
  workerSalary
}) => {
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={editData ? "Update Payment" : "Create Payment"}
        extra={[
          <Button form="paymentForm" key="submit" htmlType="submit">
            {editData ? "Update" : "Submit"}
          </Button>
        ]}
      ></PageHeader>

      <Form
        id="paymentForm"
        style={{ padding: "0 25px" }}
        onSubmit={handleSubmit}
      >
        <Row>
          <Col span={12}>
            <Form.Item label="Date">
              {form.getFieldDecorator("date")(
                <DatePicker
                  placeholder={
                    prop("date")(editData) &&
                    moment(prop("date")(editData)).format("MMMM Do YYYY")
                  }
                />
              )}
            </Form.Item>
            <Form.Item label="Worker">
              {form.getFieldDecorator("worker", {
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
            <Form.Item label="Month">
              {form.getFieldDecorator("month")(
                <MonthPicker
                  placeholder={
                    prop("month")(editData) &&
                    moment(prop("month")(editData)).format("MMMM YYYY")
                  }
                />
              )}
            </Form.Item>
            <Form.Item
              label="Salary"
              extra="Generated from Worker (not recommended to change)"
            >
              {form.getFieldDecorator("salary", {
                initialValue: prop("salary")(editData) || workerSalary || 0
              })(<Input placeholder="Salary" />)}
            </Form.Item>
          </Col>
          <Col span={11} offset={1}>
            <Form.Item label="Hours">
              {form.getFieldDecorator("hours", {
                initialValue: prop("hours")(editData) || 0
              })(<Input placeholder="Hours" />)}
            </Form.Item>

            <Form.Item label="Deductions">
              {form.getFieldDecorator("deductions", {
                initialValue: prop("deductions")(editData) || 0
              })(<Input placeholder="Deductions" />)}
            </Form.Item>

            <Form.Item
              label="Advances"
              extra="Generated from Advances (not recommended to change)"
            >
              {form.getFieldDecorator("advances", {
                initialValue: prop("advances")(editData) || advancesAmount
              })(<Input placeholder="0" />)}
            </Form.Item>
            <Form.Item style={{ display: "none" }}>
              {form.getFieldDecorator("id", {
                initialValue: prop("id")(editData)
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CreatePayment;
