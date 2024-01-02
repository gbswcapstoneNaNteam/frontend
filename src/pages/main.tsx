import Session1 from '../components/main/session1';
import Session2 from '../components/main/session2';
import Session3 from '../components/main/session3';
import Header from '../components/header'
import Start from '../components/main/start';
import {SectionsContainer, Section} from 'react-fullpage';
import Title from '../components/main/title';

const Main = () => {
    let options = {
        anchors: ['main', 'sora', 'tree', 'lotto'],
    };
    return (
        <div>
        <Header/>
        <Title/>
        <SectionsContainer {...options}>
            <Section><Start /></Section>
            <Section><Session1 /></Section>
            <Section><Session2 /></Section>
            <Section><Session3 /></Section>
        </SectionsContainer>
        </div>
    );
};

export default Main;