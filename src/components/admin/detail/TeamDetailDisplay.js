import React from 'react';
import './Detail.css';
import { Card, Col, Row } from 'antd';
import FontAwesome from 'react-fontawesome';


export const TeamDetailDisplay = ({name, uno, dos, tres, cuatro,cinco,seis,siete,ocho,nueve,diez,once,doce,trece,catorce}) => {

    return (
        <div className="detalle">

            <div className="box_detail">
                <div className="detail">

                    <div className="descript_product">
                      <h1>Jugadores del equipo </h1>
                    <h3 className="descript_name">{name}</h3>

<div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Arquero" bordered={false}>
   <p className="descript_price"> {uno}</p>
</Card>
      </Col>
      <Col span={8}>
        <Card title="Defensa" bordered={false}>

        <p className="descript_price"> {dos}</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Defensa" bordered={false}> <p className="descript_price"> {tres}</p>  </Card>
      </Col>
    </Row>
  </div>

  <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Defensa" bordered={false}>
     <p className="descript_price"> {cuatro}</p>
  </Card>
        </Col>
        <Col span={8}>
          <Card title="Defensa" bordered={false}>

          <p className="descript_price"> {cinco}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Volante" bordered={false}> <p className="descript_price"> {seis}</p>  </Card>
        </Col>
      </Row>
    </div>
    <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Volante" bordered={false}>
       <p className="descript_price"> {siete}</p>
    </Card>
          </Col>
          <Col span={8}>
            <Card title="Volante" bordered={false}>

            <p className="descript_price"> {ocho}</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Volante" bordered={false}> <p className="descript_price"> {nueve}</p>  </Card>
          </Col>
        </Row>
      </div>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Delantero" bordered={false}>
         <p className="descript_price"> {diez}</p>
      </Card>
            </Col>
            <Col span={8}>
              <Card title="Delantero" bordered={false}>

              <p className="descript_price"> {once}</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Banca" bordered={false}> <p className="descript_price"> {doce}</p>  </Card>
            </Col>
          </Row>
        </div>

        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Banca" bordered={false}>
           <p className="descript_price"> {trece}</p>
        </Card>
              </Col>
              <Col span={8}>
                <Card title="Banca" bordered={false}>

                <p className="descript_price"> {catorce}</p>
                </Card>
              </Col>

            </Row>
          </div>









                       </div>

                    </div>

                </div>
            </div>

    );
}
