import React from 'react';
import { PageWrapper } from '@/components';
import StatisticCard from './components/StatisticCard';
import OnlineHot from './components/OnlineHot';
import { Row, Col } from 'antd';
import SalePercent from './components/SalePercent';
import Turnover from './components/Turnover';
import useFirstEffect from '@/utils/hooks/useFirstEffect';
import { useRankList } from '@/domain/model/dashboard';

const Analysis: React.FC = (): React.ReactElement => {
    useFirstEffect(() => {
        console.log('indexMounted');
        return () => {
            console.log('onunmount');
        };
    });

    const rankeList = useRankList();

    return (
        <PageWrapper custom>
            <StatisticCard />
            <Turnover />
            <Row gutter={8} className="mt-8">
                <Col span={12}>
                    <OnlineHot data={rankeList} />
                </Col>
                <Col span={12}>
                    <SalePercent />
                </Col>
            </Row>
        </PageWrapper>
    );
};

export default Analysis;
