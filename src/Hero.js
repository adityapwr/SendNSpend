import { Typography, List, Card } from "antd";

const { Title } = Typography;
const { Meta } = Card;

const data = [
  {
    title: "Banking & Financial Institution",
    description: "some description for title",
    img: "http://www.sendnspend.com/assets/images/bankingg.png",
    url: "http://www.sendnspend.com/banks-and-financial-institutions.html"
  },
  {
    title: "Corporates",
    description: "some description for title",
    img: "http://www.sendnspend.com/assets/images/corporatee.png",
    url: "http://www.sendnspend.com/corporate.html"
  },
  {
    title: "Program Managers",
    description: "some description for title",
    img: "/path/to/image",
    url: "http://www.sendnspend.com/program-managers.html"
  },
  {
    title: "Consultants",
    description: "some description for title",
    img: "/path/to/image",
    url: "http://www.sendnspend.com/partner-withus.html"
  }
];

const Hero = () => {
  return (
    <List
      style={{ textAlign: "center", padding: 20 }}
      grid={{ gutter: 2, column: 2, xs: 1, sm: 1, md: 1, lg: 2 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card
            title={<a href={item.url}>{item.title}</a>}
            description={item.description}
            hoverable
            bordered
            style={{ width: 240 }}
            cover={<img alt={item.title} src={item.img} />}
          ></Card>
        </List.Item>
      )}
    />
  );
};

export default Hero;
