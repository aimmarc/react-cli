import React from "react";
import { Statistic, Card, Row, Col } from "antd";
import styles from "./StatisticCard.less";

const StatisticCard: React.FC = (): React.ReactElement => {
    return (
        <Row gutter={10}>
            <Col span={6}>
                <Card>
                    <Statistic
                        title="总销售额"
                        value={112893}
                        prefix="¥"
                        precision={2}
                    />
                    <div className={styles.statisticFooterText}>
                        日销售额：¥50200
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <Statistic title="访问量" value={8848} />
                    <div className={styles.statisticFooterText}>
                        日访问量：1080
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <Statistic title="支付笔数" value={9010} />
                    <div className={styles.statisticFooterText}>
                        转化率：56%
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <Statistic title="运营活动效果" value={72} suffix="%" />
                    <div className={styles.statisticFooterText}>
                        运营活动效果：72%
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default StatisticCard;
