import React from "react";
import {Col, Row} from 'antd';

class MyInput extends React.Component {

    render() {
        const {actions = []} = this.props;// 有默认传来的 chang事件，和 value值
        const spanValue = 24 / actions.length;
        return (
            <Row>
                {
                    actions.map((action, index) => <Col key={index} span={spanValue}>
                            {action}
                        </Col>
                    )
                }
            </Row>
        );
    }
}

export default MyInput;

