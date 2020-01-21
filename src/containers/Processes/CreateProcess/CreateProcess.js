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

const CreateProcess = ({ handleSubmit, editData, form, workers }) => {
  const { getFieldDecorator } = form;
  const { Option } = Select;
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={editData ? "Update Process" : "Create Process"}
        extra={[
          <Button form="processForm" key="submit" htmlType="submit">
            {editData ? "Update" : "Submit"}
          </Button>
        ]}
      ></PageHeader>

      <Form
        id="processForm"
        style={{ padding: "0 25px" }}
        onSubmit={handleSubmit}
      >
        <Row>
          <Col span={12}>
            <Form.Item label="Number">
              {getFieldDecorator("number", {
                initialValue: prop("number")(editData)
              })(<Input placeholder="Number" />)}
            </Form.Item>
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
            <Form.Item label="Material">
              {getFieldDecorator("material", {
                initialValue: prop("material")(editData)
              })(<Input placeholder="Material" addonAfter="KG" />)}
            </Form.Item>
            <Form.Item label="Fuel">
              {getFieldDecorator("fuel", {
                initialValue: prop("fuel")(editData)
              })(<Input placeholder="Fuel" addonAfter="L" />)}
            </Form.Item>
          </Col>
          <Col span={11} offset={1}>
            <Form.Item label="Carbon">
              {getFieldDecorator("carbon", {
                initialValue: prop("carbon")(editData)
              })(<Input placeholder="Carbon" addonAfter="KG" />)}
            </Form.Item>
            <Form.Item label="Scrap">
              {getFieldDecorator("scrap", {
                initialValue: prop("scrap")(editData)
              })(<Input placeholder="Scrap" addonAfter="KG" />)}
            </Form.Item>
            <Form.Item label="Overseer">
              {getFieldDecorator("overseer", {
                initialValue: prop("overseer")(editData)
              })(
                <Select placeholder="Choose">
                  {workers.map(({ id, name, surname }) => (
                    <Option value={id}>
                      {name} {surname}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>

            <Form.Item label="Time">
              {getFieldDecorator("time", {
                initialValue: prop("time")(editData)
              })(<Input placeholder="Time" addonAfter="H" />)}
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

export default CreateProcess;
