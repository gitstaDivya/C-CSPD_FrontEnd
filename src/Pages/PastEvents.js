import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './pastEvents.css'

function PastEvents(props) {
    var firstCarousels = [
        {
            imgSrc: require("./../component/images/G-20 Programme_CCSPD (1).png")
        },
        {
            imgSrc: require("./../component/images/IMG-20230320-WA0004.jpg")
        },
        {
            imgSrc: require("./../component/images/IMG-20230320-WA0008.jpg")
        }
    ]

    var secondCarousels = [
        {
            imgSrc: require("./../component/images/DSC00999.jpg")
        },
        {
            imgSrc: require("./../component/images/DSC01016.jpg")
        },
        {
            imgSrc: require("./../component/images/DSC_0296.jpg")
        }
    ]

    var thirdCarousels = [
        {
            imgSrc: require("./../component/images/CHA00767.jpg")
        },
        {
            imgSrc: require("./../component/images/Spotlight2.jpeg")
        }
    ]

    var fourthCarousels = [
        {
            imgSrc: require("./../component/images/CHA00739.jpg")
        },
        {
            imgSrc: require("./../component/images/CHA00946.jpg")
        }
    ]

    return (
        <div className='mainContainer'>
            <div className='cardContainer'>
                <div className='imageContainer'>
                    <Carousel animation='slide' interval={4000} cycleNavigation='true' autoPlay='true' indicators={false}>
                        {
                            firstCarousels.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </div>
                <div className='textContainer'>
                    <div className='heading'><p className='headingText'>JAN BHAGIDARI</p></div>
                    <div className='content'><p className='contentText'>December 1, 2022 was a momentous day as India assumed the presidency of G20. So, in order to celebrate this glorious feat, and add on to the trails of patriotic and nationalistic morals flowing through every proud Indian Citizen, the C-CSPD organized a 2-Day Programme “Jan Bhagidari @ LNMIIT: Celebrating India’s G20 Presidency.”Under this programme, 2 sub-events were held:
                        <ul>
                            <li>G20 Summit Quiz</li>
                            <li>Model G20 Summit</li>
                        </ul>
                    </p>
                    </div>
                </div>
            </div>

            <div className='cardContainer'>
                <div className='textContainer'>
                    <div className='heading'><p className='headingText'>THE SCRIBBLED STORIES</p></div>
                    <div className='content'><p className='contentText'>The workshop aimed at improving writing skills and
                        provide information based on content writing on social media
                        platforms. The event began with
                        the scribbled stories Co-founder
                        Mr. Mohit Kumar sharing his
                        experience on writing short and

                        crisp write-ups that gather
                        engagement on social media
                        platforms. This was followed by
                        an interactive session in which
                        the audience could participate and
                        ask questions. Later, more serious
                        writing formats like novels,
                        storybooks etc. were discussed
                        with insightful information on the same.</p></div>
                </div>
                <div className='imageContainer'>
                    <Carousel animation='slide' interval={4000} cycleNavigation='true' autoPlay='true' indicators={false}>
                        {
                            secondCarousels.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </div>

            </div>

            <div className='cardContainer'>
                <div className='imageContainer'>
                    <Carousel animation='slide' interval={4000} cycleNavigation='true' autoPlay='true' indicators={false}>
                        {
                            thirdCarousels.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </div>
                <div className='textContainer'>
                    <div className='heading'><p className='headingText'>SPOTLIGHT</p></div>
                    <div className='content'><p className='contentText'>As the cultural festival, Vivacity, began, LNMIIT students were treated to an exhilarating event named "SPOTLIGHT," which was organised by MEDIA CELL and C-CSPD on February 17, 2023. SPOTLIGHT is a forum where both novice and professional artists may try to present their art/gig in front of an audience, thus giving them a platform to polish and exemplify their abilities.

The chosen individuals delivered with zeal and devotion. Stand-up comedy, musical acts, and poetry were all performed during the event. Every performance was met with applause. Each participant was certainly the greatest and most gifted in their particular skills.
                    </p>
                    </div>
                </div>
            </div>

            <div className='cardContainer'>
                <div className='textContainer'>
                    <div className='heading'><p className='headingText'>THE OPEN DISCUSSION</p></div>
                    <div className='content'><p className='contentText'>Topic of discussion was “Entertainment based censorship is justified or not?”. In the start of the discussion each participant was given 2 minutes to clear their point on the topic followed by a cross questioning round. In the end 1 minute was allotted to each participant to provide conclusion based on the speeches of other participants and discussion followed by them.</p></div>
                </div>
                <div className='imageContainer'>
                    <Carousel animation='slide' interval={4000} cycleNavigation='true' autoPlay='true' indicators={false}>
                        {
                            fourthCarousels.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </div>

            </div>

        </div>
    )
}

function Item(props) {

    return (
        <Paper>
            <img className='imageBox' src={props.item.imgSrc}></img>
        </Paper>
    )
}
export default PastEvents