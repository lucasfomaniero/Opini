import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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
        };
    }

    save() {
       const {title, description} = this.state;
       this.props.addReview({title, description});
       this.setState({
           title: '',
           description: ''
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
