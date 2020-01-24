import React from "react";
import { PageHeader, Button, Table, Divider, Input, Form } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

const { Column } = Table;

const Documents = ({
  documents,
  deleteDocument,
  editDocument,
  searchDocuments,
  fetchDocuments,
  form
}) => (
  <>
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Documents"
      extra={[
        <Button>
          <Link to="/document/create">Add new document</Link>
        </Button>
      ]}
    ></PageHeader>
    <Form
      layout="inline"
      style={{ padding: "14px 24px" }}
      onSubmit={searchDocuments}
    >
      <Form.Item>
        {form.getFieldDecorator("name")(
          <Input
            placeholder="Document name"
            disabled={form.getFieldValue("documentType")}
          />
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator("documentType")(
          <Input
            placeholder="Document type"
            disabled={form.getFieldValue("name")}
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
        <Divider type="vertical" />
        <Button
          type="ghost"
          onClick={() => {
            form.resetFields();
            fetchDocuments();
          }}
        >
          Clear
        </Button>
      </Form.Item>
    </Form>
    <Table style={{ padding: "0 25px" }} dataSource={documents}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Date"
        key="date"
        sorter={(a, b) => moment(a.date) - moment(b.date)}
        render={(t, { date }) => (
          <span>{moment(date).format("MMMM Do YYYY")}</span>
        )}
      />
      <Column
        title="Document Date"
        key="documentDate"
        sorter={(a, b) => moment(a.documentDate) - moment(b.documentDate)}
        render={(t, { documentDate }) => (
          <span>{moment(documentDate).format("MMMM Do YYYY")}</span>
        )}
      />
      <Column title="Type" dataIndex="documentType" key="documentType" />
      <Column
        title="Image"
        key="image"
        render={(t, { image }) => (
          <a
            onClick={() =>
              window.open(`http://localhost:8080/test?name=${image}`, null)
            }
          >
            {image}
          </a>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(t, { id, image }) => (
          <>
            <Divider type="vertical" />
            <Button type="primary" onClick={() => editDocument({ id })} ghost>
              Edit
            </Button>
            <Divider type="vertical" />
            <Button onClick={() => deleteDocument({ id })} type="danger" ghost>
              Delete
            </Button>
          </>
        )}
      />
    </Table>
  </>
);

export default Documents;
