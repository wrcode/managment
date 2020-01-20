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
  Badge,
  Divider
} from "antd";
import moment from "moment";

const CreateWorker = ({ handleSubmit, editData, form }) => {
  const { getFieldDecorator } = form;
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Create Worker"
        extra={[
          <Button form="workerForm" key="submit" htmlType="submit">
            {editData ? "Update" : "Submit"}
          </Button>
        ]}
      ></PageHeader>

      <Form id="workerForm" onSubmit={handleSubmit}>
        <Row>
          <Col span={12}>
            <Form.Item label="Name">
              {getFieldDecorator("name", {
                initialValue: prop("name")(editData)
              })(<Input placeholder="Name" />)}
            </Form.Item>
            <Form.Item label="Surname">
              {getFieldDecorator("surname", {
                initialValue: prop("surname")(editData)
              })(<Input placeholder="Surname" />)}
            </Form.Item>
            <Form.Item label="Salary">
              {getFieldDecorator("salary", {
                initialValue: prop("salary")(editData)
              })(<Input placeholder="Salary" addonAfter="zł" />)}
            </Form.Item>
            <Form.Item label="Address">
              {getFieldDecorator("address", {
                initialValue: prop("address")(editData)
              })(<Input placeholder="Address" />)}
            </Form.Item>
          </Col>
          <Col span={11} offset={1}>
            <Form.Item label="Age">
              {getFieldDecorator("age", {
                initialValue: prop("age")(editData)
              })(<Input placeholder="Age" />)}
            </Form.Item>
            <Form.Item label="Position">
              {getFieldDecorator("position", {
                initialValue: prop("position")(editData)
              })(<Input placeholder="Position" />)}
            </Form.Item>
            <Form.Item label="Phone">
              {getFieldDecorator("phone", {
                initialValue: prop("phone")(editData)
              })(<Input placeholder="Phone" />)}
            </Form.Item>

            <Form.Item label="Agreement">
              {getFieldDecorator("agreement")(
                <DatePicker
                  placeholder={
                    prop("agreement")(editData) &&
                    moment(prop("agreement")(editData)).format("MMMM Do YYYY")
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

export default CreateWorker;
