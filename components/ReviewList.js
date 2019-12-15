import React, {Component} from 'react';
import uuid from 'uuid';
import {FlatList} from 'react-native-gesture-handler';
import {
    Container, Header, Content, Text, Body, Title, Icon, Card, CardItem
} from 'native-base';


export default class ReviewList extends Component {
    static navigationOptions = {
      tabBarIcon: ({tintColor}) => {
          return (<Icon name="list" style={{color: tintColor}}/> );
      }
    };

    constructor(props){
        super(props);
        this.state = {
            reviews: [
                {id: uuid(), title: 'Matrix', description: 'Muito bom'},
                {id: uuid(), title: 'Clube da luta', description: 'Excelente!'},
                {id: uuid(), title: 'O poderoso chefão', description: 'Obra prima'}
            ]
        }
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
                <Content padder>
                    <FlatList
                        data={this.state.reviews}
                        keyExtractor={(review) => review.id}
                        renderItem={(item) => this._renderItem(item)} />
                </Content>
            </Container>
        );
    }


}
