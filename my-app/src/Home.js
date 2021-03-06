import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Cardsarticles from './Components/Cardsarticles';
import Footer from './Components/Footer';
import CarouselHome from './Components/CarouselHome';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="Home">
        <Navigationbar />
        <SearchIDE />
        <Row className='caroustyle'>
          <Col className='margin30' sm={{span: 8, offset: 2 }}>
        <CarouselHome carousel={this.props.carousel} />
        </Col>
        </Row>
        <Row className='nomargin'>
          <Col xs={{ span: 11, offset: 1 }} sm={10} xl={10} xll={10}>
            <Row className='space10 catalog'>
              {
                this.props.articles.data &&
                this.props.articles.data.slice(0, 6).map((articles, i) =>
                  <Col xs={11} md={4} xl={4} xxl={4}>
                    <Cardsarticles articles={articles} />
                  </Col>
                )}
            </Row>
          </Col>
        </Row>
        <Footer />
      </div>
    )
  }
}

export default Home;