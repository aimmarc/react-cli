import React from "react";
import { Card, Avatar, Divider, Tag } from "antd";
import styles from "./UserInfo.less";
import {
    IdcardOutlined,
    PartitionOutlined,
    HomeOutlined,
} from "@ant-design/icons";

const UserInfo: React.FC = (): React.ReactElement => {
    return (
        <Card bordered={false}>
            <div className={styles.avatarPane}>
                <Avatar size={104} style={{ marginBottom: 20 }} alt="A" />
                <div className={styles.username}>Aimmarc</div>
                <div>海纳百川，有容乃大</div>
            </div>
            <ul className={styles.description}>
                <li>
                    <IdcardOutlined style={{ marginRight: 8 }} />
                    交互专家
                </li>
                <li>
                    <PartitionOutlined style={{ marginRight: 8 }} />
                    蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
                </li>
                <li>
                    <HomeOutlined style={{ marginRight: 8 }} />
                    浙江省杭州市
                </li>
            </ul>
            <Divider dashed />
            <div className={styles.tags}>
                <h4 className={styles.h4}>标签</h4>
                <Tag>很有想法的</Tag>
                <Tag>专注设计</Tag>
                <Tag>萌妹子</Tag>
                <Tag>大长腿</Tag>
                <Tag>～辣</Tag>
                <Tag>海纳百川</Tag>
            </div>
            <Divider dashed />
            <div className={styles.team}>
                <h4 className={styles.h4}>团队</h4>
            </div>
        </Card>
    );
};

export default UserInfo;
