import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import routes, { IRouter } from "@/config/router.config";
import { Breadcrumb } from "antd";
import config from "@/config/app";
import styles from "./Bread.less";
import { Link } from "react-router-dom";
import { app } from "@/store";

const Bread: React.FC = (): React.ReactElement => {
    const history = useHistory();
    const [breadList, setBread]: [any[], any] = useState([]);
    const [unmount, setUnmount]: [boolean, any] = useState(false);

    useEffect(() => {
        history.listen((res) => {
            if (unmount) {
                return;
            }
            resolveRoutes(res.pathname);
        });
        resolveRoutes(history.location.pathname);
        return () => {
            setUnmount(true);
        };
    }, []);

    const resolveRoutes = (path: string) => {
        const breads: any[] = [{ name: "首页", path: "/", component: 1 }];
        const loop = (array: IRouter[] | any, parent?: any): any => {
            for (let i = 0; i < array.length; i++) {
                const row = array[i];
                if (row.path === path) {
                    const ps: any[] = [];
                    const transparent = (p: any) => {
                        if (p?.parent) {
                            p.parent?.path !== "/" && ps.push(p.parent);
                            transparent(p.parent);
                        }
                    };
                    transparent(parent);
                    breads.push(...ps.reverse());
                    parent && parent.name && breads.push(parent);
                    row.name &&
                        breads.push({
                            name: row.name,
                            path: row.path,
                            component: row.component,
                        });
                    break;
                }
                if (row.routes) {
                    loop(row.routes, { ...row, parent });
                }
            }
        };
        loop(routes);
        setBread(breads);
        const title = breads[breads.length - 1].name;
        document.title = `${config.projectName}-${title}`;
        app.setTitle(title);
    };

    return (
        <div className={styles.bread}>
            <Breadcrumb>
                {breadList.map((item: any) => (
                    <Breadcrumb.Item key={item.path}>
                        {item.component ? (
                            <Link to={item.path}>{item.name}</Link>
                        ) : (
                            item.name
                        )}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </div>
    );
};

export default Bread;
