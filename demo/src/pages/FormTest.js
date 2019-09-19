import React, {PureComponent} from 'react';
import {Form, Input, Select} from 'antd';
import {DynamicFormItem, MyInput} from "react-antd-dynamicformitem"

const Option = Select.Option;

@Form.create({})
class FormTest extends PureComponent {
  render() {
    let {form} = this.props;
    const matchesKey = {"item1": "", "item2": "", "item3": "", "item4": ""};
    const matchesRules = [];
    return (
      <Form horizontal="true">
        <DynamicFormItem {...form}
                         lable={"匹配项"}
                         newKey={matchesKey}
                         keysName={"matches"}
                         extra={"匹配项优先级低于排除项"}
                         renderViewData={matchesRules}
                         renderView={(params) =>
                           <MyInput
                             initialValue={params.key}
                             typeEnum={"MATCHES"}
                             actions={[<Select placeholder={"select框"} onChange={(value) => {
                               params.renderViewOnchange({"item1": value}, params.key)
                             }} value={params.key.item1}>
                               <Option value={"option1"}>选项1</Option>
                               <Option value={"option2"}>选项2</Option>
                               <Option value={"option3"}>选项3</Option>
                               <Option value={"option4"}>选项4</Option>
                             </Select>, <Input value={params.key.item2} onChange={(value) => {
                               params.renderViewOnchange({"item2": value.target.value}, params.key)
                             }}/>, <Input value={params.key.item3} onChange={(value) => {
                               params.renderViewOnchange({"item3": value.target.value}, params.key)
                             }}/>, <Input value={params.key.item4} onChange={(value) => {
                               params.renderViewOnchange({"item4": value.target.value}, params.key)
                             }}/>]}
                             renderViewOnchange={params.renderViewOnchange}
                           />}
        />
      </Form>
    );
  }
}

export default FormTest;


