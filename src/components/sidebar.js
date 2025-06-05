import React from 'react';
import { Layout, Menu, Icon } from 'choerodon-ui';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ paddingTop: '5em' }}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<Icon type="pie-chart" />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<Icon type="desktop" />}>
                            <Link to="/test">Test</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<Icon type="table" />}>
                            <Link to="/users">Users</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<Icon type="table" />}>
                            <Link to="/clubs">Clubs</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<Icon type="table" />}>
                            <Link to="/easy-table">Pagination Example</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#002140', padding: "0 1em" }}><h1 style={{color:'whitesmoke'}}>Ario's Choerodon Demo App</h1></Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {/* Render routes here */}
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Choerodon UI ©2025</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo;
