import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Spin, Card, Select, Layout, Button } from 'antd';


class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myContracts: [],
      loading: false,
      data: [],
      dataDate: [],
      dataYear: [],
      type: 'month',
    };

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  componentDidMount() {
    const { loading } = this.state;
    if (!loading) {
      this.setState({
        loading: !loading,
      }, () => {
        const data = [];
        const fakemoney = [1000000, 10000000, 25000000, 30000000, 12000000, 40000000, 25000000, 60000000, 80000000, 40000000, 56000000, 120000000]
        const now = new Date();
        for (let i = 1; i <= 12; i++) {
          data.push({
            name: `${i < 10 ? `0${i}` : i}/${now.getFullYear() - 1}`,
            money: fakemoney[i - 1],
          });
        }
        const fakemoney2 = [1300000, 1500000, 2500000, 3000000, 5000000, 4000000];

        const data2 = [];
        for (let i = 1; i <= 6; i++) {
          data2.push({
            name: `${i < 10 ? `0${i}` : i}/0${now.getMonth() + 1}`,
            money: fakemoney2[i - 1],
          });
        }
        this.setState({ data, loading: false, dataDate: data2 });
      });
    }
  }



  CheckIsExistedData(name, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === name) {
        return i;
      }
    }
    return -1;
  }


  handleChangeSelect(value) {
    this.setState({ type: value });
  }


  render() {
    const { data, loading, dataDate, type } = this.state;
    const mselect = (
      <div>
        <span>Thống kê theo: </span>
        <Select defaultValue="month" style={{ width: 120, marginLeft: 20 }} onChange={this.handleChangeSelect}>
          <Select.Option value="month">Tháng</Select.Option>
          <Select.Option value="date">Ngày</Select.Option>
        </Select>
        <span className="ml-3">Xuất báo cáo theo: </span>
        <Select defaultValue="CSV" style={{ width: 100, marginLeft: 20 }}>
          <Select.Option value="CSV">CSV</Select.Option>
          <Select.Option value="EXCEL">EXCEL</Select.Option>
          <Select.Option value="PDF">PDF</Select.Option>
        </Select>
        <Button className="ml-3" type="primary">Xuất báo cáo</Button>
      </div>
    );

    return (<div>
      <Layout style={{ marginTop: 10 }}>
        <Card title="Thống kê chi phí" bordered={false} extra={mselect}>
          {loading ? <Spin /> : <LineChart width={1080} height={600} data={type === 'month' ? data : dataDate}
            margin={{ top: 5, right: 30, left: 20, bottom: 15 }}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="money" stroke="#82ca9d" dot={{ stroke: 'red', strokeWidth: 2 }} />
          </LineChart>}
        </Card>
      </Layout>
    </div>);
  }
}


export default Chart;

