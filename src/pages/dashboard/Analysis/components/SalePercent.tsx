import React, { useEffect } from "react";
import { Card } from "antd";
import { Chart, Util } from "@antv/g2";

const data = [
    { type: "一线城市", value: 0.19 },
    { type: "二线城市", value: 0.21 },
    { type: "三线城市", value: 0.27 },
    { type: "四线及以下", value: 0.33 },
];

const SalePercent: React.FC = (): React.ReactElement => {
    useEffect(() => {
        initChart();
    }, []);

    const initChart = () => {
        const chart = new Chart({
            container: "circle",
            autoFit: true,
            height: 290,
        });
        chart.data(data);
        chart.coordinate("theta", {
            radius: 0.75,
        });
        chart.tooltip({
            showMarkers: false,
        });
        chart.interaction("element-single-selected");
        const interval = chart
            .interval()
            .adjust("stack")
            .position("value")
            .color("type", ["#063d8a", "#1770d6", "#47abfc", "#38c060"])
            .style({ opacity: 0.4 })
            .state({
                active: {
                    style: (element) => {
                        const shape = element.shape;
                        return {
                            matrix: Util.zoom(shape, 1.1),
                        };
                    },
                },
            })
            .label("type", (val) => {
                const opacity = val === "四线及以下" ? 1 : 0.5;
                return {
                    offset: -30,
                    style: {
                        opacity,
                        fill: "white",
                        fontSize: 12,
                        shadowBlur: 2,
                        shadowColor: "rgba(0, 0, 0, .45)",
                    },
                    content: (obj) => {
                        return obj.type + "\n" + obj.value + "%";
                    },
                };
            });

        chart.render();
    };

    return (
        <Card title="销售额类别占比" bordered={false} style={{ height: 400 }}>
            <div id="circle"></div>
        </Card>
    );
};

export default SalePercent;
