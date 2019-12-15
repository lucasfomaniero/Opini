import React, {Component} from 'react';
import uuid from 'uuid';
import {FlatList, TouchableOpacity, Linking, Image} from 'react-native';
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
    openMap(review){
        const {latitude, longitude} = review;
        const url = Platform.select({
            ios: `maps:0,0?q=${latitude}, ${longitude}`,
            android: `geo:0,0?q=${latitude}, ${longitude}`
        });
        Linking.openURL(url)
    }
    _renderImage(item) {
        if (item.imageUri) {
            return (
                <CardItem cardBody>
                    <Image
                        source={{uri: item.imageUri}}
                        style={{height: 200, width: null, flex: 1}}
                    />
                </CardItem>
            );
        } else {
            return null;
        }
    }
    _renderItem(item){
        return(
            <Card>
                <CardItem header>
                    <Text>{item.title}</Text>
                </CardItem>
                {this._renderImage(item)}
                <CardItem>
                    <Body>
                        <Text>
                            {item.description}
                        </Text>
                    </Body>
                </CardItem>
                { item.latitude ?
                        (<CardItem>
                            <TouchableOpacity onPress={() => this.openMap(item)}>
                                <Text note> {item.latitude.toFixed(2)}, {item.longitude.toFixed(2)}</Text>
                            </TouchableOpacity>
                        </CardItem>      ) : null}
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
                        getItemCount={this.props.reviews.size}
                        keyExtractor={(review) => review.id}
                        renderItem={({item}) => this._renderItem(item)}
                    />

            </Container>
        );
    }

};

const mapsStateToProps = ({reviews}) => {
    return {reviews};
};

export default connect(mapsStateToProps)(ReviewList);
