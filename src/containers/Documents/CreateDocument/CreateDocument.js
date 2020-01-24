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
  Icon,
  Upload
} from "antd";
import moment from "moment";

const CreateDocument = ({
  handleSubmit,
  editData,
  form,
  image,
  addImage,
  id
}) => {
  const { getFieldDecorator } = form;
  const UploadProps = {
    name: "file",
    multiple: false,
    action: "http://localhost:8080/image",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info) {
      if (info.file.status === "done") {
        addImage(info.file.response.fileName);
      }
    }
  };

  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={id ? "Update Document" : "Create Document"}
        extra={[
          <Button form="documentForm" key="submit" htmlType="submit">
            {id ? "Update" : "Submit"}
          </Button>
        ]}
      ></PageHeader>
      <Form
        id="documentForm"
        style={{ padding: "0 25px" }}
        onSubmit={handleSubmit}
      >
        <Row>
          <Col span={12}>
            <Form.Item label="Document name">
              {getFieldDecorator("name", {
                initialValue: prop("name")(editData)
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Document date added">
              {getFieldDecorator("date")(
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder={
                    prop("date")(editData) &&
                    moment(prop("date")(editData)).format("MMMM Do YYYY")
                  }
                />
              )}
            </Form.Item>
            <Form.Item label="Document type">
              {getFieldDecorator("documentType", {
                initialValue: prop("documentType")(editData)
              })(<Input placeholder="Type" />)}
            </Form.Item>
          </Col>
          <Col span={11} offset={1}>
            <Form.Item label="Document date">
              {getFieldDecorator("documentDate")(
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder={
                    prop("documentDate")(editData) &&
                    moment(prop("documentDate")(editData)).format(
                      "MMMM Do YYYY"
                    )
                  }
                />
              )}
            </Form.Item>

            <Form.Item label="Image">
              {getFieldDecorator("image", {
                initialValue: image
              })(<Input placeholder="image" disbaled />)}
              <Upload {...UploadProps}>
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
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

export default CreateDocument;
