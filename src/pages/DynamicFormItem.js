import React from "react";
// import {Button, Col, Form, Icon, Row} from 'antd';
import Col from 'antd/es/col'; // 加载 JS
import Row from 'antd/es/row'; // 加载 JS
import Icon from 'antd/es/icon';// 加载 JS
import Button from 'antd/es/button';// 加载 JS
import Form from 'antd/es/form';// 加载 JS

import 'antd/es/col/style/css'; // 加载 CSS
import 'antd/es/row/style/css'; // 加载 CSS
import 'antd/es/icon/style/css'; // 加载 CSS
import 'antd/es/form/style/css'; // 加载 CSS
import 'antd/es/button/style/css'; // 加载 CSS


const FormItem = Form.Item;

class DynamicFormItem extends React.Component {
  constructor(props) {
    super(props);
    const {newKey, keys} = props;
    this.newKey = newKey;
    this.keysName = keys;
    this.uuid = props.renderViewData.length;
    this.state = {}
  }

  remove = (k) => {
    const {setFieldsValue, getFieldValue, keysName} = this.props;
    const keys = getFieldValue(`${keysName}`);
    if (keys.length === 1) {
      return;
    }
    let params = {};
    params[keysName] = keys.filter(key => key.keyName !== k.keyName);
    setTimeout(setFieldsValue({...params}), 100);
    this.forceUpdate()
  };

  add = () => {
    const {setFieldsValue, getFieldValue, keysName} = this.props;
    const keys = getFieldValue(`${keysName}`);
    let params = {};//
    let newKeys = [{keyName: this.uuid, ...this.newKey}];
    params[keysName] = keys.concat(newKeys);
    setTimeout(setFieldsValue({...params}), 100);
    this.uuid++;
  };

  renderViewOnchange = (data,keyData) => {
    data = {...keyData,...data};
    const {setFieldsValue, getFieldValue, keysName} = this.props;
    let keys = getFieldValue(`${keysName}`);
    const index = keys.findIndex((key) => data.keyName === key.keyName);
    if (index !== -1) {
      keys.splice(index, 1, data);
    }
    let params = {};
    params[keysName] = keys;
    setTimeout(setFieldsValue({...params}), 100);
  };

  render() {
    const {keysName, getFieldDecorator, getFieldValue, extra, renderViewData, lable,renderView, ...other} = this.props;// 有默认传来的 chang事件，和 value值
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: {span: 24, offset: 0},
        sm: {span: 14, offset: 8},
      },
    };
    let initialValue = [];
    renderViewData.map((key) => {
      initialValue.push({keyName: this.uuid, ...key})
      this.uuid++
    });
    getFieldDecorator(`${keysName}`, {initialValue});
    const keys = getFieldValue(`${keysName}`);
    if (keys.length === 0) {
      this.add();
    };
    const formItems = keys.map((key, index) => {
      const params = {
        renderViewOnchange:this.renderViewOnchange,
        key
      };
      return (
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? lable : ''}
          required={false}
          key={index}
          extra={index === 0 ? extra : ''}
          {...other}
        >
          <Row gutter={16}>
            <Col span={20}>
              {
                renderView(params)
              }
            </Col>
            <Col span={2}>
              {keys.length > 1 ? (
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  onClick={() => this.remove(key)}
                />
              ) : null}
            </Col>
          </Row>
        </FormItem>
      )
    });

    return (
      <Row>
        {formItems}

        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{width: '60%'}}>
            <Icon type="plus"/> Add field
          </Button>
        </FormItem>
      </Row>
    );
  }
}

export default DynamicFormItem;

