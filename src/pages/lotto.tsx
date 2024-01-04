import Lotto from '../components/lotto/lotto';
import LottoMain from '../components/lotto/lottoMain';
import Header from '../components/header'
import {SectionsContainer, Section} from 'react-fullpage';
import Title from '../components/main/title';

const Lottos = () => {
    let options = {
        anchors: ['main', 'lotto'],
    };
    return (
        <div>
        <Header/>
        <SectionsContainer {...options}>
            <Section><LottoMain /></Section>
            <Section><Lotto /></Section>
        </SectionsContainer>
        </div>
    );
};

export default Lottos;