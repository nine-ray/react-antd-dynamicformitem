import React from "react";
// import {Col, Row} from 'antd';
import Col from 'antd/es/col'; // 加载 JS
import Row from 'antd/es/row'; // 加载 JS
import 'antd/es/col/style/css'; // 加载 CSS
import 'antd/es/row/style/css'; // 加载 CSS

class MyInput extends React.Component {

    render() {
        const {actions,children} = this.props;// 有默认传来的 chang事件，和 value值
        const spanValue =actions? 24 / actions.length:24 / children.length;

        return (
            <Row gutter={16}>
                {
                    actions?actions.map((action, index) => <Col key={index} span={spanValue}>
                            {action}
                        </Col>
                    ):null
                }
                {
                    children.map((action, index) => <Col key={index} span={spanValue}>
                            {action}
                        </Col>
                    )
                }
            </Row>
        );
    }
}

export default MyInput;

