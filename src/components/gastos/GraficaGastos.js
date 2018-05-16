import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs';



class GraficaGastos extends Component{
    render() {
        const data = [
            {
                value: 0,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Colegiaturas $"
            },
            {
                value: 4000,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Tarjetas de credito $"
            },
            {
                value: 8000,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Servicios $"
            },
        ];

        const options = {
            showTooltips: true,
            multiTooltipTemplate: "<%= value %>",
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            responsive: true,
            maintainAspectRatio: true,
            showScale: true,
            animateScale: true,
            width: "80vw",
            height: "80vh",
            legend: {
                visible: true,
                labels: {
                }
            },
            tooltips: {
                enabled: true
            },
            title: {
                display:true,
                text: 'Grafica de gastos',
                fontSize: 30
            }
        };

        const centerStyle = {
            textAlign: "center"
        };

        const doughnutStyle = {
          margin: "10px"
        };

        const divStyle = {
            display: "table-cell",
            verticalAlign: "middle"
        };

        const labelStyle ={
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "5px"

        };

        return(
            <div >
                <Doughnut id="grafica1" name="grafica1" options={options} style={doughnutStyle} data={this.props.dataGraficaGastos}   />
            </div>
        );
    }
}

export default GraficaGastos;