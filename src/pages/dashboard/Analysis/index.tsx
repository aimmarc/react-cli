import React, { useEffect, useState } from "react";
import { PageWrapper } from "@/components";
import StatisticCard from "./components/StatisticCard";
import OnlineHot from "./components/OnlineHot";
import { Row, Col } from "antd";
import { injectModel } from "@/models";
import { IListPageResponse } from "@/utils/api/httpResponse";
import SalePercent from "./components/SalePercent";

const Analysis: React.FC = (): React.ReactElement => {
    const [rankeList, setRankList]: [{ list?: any[]; total?: number }, any] =
        useState({});
    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const data: IListPageResponse =
            await injectModel.dashboardService.rankList();
        if (data.code === 0) {
            setRankList(data.data);
        }
    };

    return (
        <PageWrapper custom>
            <StatisticCard />
            <Row gutter={12} className="mt-12">
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
