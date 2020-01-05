/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Input, Button, Popconfirm, Form } from "antd";

import CollectionCreateForm from "./CollectionCreateForm";

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  anyValidation = (rule, value, callback) => {
    // const { form } = this.props;
    if (value < 5) {
      callback("Input exceed five characters limit");
    } else if (value > 20) {
      callback("Input exceed twenty characters limit");
    } else {
      callback();
    }
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;

    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            },
            dataIndex === "number" && {
              pattern: /^(?:[1-9]\d*|\d)$/,
              message: "Input must be a number"
            },
            dataIndex === "number" && { validator: this.anyValidation }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            ref={node => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Meal",
        dataIndex: "meal",
        editable: true,
        width: '200px'
      },
      {
        title: "Number of portion",
        dataIndex: "number",
        editable: true,
        width: '200px'
      },
      {
        title: "operation",
        dataIndex: "operation",
        width: '200px',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <div>
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.handleDelete(record.key)}
              >
                <Button>Delete</Button>
              </Popconfirm>
            </div>
          ) : null
      }
    ];

    this.state = {
      visible: false,
      dataSource: [
        {
          key: "0",
          meal: "Pho",
          number: 30
        },
        {
          key: "1",
          meal: "Bun",
          number: 32
        }
      ],
      count: 2
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = ({ meal, number }) => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      meal,
      number
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ dataSource: newData });
  };

  showModal = () => {
    console.log(this.state.visible);
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.handleAdd(values)
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    const { dataSource, visible } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    return (
      <div>
        <Button
          onClick={this.showModal}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          Add new food
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 600, y: 350 }}
        />
      </div>
    );
  }
}

export default EditableTable;
