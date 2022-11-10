import React from "react";
import { Container } from "../../components/common.styled";
import { Header } from "../../components/Header";
import { Wrapper } from "./NewTicket.styled";
import iconFile from "../../assets/icon-file.png";
import { Button } from "../../components/Button";

export const NewTicket: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <div className="location">
          <p>
            My Panel {">"} Ticket {">"} #invoice
          </p>
        </div>
        <div className="my-tickets">
          <h1>My Tickets</h1>

          <div className="ticket">
            <img src={iconFile} alt="" />
            <h3>You do not gave any tickets yet!</h3>
            <p>Send your first ticket from here.</p>
            <Button buttonType="primary">ADD NEW TICKET</Button>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
