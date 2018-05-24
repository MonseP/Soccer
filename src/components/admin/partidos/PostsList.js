import React, { Component } from 'react';
import { AutoComplete } from 'antd';


class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new AutoComplete.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
        }
    }

    getDataSource(products: Array<any>): AutoComplete.DataSource {
        if(!products) return;
        return this.state.dataSource.cloneWithRows(products);
    }

    componentDidMount() {
        this.setState({dataSource: this.getDataSource(this.props.products)});
    }

    componentWillReceiveProps(props) {
        this.setState({dataSource: this.getDataSource(props.products)});
    }

    renderRow = (products) => {
        return (
            <div>
                <p>{products.name}</p>

            </div>
        );
    }

    render() {
        return(
            <AutoComplete
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                enableEmptySections={true}
            />
        );
    }
}

export default PostsList;
