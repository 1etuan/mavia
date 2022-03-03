import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export const QuestionsMaviaPage = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Which Blockchain is Mavia built on?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Mavia is built on the Ethereum blockchain, utilizing Arbitrum as an
            L2 scaling solution. The MAVIA token can be bridged between ETH L1
            and Arbitrum L2 by using the Mavia bridge. Binance Smart Chain
            support will be coming to the Mavia bridge in the near future.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>
            What are the uses of the MAVIA and RUBY tokens?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            MAVIA is the core governance currency used in the Mavia ecosystem,
            and is also required to be used when buying or selling NFTs on the
            Mavia marketplace. RUBY is Mavia’s play-to-earn currency, which can
            be earned when defeating enemy bases in battle or successfully
            defending your base from invaders. RUBY’s main use is to upgrade
            Base, Hero and Statue NFTs, increasing their strength and value. In
            addition to these NFT upgrades, RUBY has 5 other in-game uses, all
            of which burn RUBY upon being spent, creating deflationary pressure
            on the RUBY currency.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3a-content'
          id='panel3a-header'
        >
          <Typography>
            Do I have to own a base/land in Mavia to play?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You do not need to own land outright to be able to play in Mavia,
            but you do need to “control” land. There are three ways you can
            control land in Mavia - ownership, renting or partnerships. Renting
            is a great option for new users looking to try out the game and earn
            RUBY while playing. Partnerships require no upfront payment, but
            involve a RUBY fee-sharing agreement with the land owner.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel4a-content'
          id='panel4a-header'
        >
          <Typography>
            Is Mavia economic model susceptible to hyperinflation of RUBY?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            One of the main issues many blockchain-based games are experiencing
            is hyperinflation of their play-to-earn currencies. Mavia’s
            development team spent countless hours refining and simulating the
            economic model for RUBY to support a sustainable growth model for
            RUBY. With over 10 deflationary paths for RUBY, supported by deep
            integration of RUBY utility into the gameplay of Mavia, we believe
            we have developed one of the most durable economic models in crypto
            gaming.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel5a-content'
          id='panel5a-header'
        >
          <Typography>When is the game going to be launched?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are currently aiming to launch the beta version of Mavia in Q1
            2022, with the official launch sometime in Q2 2022. While no
            specific dates have been given yet for the official launch, all
            updates from our development and design team can be followed on our
            Telegram, Discord and Twitter channels.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
