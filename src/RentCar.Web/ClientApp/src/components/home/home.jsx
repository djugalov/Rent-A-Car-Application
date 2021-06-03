import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import HomeCarouselItem from './homeCarouselItem';
import { inject, observer } from 'mobx-react';
import Constants from '../../utils/helpers/constants';

const Home = inject('RootStore')(observer(({RootStore}) => {

    return (
        <Segment>
            <Grid>
                <Grid.Column width={15}>
                    <Carousel>
                        {
                            Constants.predefinedCarouselVehicleItems.map((item, i) => <HomeCarouselItem key={i} vehicle={item} />)
                        }
                    </Carousel>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header as='h3'>Don't miss out and check our vehicles</Header>
                    <Button as={Link} to='/book' onClick={()=>RootStore.vehicleStore.setActiveHeaderItem('/book')}>Check them now</Button>
                </Grid.Column>
            </Grid>
        </Segment>
    )

}));

export default Home;