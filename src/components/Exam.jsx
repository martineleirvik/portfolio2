import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import * as S from "./Portfolio.styled";
import Exam1 from "../img/exam/Skjermbilde.PNG";
import Exam2 from "../img/exam/Skjermbilde1.PNG";
import Exam3 from "../img/exam/Skjermbilde2.PNG";
import Exam4 from "../img/exam/Skjermbilde3.PNG";
import Exam5 from "../img/exam/Skjermbilde4.PNG";
import Exam6 from "../img/exam/Skjermbilde5.PNG";
import Exam7 from "../img/exam/Skjermbilde6.PNG";
import Exam8 from "../img/exam/Skjermbilde7.PNG";
import Exam9 from "../img/exam/Skjermbilde8.PNG";

function Exam() {
  return (
    <div>
      <S.StyledCard style={{ width: "25rem" }}>
        <Carousel>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={Exam1}
              alt="Screenshot of the website I made to Exam 2. A hotel booking website called Holidaze."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={Exam2}
              alt="Screenshot of the website I made to Exam 2. A hotel booking website called Holidaze."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={Exam3}
              alt="Screenshot of the website I made to Exam 2. A hotel booking website called Holidaze."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={Exam4}
              alt="Screenshot of the website I made to Exam 2. A hotel booking website called Holidaze."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={Exam5}
              alt="Screenshot of the website I made to Exam 2. A hotel booking website called Holidaze."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={Exam6}
              alt="Screenshot of the website I made to Exam 2. A hotel booking website called Holidaze."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={Exam7}
              alt="Screenshot of the website I made to Exam 2. A hotel booking website called Holidaze."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={Exam8}
              alt="Screenshot of the website I made to Exam 2. A hotel booking website called Holidaze."
            />
          </S.StyledCarouselItem>
          <S.StyledCarouselItem>
            <img
              className="d-block w-100"
              src={Exam9}
              alt="Screenshot of the website I made to Exam 2. A hotel booking website called Holidaze."
            />
          </S.StyledCarouselItem>
        </Carousel>
        <Card.Body>
          <Card.Title>Exam 2 - Holidaze booking page</Card.Title>
          <Card.Text>
            Project Exam is a booking site where you can search for hotels, bed
            and breakfasts and guesthouses. Holidaze is an agency located in
            Bergen. The website consists of a visitor side and an admin side.
            Visitors can search accommodations and make enquiries to a spesific
            one, as well as contact the Holidaze agency itself. Administration
            can see messages to Holidaze, a list of enquiries and create new
            establishements. The data to the website is stored in an API made
            with Strapi as a Headless CMS.
          </Card.Text>
          <S.StyledButton variant="primary">
            <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-martineleirvik">
              Github
            </a>
          </S.StyledButton>
        </Card.Body>
      </S.StyledCard>
    </div>
  );
}

export default Exam;
