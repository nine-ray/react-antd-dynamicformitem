import React, {PureComponent} from 'react';
import {Form, Input, Select,Button} from 'antd';
import MyInput from "../components/MyInput"
import DynamicFormItem from "../components/DynamicFormItem"

const Option = Select.Option;

@Form.create({})
class FormTest extends PureComponent {
  renderView = (params) =>
    <MyInput>
      <Select onChange={(value) => {
        params.renderViewOnchange({"item1": value}, params.key)
      }} value={params.key.item1}>
        <Option value={"option1"}>选项1</Option>
        <Option value={"option2"}>选项2</Option>
        <Option value={"option3"}>选项3</Option>
        <Option value={"option4"}>选项4</Option>
      </Select>
      <Input value={params.key.item2} placeholder="姓名" onChange={(value) => {
        params.renderViewOnchange({"item2": value.target.value}, params.key)
      }}/>
      <Input placeholder="性别" value={params.key.item3} onChange={(value) => {
        params.renderViewOnchange({"item3": value.target.value}, params.key)
      }}/>
      <Input placeholder="年龄" value={params.key.item4} onChange={(value) => {
        params.renderViewOnchange({"item4": value.target.value}, params.key)
      }}/>
    </MyInput>

  render() {
    let {form} = this.props;
    const matchesKey = {"item1": "option1", "item2": "", "item3": "", "item4": ""};
    const matchesRules = [];
    return (
      <DynamicFormItem {...form}
                       lable={"这里是lable"}
                       newKey={matchesKey}
                       keysName={"matches"}
                       extra={"这里是提示信息"}
                       renderViewData={matchesRules}
                       addButton={<Button>add</Button>}
                       renderView={this.renderView}
      />
    );
  }
}

export default FormTest;


