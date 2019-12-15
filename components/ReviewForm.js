import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {
    Container,
    Header,
    Content,
    Item,
    Label,
    Root,
    Input,
    Form,
    Button,
    Text,
    Body,
    Title,
    Toast,
    Icon,
    Right
} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReview} from '../actions/ReviewActions';

class ReviewForm extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
            return (<Icon name="create" style={{color: tintColor}}/>);
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            imageUri: ''
        };
    }

    addImage(){
        const options = {
            title: 'Escolha uma imagem'
        };
        ImagePicker.showImagePicker(options, (resp) =>{
            this.setState({imageUri: resp.uri})
        })
    }

    drawImage(){
        if (this.state.imageUri) {
            return(<Image
                style={{marginTop: 20, height: 300, width: null}}
                source={{uri: this.state.imageUri}}
            />);
        } else {
            return null;
        }
    }

    save() {
       const {title, description} = this.state;
       this.props.addReview({title, description});
       this.setState({
           title: '',
           description: '',
           imageUri: ''
       });
       this.props.navigation.navigate('ReviewList');
    };

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>
                            Nova Opinião
                        </Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.addImage()
                        }>
                            <Icon name="camera"/>
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Label>Título</Label>
                            <Input
                                onChangeText={(title) => this.setState({title})}
                                value={this.state.title}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Descrição</Label>
                            <Input
                                onChangeText={(description) => this.setState({description})}
                                value={this.state.description}
                            />
                        </Item>
                    </Form>
                    {this.drawImage()}
                    <Button block style={styles.saveButton} onPress={() => this.save()}>
                        <Text>Salvar</Text>
                    </Button>
                </Content>
            </Container>
        );

    }
}

const styles = StyleSheet.create({
    saveButton: {
        marginTop: 30,
    },
});

const mapsDispatchToProps = (dispatch) => {
    return bindActionCreators({addReview}, dispatch);
};

export default connect(null, mapsDispatchToProps)(ReviewForm);
