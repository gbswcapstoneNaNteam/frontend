import Session1 from '../components/main/session1';
import Session2 from '../components/main/session2';
import Session3 from '../components/main/session3';
import Session4 from '../components/main/session4';
import Session5 from '../components/main/session5';
import Header from '../components/header'
import Start from '../components/main/start';
import {SectionsContainer, Section} from 'react-fullpage';
import Title from '../components/main/title';

const Main = () => {
    let options = {
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionThree', 'sectionThree', 'sectionThree'],
    };
    return (
        <div>
        <Header></Header>
        <Title></Title>
        <SectionsContainer {...options}>
            <Section><Start /></Section>
            <Section><Session1 /></Section>
            <Section><Session2 /></Section>
            <Section><Session3 /></Section>
            <Section><Session4 /></Section>
            <Section><Session5 /></Section>
        </SectionsContainer>
        </div>
    );
};

export default Main;