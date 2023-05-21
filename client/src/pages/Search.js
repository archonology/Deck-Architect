import React, { useState } from "react";
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Typography, Box, Button } from "@mui/material";
import Card from "../components/Card";
import { mysteryCardSearch } from "../utils/API";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Search = () => {

    const [mysteryCard, setMysteryCard] = useState([]);

    const handleSubmit = async () => {
        try {
            const response = await mysteryCardSearch();

            if (!response.ok) {
                throw new Error("something went wrong!");
            }

            const { cards } = await response.json();
            const cardData = cards.map((card) => ({
                cardId: card.id,
                name: card.name,
                type: card.type,
                text: card.text,
                flavor: card.flavor,
                set: card.set,
                rarity: card.rarity,
                image: card.imageUrl,
            }));

            setMysteryCard(cardData);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main>
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: "3em" }}>
                <DrawerHeader />
                <h1>Search</h1>
                <Button
                    onClick={handleSubmit}
                    variant="text"
                    color="primary"
                    sx={{ marginTop: "1em", maxWidth: "400px", padding: "1em" }}
                >
                    Get 100 Random Cards
                </Button>
                <Typography paragraph sx={{ fontFamily: "'Cormorant Garamond Light', serif", fontWeight: "300", fontSize: "20px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                </Typography>
                {mysteryCard.map((card) => {
                    return <Card key={card.id} card={card} />;
                })}
            </Box>
        </main>
    )
}

export default Search;