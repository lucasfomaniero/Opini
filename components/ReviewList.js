import React, {Component} from 'react';
import uuid from 'uuid';
import {FlatList} from 'react-native-gesture-handler';
import {
    Container, Header, Content, Text, Body, Title, Icon, Card, CardItem
} from 'native-base';
import {connect} from 'react-redux';


class ReviewList extends Component {
    static navigationOptions = {
      tabBarIcon: ({tintColor}) => {
          return (<Icon name="list" style={{color: tintColor}}/> );
      }
    };

    constructor(props){
        super(props);
    }

    _renderItem({item}){
        return(
            <Card>
                <CardItem header>
                    <Text>{item.title}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {item.description}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Lista de Opiniões</Title>
                    </Body>
                </Header>
                    <FlatList
                        data={this.props.reviews}
                        keyExtractor={(review) => review.id}
                        renderItem={(item) => this._renderItem(item)} />

            </Container>
        );
    }

};

const mapsStatetoProps = ({reviews}) => {
    return {reviews};
};

export default connect(mapsStatetoProps)(ReviewList);
