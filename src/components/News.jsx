import React from "react";
import { Typography, Row, Col, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import cryptoimage from "./images/cryptoimage.png";

const { Text, Title } = Typography;

const News = ({ simplified }) => {
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery(
    simplified ? 6 : 20
  );

  if (isFetching) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.map((article, i) => (
        <Col xcs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={article.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {article.title}
                </Title>
                <img
                  src={cryptoimage}
                  alt="stock-market-thumbnail"
                  className="news-image"
                />
              </div>
              <Text>{moment(article.date).startOf("ss").fromNow()}</Text>
              <p>
                {article.description > 100
                  ? `${article.description.substring(0, 100)}...`
                  : article.description}
              </p>
              <div>
                <div></div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
