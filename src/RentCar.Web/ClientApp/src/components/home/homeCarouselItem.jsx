import React from 'react';
import { Segment, Grid, Image, Header } from 'semantic-ui-react';

const HomeCarouselItem = (props) => {
    return (
        <Segment>
            <Grid padded>
                <Grid.Column width={4}>
                    <Header as='h2'>{props.vehicle.name}</Header>
                    <p>{props.vehicle.description}</p>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Image className='imgn' src={props.vehicle.imageLink} />
                </Grid.Column>
            </Grid>
        </Segment >

    )
};

export default HomeCarouselItem;