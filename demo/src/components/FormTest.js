import React, {PureComponent} from 'react';
import {Form, Input} from 'antd';
import DynamicFormItem from "react-antd-dynamicformitem"
import MyInput from "react-antd-dynamicformitem"
import "react-antd-dynamicformitem/dist/main.min.css"

@Form.create()
class FormTest extends PureComponent {
    render() {
        let {form} = this.props;
        const matchesKey = {"input1": "", "input2": "", "input3": "", "input4": ""};
        const matchesRules = [];
        return (
            <DynamicFormItem {...form}
                             lable={"匹配项"}
                             newKey={matchesKey}
                             keysName={"matches"}
                             extra={"匹配项优先级低于排除项"}
                             renderViewData={matchesRules}
                             renderView={(params) => <MyInput
                                 initialValue={params.key}
                                 typeEnum={"MATCHES"}
                                 actions={[<Input onChange={(value)=>{params.renderViewOnchange({"item1":value},params.key)}}/>,<Input onChange={(value)=>{params.renderViewOnchange({"item2":value},params.key)}}/>,<Input onChange={(value)=>{params.renderViewOnchange({"item3":value},params.key)}}/>,<Input onChange={(value)=>{params.renderViewOnchange({"item4":value},params.key)}}/>]}
                                 renderViewOnchange={params.renderViewOnchange}
                                 />
                             }/>
        );
    }
}

export default FormTest;


