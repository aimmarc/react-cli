import React from "react";
import { Card, Row, Col, DatePicker } from "antd";
import BarChart from "./BarChart";
import styles from "./Turnover.less";

const tabList = [
    {
        key: "tab1",
        tab: "销售额",
    },
    {
        key: "tab2",
        tab: "访问量",
    },
];

const Turnover: React.FC = (): React.ReactElement => {
    const optionPane = (
        <span>
            <DatePicker.RangePicker />
        </span>
    );

    return (
        <Card
            className="mt-12"
            tabList={tabList}
            tabBarExtraContent={optionPane}
        >
            <Row gutter={80}>
                <Col span={17}>
                    <div style={{ padding: "30px 0" }}>
                        <BarChart />
                    </div>
                </Col>
                <Col span={7}>
                    <h4>门店访问量排名</h4>
                    <ul className={styles.shopList}>
                        {[1, 2, 3, 4, 5, 6, 7].map((key) => (
                            <li key={key}>
                                <div
                                    className={`${styles.shopRank} ${
                                        key < 4 && styles.active
                                    }`}
                                >
                                    {key}
                                </div>
                                <div
                                    className={styles.shopName}
                                >{`工厂路${key}号店`}</div>
                                <div className={styles.sales}>323,234</div>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Card>
    );
};

export default Turnover;
