import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'mui-image';
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ShareIcon from '@mui/icons-material/Share';
import { mysteryCardSearch } from "../../utils/API";

const Card = ({ card }) => {

    return (
        <>
            <Container fluid="md">
                <hr />
                <Row>

                    <Col xs={12} sm={1} md={4} lg={3}>
                        <Paper elevation={0} sx={{ maxWidth: "400px", backgroundColor: "black" }}>
                            <Image
                                src={card.image}
                                sx={{
                                    maxWidth: "400px", borderRadius: "14px",
                                    boxShadow: "4px 3px 5px hwb(0 0% 100% / 0.816)"
                                }}

                            >

                            </Image>
                        </Paper>
                    </Col>
                    <Col xs={12} s={6} md={6} lg={7} className="cardText">

                        <h3>{card.name}</h3>
                        <i><p>{card.type}</p></i>
                        <p>{card.text}</p>
                        <p><i>{card.flavor}</i></p>
                        {/* <hr /> */}
                        <div>
                            <h6><strong>{card.setName}</strong></h6>
                            <h6>{card.set}</h6>
                            <i><h6>{card.rarity}</h6></i>
                        </div>
                        <Row>
                            <Col xs={3} md={1}>
                                <div>
                                    <FavoriteBorderIcon className="icons icon1" />
                                </div>
                            </Col>
                            <Col xs={3} md={1} >
                                <div>
                                    <HowToVoteIcon className="icons icon2" />
                                </div>
                            </Col>
                            <Col xs={3} md={1}>
                                <div>
                                    <TravelExploreIcon className="icons icon2" />
                                </div>
                            </Col>
                            <Col xs={3} md={1}>
                                <div>
                                    <ShareIcon className="icons icon2" />
                                </div>
                            </Col>
                        </Row>

                    </Col>

                </Row>

                <hr />

            </Container>
        </>
    )
}

export default Card;